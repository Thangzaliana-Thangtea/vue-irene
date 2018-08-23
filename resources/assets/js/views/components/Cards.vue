<template>
    <div>
        <b-card class="bg-success-card" header="New User" header-tag="h4" footer-tag="footer">
            <div>

                <b-alert :show="countDown"
                         dismissible
                         variant="success"
                         @dismissed="countDown=0"
                         @dismiss-count-down="countDownChanged">
                    New User is created
                </b-alert>
                <b-alert :show="countDown"
                         dismissible
                         variant="danger"
                         @dismissed="countDown=0"
                         @dismiss-count-down="countDownChanged">
                    {{errors}}
                </b-alert>

                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-group
                            id="nameGroup"
                            description="Please enter the name of User."
                            label="Name"
                            label-for="name"
                            :invalid-feedback="invalidName"
                            :valid-feedback="validName"
                            :state="nameState">
                        <b-form-input id="name" type="text" :state="nameState" v-model.trim="user.name"></b-form-input>
                    </b-form-group>

                    <b-form-group
                            id="nameGroup"
                            description="Please enter the email of user."
                            label="Email"
                            label-for="email"
                            :invalid-feedback="invalidEmail"
                            :valid-feedback="validEmail"
                            :state="emailState">
                        <b-form-input id="email" type="email" :state="emailState" v-model.trim="user.email"></b-form-input>
                    </b-form-group>
                    <b-form-group
                            id="passwordGroup"
                            description="Password of user."
                            label="Password"
                            label-for="password"
                            :invalid-feedback="invalidPassword"
                            :valid-feedback="validPassword"
                            :state="passwordState">
                        <b-form-input id="name" type="password" :state="passwordState" v-model.trim="user.password"></b-form-input>
                    </b-form-group>
                    <b-form-group
                            id="confirmGroup"
                            description="Please enter password again"
                            label="Confirm Password"
                            label-for="confirm"
                            :invalid-feedback="invalidConfirm"
                            :valid-feedback="validConfirm"
                            :state="confirmState">
                        <b-form-input id="confirm" type="password" :state="confirmState" v-model.trim="user.confirm_password"></b-form-input>
                    </b-form-group>

                    <b-form-group
                            id="branchGroup"
                            breakpoint="md"
                            description="Branch where users belongs"
                            label="Branch"
                            label-for="branch">
                        <b-form-select id="branch" v-model="user.branch_id" :options="branches" class="mb-3"/>
                    </b-form-group>
                    <b-form-group
                            id="roleGroup"
                            breakpoint="md"
                            description="Select the role of the user"
                            label="Role"
                            label-for="role">
                        <b-form-select id="role" v-model="user.role" :options="roles" class="mb-3"/>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Save</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>

            </div>
        </b-card>

    </div>
</template>
<script>
    export  default{
        data(){
            return {
                branches:[{value:null,text:"Select Branch"}],
                roles: [
                        {value: -1, disable:true, text: 'Select Role'},
                        {value: 0, text: 'Administrator'},
                        {value: 1, text: 'Manager'}
                        ],
                user: {
                    branch_id:null,
                    role: -1,
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                },
                errors:[],
                countDown: 0
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
                return this.user.password.length >= 4 ? true : false
            },
            confirmState () {
                return this.user.password == this.user.confirm;
            },
            roleState () {
                return !this.user.role==-1;
            },
            invalidName () {
                if (this.user.name.length > 4) {
                    return ''
                } else if (this.user.name.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'An user name is required'
                }
            },
            validName () {
                return this.nameState === true ? 'Thank you' : ''
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
                return this.emailState === true ? 'Thank you' : ''
            },
            invalidPassword () {
                if (this.user.password.length > 4) {
                    return ''
                } else if (this.user.password.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Please enter your password'
                }
            },
            validPassword () {
                return this.passwordState === true ? 'Correct password' : ''
            },
            invalidConfirm () {
                if (this.user.confirm_password==this.user.password) {
                    return ''
                } else if (this.user.confirm_password.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Please enter your password'
                }
            },
            validConfirm () {
                return this.confirmState === true ? 'Correct password' : ''
            },
        },

        methods: {

            onReset: function (evt) {
                evt.preventDefault();
                this.clear();
            },
            clear: function () {
                this.user.role=-1,
                this.user.name ='';
                this.user.email = '';
                this.user.password = '';
                this.user.confirm_password = '';
                this.user.branch = null;
            },
            countDownChanged: function () {
                this.countDown = 5;
            },
            onSubmit: function (evt) {
                evt.preventDefault();
                if (this.state === false) {
                    return;
                }

                axios.post('/admin/users/create', this.user)
                        .then(res=>{
                            this.clear();
                            this.countDownChanged();
                        })
                        .catch(err=> {
                            console.log(err);
                        })
            }
        },
        mounted(){
            axios.get('/admin/branches')
                    .then(res=>{
                        res.data.data.forEach(cat=>{
                            let branch={
                                value:cat.id,
                                text:cat.name
                            };
                            this.branches.push(branch);
                        });
                    })
                    .catch(err=>{
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