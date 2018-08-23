<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card class="bg-success-card" header-tag="h4" footer-tag="footer">
                        <div>
                            <h4>New User</h4>
                            <hr>
                            <b-alert :show="countDown"
                                     dismissible
                                     variant="success"
                                     @dismissed="countDown=0"
                                     @dismiss-count-down="countDownChanged">
                                New User is created
                            </b-alert>
                            <b-alert :show="errorCount"
                                     dismissible
                                     variant="danger"
                                     @dismissed="errorCount=0"
                                     @dismiss-count-down="onError">
                                <ul>
                                    <li v-for="err in errors">
                                        <p v-for="e in err">{{e}}</p>
                                    </li>
                                </ul>
                            </b-alert>

                            <b-form autoComplete="false" @submit="onSubmit" @reset="onReset">
                                <b-form-group
                                        id="nameGroup"
                                        description="Please enter the name of User."
                                        label="Name"
                                        label-for="name"
                                        :invalid-feedback="invalidName"
                                        :valid-feedback="validName"
                                        :state="nameState">
                                    <b-form-input id="name" type="text" :state="nameState"
                                                  v-model.trim="user.name"></b-form-input>
                                </b-form-group>

                                <b-form-group
                                        id="nameGroup"
                                        description="Please enter the email of user."
                                        label="Email"
                                        label-for="email"
                                        :invalid-feedback="invalidEmail"
                                        :valid-feedback="validEmail"
                                        :state="emailState">
                                    <b-form-input id="email" type="email" :state="emailState"
                                                  v-model.trim="user.email"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                        id="passwordGroup"
                                        description="Password of user."
                                        label="Password"
                                        label-for="password"
                                        :invalid-feedback="invalidPassword"
                                        :valid-feedback="validPassword"
                                        :state="passwordState">
                                    <b-form-input id="name" type="password" :state="passwordState"
                                                  v-model.trim="user.password"></b-form-input>
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

                                <b-form-group
                                        id="branchGroup"
                                        breakpoint="md"
                                        description="Branch where users belongs"
                                        label="Branch"
                                        label-for="branch">
                                    <b-form-select id="branch" v-model="user.branch_id" :options="branches"
                                                   class="mb-3"/>
                                </b-form-group>
                                <b-form-group
                                        id="roleGroup"
                                        breakpoint="md"
                                        description="Select the role of the user"
                                        label="Role"
                                        label-for="role">
                                    <b-form-select id="role" v-model="user.role" :options="roles" class="mb-3"/>
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
        data(){
            return {
                branches: [{value: null, text: "Select Branch"}],
                roles: [
                    {value: -1, disable: true, text: 'Select Role'},
                    {value: 0, text: 'Administrator'},
                    {value: 1, text: 'Manager'}
                ],
                user: {
                    branch_id: null,
                    role: -1,
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                },
                errors: [],
                countDown: 0,
                errorCount: 0,
            }

        },
        computed: {
            nameState () {
                return this.user.name.length >= 4
            },
            emailState () {
                return this.user.email.length >= 4 ? true : false
            },
            passwordState () {
                return this.user.password.length >= 6 ? true : false
            },
            confirmState () {
                return this.user.password == this.user.confirm_password;
            },
            roleState () {
                return this.user.role == 0 || this.user.role == 1;
            },
            invalidName () {
                if (this.user.name.length > 4) {
                    return ''
                } else if (this.user.name.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Username is required'
                }
            },
            validName () {
                return this.nameState === true ? 'Username is correct' : ''
            },
            invalidEmail () {
                if (this.user.email.length > 4) {
                    return ''
                } else if (this.user.email.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Please enter something'
                }
            },
            validEmail () {
                return this.emailState === true ? 'Email is correct' : ''
            },
            invalidPassword () {
                if (this.user.password.length > 6) {
                    return ''
                } else if (this.user.password.length > 0) {
                    return 'Enter at least 6 characters'
                } else {
                    return 'Please enter your password'
                }
            },
            validPassword () {
                return this.passwordState === true ? 'Correct password' : ''
            },
            invalidConfirm () {
                if (this.user.confirm_password == this.user.password) {
                    return ''
                } else if (this.user.confirm_password.length > 0) {
                    return 'Enter at least 6 characters'
                } else {
                    return 'Please enter your password again'
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
                this.user.role = -1,
                        this.user.name = '';
                this.user.email = '';
                this.user.password = '';
                this.user.confirm_password = '';
                this.user.branch = null;
            },
            countDownChanged: function () {
                this.countDown = 5;
            },
            onError: function () {
                this.errorCount = 7;
            },
            onSubmit: function (evt) {
                evt.preventDefault();
                if (this.nameState === false) {
                    return;
                }
                if (this.emailState === false) {
                    return;
                }
                if (this.passwordState === false) {
                    return;
                }
                if (this.confirmState === false) {
                    return;
                }
                if (this.roleState === false) {
                    return;
                }
                const token=localStorage.getItem('access_token');

                axios.post(`/api/admin/users/create?token=${token}`, this.user)
                        .then(res=> {
                            this.clear();
                            this.countDownChanged();
                        })
                        .catch(err=> {
                            if(err.response.status === 406){
                                this.errors=err.response.data.errors;
                                this.onError();
                        }})
            }
        },
        mounted(){
            let token = localStorage.getItem('access_token');

            axios.get(`/api/admin/branches/?token=${token}`)
                    .then(res=> {
                        res.data.data.forEach(cat=> {
                            let branch = {
                                value: cat.id,
                                text: cat.name
                            };
                            this.branches.push(branch);
                        });
                    })
                    .catch(err=> {
                        console.log(err)
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