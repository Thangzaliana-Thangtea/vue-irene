<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card variant="primary" header-tag="h4" footer-tag="footer">
                        <h4>New Deduction</h4>
                        <hr>
                        <b-alert :show="countDown"
                                 dismissible
                                 variant="success"
                                 @dismissed="countDown=0"
                                 @dismiss-count-down="countDownChanged">
                            New Deduction is created
                        </b-alert>
                        <b-alert :show="errorCount"
                                 dismissible
                                 variant="danger"
                                 @dissmissed="errorCount=0"
                                 @dismiss-count-down="onError">
                            <ul>
                                <li v-for="err in errors">
                                    <p v-for="e in err">{{e}}</p>
                                </li>
                            </ul>
                        </b-alert>

                        <b-form @submit="onSubmit" @reset="onReset">
                            <b-form-group
                                    id="nameGroup"
                                    description="The name of category"
                                    label="Name"
                                    label-for="name"
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    :state="nameState">
                                <b-form-input id="name" :state="nameState" v-model="model.name"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                    id="amount"
                                    description="An Amount to be credit"
                                    label="Amount"
                                    label-for="amount"
                                    :invalid-feedback="invalidAmount"
                                    :valid-feedback="validAmount"
                                    :state="amountState">
                                <b-form-input type="number" id="amount" :state="amountState" v-model="model.amount"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                    id="desc"
                                    description="Description"
                                    label="Description"
                                    label-for="desc">
                                <b-form-textarea id="desc" v-model="model.description"
                                                 placeholder="Enter description" :rows="3"
                                                 :max-rows="6">

                                </b-form-textarea>
                            </b-form-group>
                            <hr>
                            <b-button type="submit" variant="primary">Save</b-button>
                            <b-button type="reset" variant="danger">Reset</b-button>
                        </b-form>

                    </b-card>

                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export  default{
        computed: {
            nameState () {
                return this.model.name.length >= 3;
            },
            amountState () {
                return !isNaN(this.model.amount);
            },
            invalidFeedback () {
                if (this.model.name.length > 3) {
                    return ''
                } else if (this.model.name.length > 0) {
                    return 'Enter at least 3 characters'
                } else {
                    return 'Deduction name is required'
                }
            },
            validFeedback () {
                return this.nameState === true ? 'Correct name' : ''
            },
            invalidAmount () {
                if(isNaN(this.model.amount)){
                    return 'Amount must be decimal'
                }
                return ''
            },
            validAmount () {
                return this.amountState === true ? 'Corrected amount' : ''
            }
        },
        data(){
            return {
                model: {
                    name: '',
                    amount:0,
                    description: '',
                },
                countDown:0,
                errorCount: 0,
                errors:[]
            }

        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                if (this.nameSate===false || this.amountState===false)
                    return;

                const token = localStorage.getItem('access_token')
                axios.post(`/api/manager/deductions/create?token=${token}}`, this.model)
                        .then(res=> {
                            console.log(res);
                            this.clear();
                            this.countDownChanged(4)
                        })
                        .catch(err=> {
                            console.log(err);
                            if(err.response.status===406){
                                this.errors=err.response.data.errors;
                                this.onError(7);
                            }
                        })
            },
            onReset: function (evt) {
                evt.preventDefault();
                this.reset();
            },
            clear: function () {
                this.model.name = '';
                this.model.amount = 0;
                this.model.description = ''
            },

            countDownChanged: function (count) {
                this.countDown = count;
            },
            onError: function (count) {
                this.errorCount = count;
            }
        },
        mounted(){

        }
    }
</script>
<style>
    .required-field > label::after {
        content: '*';
        color: red;
        margin-left: 0.25rem;
    }
</style>