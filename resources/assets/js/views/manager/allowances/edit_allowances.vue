<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card variant="primary" header-tag="h4" footer-tag="footer">
                        <h4>Edit Allowance</h4>
                        <hr>
                        <b-alert :show="dismissCountDown"
                                 dismissible
                                 variant="success"
                                 @dismissed="dismissCountDown=0"
                                 @dismiss-count-down="countDownChanged">
                            New Category is created
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
                            <b-button type="submit" variant="primary"> Save</b-button>
                            <b-button type="reset" variant="danger"> Reset</b-button>
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
                return this.model.name.length >= 4 ? true : false
            },
            amountState () {
                return this.model.amount.length >= 4 ? true : false
            },
            invalidFeedback () {
                if (this.model.name.length > 4) {
                    return ''
                } else if (this.model.name.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Category name is required'
                }
            },
            validFeedback () {
                return this.nameState === true ? 'Correct Category name' : ''
            },
            invalidAmount () {
                if (!isNaN(this.model.amount)) {
                    return ''
                }  else {
                    return 'An amount is required'
                }
            },
            validAmount () {
                return this.amountState === true ? 'Corrected amount' : ''
            }
        },
        data(){
            return {
                model: {
                    id:null,
                    name: '',
                    amount:0,
                    description: '',
                },
                dismissSecs: 5,
                dismissCountDown: 0,
                errorCount: 0,
                errors:[]
            }

        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                if(this.nameState===false || this.amountState===false)
                    return
                const token = localStorage.getItem('access_token')
                axios.put(`/api/manager/allowances/${this.model.id}/update?token=${token}}`, this.model)
                        .then(res=> {
                            this.clear()
                            this.$router.push('/manager/deductions')
                        })
                        .catch(err=> {
                            console.log(err.response);
                            this.errors=err.response.data.errors;
                            this.onError(7);
                        })
            },
            onReset: function (evt) {
                evt.preventDefault();
                this.clear();
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
            const  token=localStorage.getItem('access_token');
            const id=this.$route.params.id;
            axios.get(`api/manager/allowances/${id}?token=${token}`)
                    .then(res=>{
                        this.model=res.data.data;
                    })
                    .catch(err=>{
                        console.log(err.response)
                    })
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