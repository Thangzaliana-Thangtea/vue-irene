<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card header-tag="h4" footer-tag="footer">
                        <div>
                            <h4>New Customer</h4>
                            <hr>
                            <b-alert :show="countDown"
                                     dismissible
                                     variant="success"
                                     @dismissed="countDown=0"
                                     @dismiss-count-down="countDownChanged">
                                Nw Customer is created
                            </b-alert>
                            <b-alert :show="errorCount"
                                     dismissible
                                     variant="danger"
                                     @dismissed="errorCount=0"
                                     @dismiss-count-down="errorCountChanged">
                                <ul>
                                    <li v-for="err in errors">{{err}}</li>
                                </ul>
                            </b-alert>

                            <b-form @submit="onSubmit" @reset="onReset">
                                <b-form-group
                                        id="nameGroup"
                                        description="Please enter customer name."
                                        label="Name"
                                        label-for="name"
                                        :invalid-feedback="invalidName"
                                        :valid-feedback="validName"
                                        :state="nameState">
                                    <b-form-input id="name" type="text" placeholder="Name" :state="nameState"
                                                  v-model.trim="model.name"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                        id="emailGroup"
                                        description="Enter an Email of Customer"
                                        label="Email"
                                        label-for="email"
                                        :invalid-feedback="invalidEmail"
                                        :valid-feedback="validEmail"
                                        :state="emailState">
                                    <b-form-input id="email" type="email" v-model="model.email" placeholder=" Email">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                        id="contactGroup"
                                        description="Please Enter Customer contact "
                                        label="Contact"
                                        label-for="contact">
                                    <b-form-input id="contact" type="text" v-model="model.contact"
                                                  placeholder="Contact">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                        id="addressGroup"
                                        description="Customer address"
                                        label="Address"
                                        label-for="address">
                                    <b-form-textarea id="address" v-model="model.address" placeholder=" Address"
                                                     :rows="3"
                                                     :max-rows="6">
                                    </b-form-textarea>
                                </b-form-group>
                                <b-form-group
                                        id="descGroup"
                                        description="Description"
                                        label="Description"
                                        label-for="description">
                                    <b-form-textarea id="description" v-model="model.description"
                                                     placeholder="Description "
                                                     :rows="3"
                                                     :max-rows="6">
                                    </b-form-textarea>
                                </b-form-group>
                                <hr>

                                <b-button type="submit" variant="primary">Save</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>

                        </div>
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
                return this.model.name.length >= 4;
            },
            emailState () {
                return this.model.email.length >= 4;
            },
            invalidName () {
                if (this.model.name.length > 4) {
                    return ''
                } else if (this.model.name.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Customer name is required'
                }
            },
            validName () {
                return this.nameState === true ? 'Correct customer name' : ''
            },
            invalidEmail () {
                if (this.model.email.length > 4) {
                    return ''
                } else if (this.model.email.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Email is required'
                }
            },
            validEmail () {
                return this.emailState === true ? 'Correct Email' : ''
            }
        },
        data(){
            return {
                model: {
                    name: '',
                    email: '',
                    contact: '',
                    address: '',
                    description: '',
                },
                countDown: 0,
                errorCount: 0,
                errors: []
            }

        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                if (this.nameState === false || this.emailState === false) {
                    return;
                }
                const token = localStorage.getItem('access_token');
                axios.post(`/api/manager/customers/create?token=${token}`, this.model)
                        .then(res=> {
                            console.log(res);
                            this.reset()
                            this.countDownChanged();
                        })
                        .catch(err=> {
                            if (err.response.status == 406)
                                this.errors = err.response.data;
                        })
            },
            onReset: function (evt) {
                evt.preventDefault();
                this.reset();
            },
            reset: function () {
                this.model.email = '';
                this.model.contact = '';
                this.model.name = '';
                this.model.address = '';
                this.model.description = '';
            },
            countDownChanged: function () {
                this.countDown = 4;
            },
            errorCountChanged: function () {
                this.errorCount = 7;
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