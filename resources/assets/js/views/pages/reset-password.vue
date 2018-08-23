<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card-group mb-0">
                        <div class="card p-4">
                            <div class="card-body">
                                <h4>New Password</h4>
                                <hr>
                                <b-alert :show="countDown"
                                         dismissible
                                         variant="success"
                                         @dismissed="countDown=0"
                                         @dismiss-count-down="countDownChanged">
                                    New Branch is created
                                </b-alert>
                                <b-alert :show="errorCount"
                                         dismissible
                                         variant="danger"
                                         @dismissed="errorCount=0"
                                         @dismiss-count-down="errorChanged">
                                    <ul>
                                        <li v-for="err in errors">
                                            <p v-for="e in err">{{e}}</p>
                                        </li>
                                    </ul>
                                </b-alert>

                                <b-form @submit="onSubmit" @reset="onReset">
                                    <b-form-group
                                            id="newGrp"
                                            label="New password"
                                            label-for="newPwd"
                                            :invalid-feedback="invalidPassword"
                                            :valid-feedback="validPassword"
                                            :state="pwdState">
                                        <b-form-input id="newPwd" :state="pwdState"
                                                      v-model.trim="model.password" placeholder="New password"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            id="confirmGroup"
                                            description="Confirm Password"
                                            label="Confirm Password"
                                            label-for="confirm"
                                            :invalid-feedback="invalidConfirm"
                                            :valid-feedback="validConfirm"
                                            :state="confirmState">
                                        <b-form-input id="confirm" v-model="model.confirm_password"
                                                         placeholder="Confirm password"
                                                         :state="confirmState">

                                        </b-form-input>
                                    </b-form-group>
                                    <hr>
                                        <b-button type="submit" variant="primary">Save</b-button>
                                        <b-button type="reset" variant="danger">Reset</b-button>
                                </b-form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export  default{
        computed: {
            pwdState () {
                return this.model.password.length > 6 ;
            },
            confirmState () {
                return this.model.password==this.model.confirm_password;
            },
            invalidPassword () {
                if (this.model.password.length > 6) {
                    return ''
                } else if (this.model.password.length > 0) {
                    return 'Enter at least 6 characters'
                } else {
                    return 'Name is required'
                }
            },
            validPassword () {
                return this.state === true ? 'Valid password' : ''
            },
            invalidConfirm () {
                if (this.model.confirm_password.length > 6) {
                    return ''
                } else if (this.model.confirm_password.length > 0) {
                    return 'Enter at least 6 characters'
                }else if(this.model.password!=this.model.confirm_password){
                    return 'Password not match'
                }else {
                    return 'Name is required'
                }
            },
            validConfirm () {
                return this.state === true ? 'Matched password' : ''
            }
        },
        data(){
            return {
                model: {
                    password: '',
                    confirm_password: '',
                },
                countDown: 0,
                errorCount: 0,
                errors: []
            }

        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                if(this.pwdState===false || this.confirmState===false)
                    return


            },
            onReset: function (evt) {
                evt.preventDefault();
                this.reset();
            },
            reset: function () {
                this.model.password = '';
                this.model.confirm_password = '';
            },
            countDownChanged: function (count) {
                this.countDown = count;
            },
            errorChanged: function (count) {
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