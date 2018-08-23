<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card class="bg-success-card" header="Change Password" header-tag="h6" footer-tag="footer">
                        <div>
                            <div class="center">

                            <b-img thumbnail src="static/img/avatars/6.jpg" class="img-avatar centered" alt="admin">
                                <span class="d-md-down-none"><strong>kimi</strong></span>
                            </b-img>
                            </div>
                            <b-alert :show="errorCount"
                                     dismissible
                                     variant="danger"
                                     @dismissed="errorCount=0"
                                     @dismiss-count-down="onError">
                                <ul>
                                    <li v-for="err in errors">{{err}}</li>
                                </ul>
                            </b-alert>

                            <b-form @submit="onSubmit" @reset="onReset">

                                <b-form-group
                                        id="oldGroup"
                                        description="Old password."
                                        label="Old Password"
                                        label-for="old"
                                        :invalid-feedback="invalidOld"
                                        :valid-feedback="validOld"
                                        :state="oldState">
                                    <b-form-input id="old" type="password" :state="oldState"
                                                  v-model.trim="user.old_password"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                        id="passwordGroup"
                                        description="Enter your new password."
                                        label="New Password"
                                        label-for="new"
                                        :invalid-feedback="invalidPassword"
                                        :valid-feedback="validPassword"
                                        :state="passwordState">
                                    <b-form-input id="new" type="password" :state="passwordState"
                                                  v-model.trim="user.new_password"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                        id="confirmGroup"
                                        description="Please enter password again"
                                        label="Confirm Password"
                                        label-for="confirm"
                                        :invalid-feedback="invalidConfirm"
                                        :valid-feedback="validConfirm"
                                        :state="confirmState">
                                    <b-form-input id="confirm" type="password" :state="confirmState"
                                                  v-model.trim="user.confirm_password"></b-form-input>
                                </b-form-group>
                                <div class="pull-right">
                                    <b-button type="submit" variant="primary">Update</b-button>
                                    <b-button type="reset" variant="danger">Reset</b-button>

                                </div>

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
        data(){
            return {
                user: {
                    old_password: '',
                    new_password: '',
                    confirm_password: ''
                },
                errors: [],
                errorCount: 0,
            }

        },
        computed: {
            oldState(){
                return this.user.old_password >= 6
            },
            passwordState () {
                return this.user.new_password.length >= 6
            },
            confirmState () {
                return this.user.new_password == this.user.confirm_password;
            },

            invalidPassword () {
                if (this.user.new_password.length > 6) {
                    return ''
                } else if (this.user.new_password.length > 0) {
                    return 'Enter at least 6 characters'
                } else {
                    return 'Please enter your password'
                }
            },
            validPassword () {
                return this.passwordState === true ? 'Correct password' : ''
            },
            invalidOld () {
                if (this.user.old_password.length > 6) {
                    return ''
                } else if (this.user.old_password.length > 0) {
                    return 'Enter at least 6 characters'
                } else {
                    return 'Please enter your password'
                }
            },
            validOld () {
                return this.oldState === true ? 'Correct password' : ''
            },
            invalidConfirm () {
                if (this.user.confirm_password == this.user.new_password) {
                    return ''
                } else if (this.user.confirm_password.length > 0) {
                    return 'Enter at least 6 characters'
                } else {
                    return "Password doesn't match"
                }
            },
            validConfirm () {
                return this.confirmState === true ? 'Match password' : ''
            },
        },

        methods: {

            onReset: function (evt) {
                evt.preventDefault();
                this.clear();
            },
            clear: function () {
                this.user.old_password = '';
                this.user.new_password = '';
                this.user.confirm_password = '';
            },
            onError: function () {
                this.errorCount = 7;
            },
            onSubmit: function (evt) {
                evt.preventDefault();

                if (this.passwordState || this.oldState || this.confirmState) {
                    return;
                }

                let token=localStorage.getItem('access_token');
                axios.post('/admin/change-password'+"?token="+token, this.user)
                        .then(res=> {
                            this.clear();
                        })
                        .catch(err=> {
                            if (err.response.status === 406) {
                                this.errors = err.response.data;
                                this.onError();
                            }
                        })
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