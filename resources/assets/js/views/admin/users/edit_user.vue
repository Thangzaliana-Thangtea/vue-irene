<template>
    <div>
        <b-card class="bg-success-card"  header-tag="h4" footer-tag="footer">
            <div>
                <h4>Edit User</h4>
                <hr>
                <b-alert :show="countDown"
                         dismissible
                         variant="success"
                         @dismissed="countDown=0"
                         @dismiss-count-down="countDownChanged">
                    User is updated
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
                            id="branchGroup"
                            breakpoint="md"
                            description="Branch where users belongs"
                            label="Branch"
                            label-for="branch"
                            :state="branchState">
                        <b-form-select :state="branchState" id="branch" v-model="user.branch_id" :options="branches" class="mb-3"/>
                    </b-form-group>
                    <b-form-group
                            id="roleGroup"
                            breakpoint="md"
                            description="Select the role of the user"
                            label="Role"
                            label-for="role"
                            :state="roleState">
                        <b-form-select :state="roleState" id="role" v-model="user.role" :options="roles" class="mb-3"/>
                    </b-form-group>

                    <hr>
                    <b-button type="submit" variant="primary">Update</b-button>
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
                },
                errors:[],
                countDown: 0,
                errorCount:0,
                token:''
            }

        },
        computed: {
            nameState () {
                return this.user.name.length >= 4
            },
            emailState () {
                return this.user.email.length >= 4
            },
            roleState () {
                return this.user.role==0 || this.user.role==1;
            },
            branchState () {
                return this.user.branch_id!=null;
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
                return this.nameState === true ? 'Correct username' : ''
            },
            invalidEmail () {
                if (this.user.email.length > 6) {
                    return ''
                } else if (this.user.email.length > 0) {
                    return 'Enter at least 6 characters'
                } else {
                    return 'Email is required'
                }
            },
            validEmail () {
                return this.emailState === true ? 'Correct email' : ''
            }
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
                this.user.branch = null;
            },
            countDownChanged: function () {
                this.countDown = 5;
            },onError: function () {
                this.errorCount = 7;
            },
            onSubmit: function (evt) {
                evt.preventDefault();
                if (this.nameState === false) {
                    return;
                }
                if(this.emailState===false)
                    return;
                if(this.roleState === false)
                    return;
                if(this.branchState === false)
                    return;
                const token=localStorage.getItem('access_token')

                axios.put(`/api/admin/users/${this.user.id}/update?token=${token}`, this.user)
                        .then(res=>{
                            this.clear();
                            this.$router.replace('/admin/users')
                        })
                        .catch(err=> {
                            if(err.response.status==406){
                                this.errors=err.response.data.errors;
                                this.onError()
                }
                        })
            }
        },
        mounted(){
            const id=this.$route.params.id;
            const token=localStorage.getItem('access_token');

            axios.get(`/api/admin/users/${id}?token=${token}`)
                    .then(res=>{
                        this.user=res.data.data;
                    })
                    .catch(err=>{
                        console.log(err)
                        this.$router.push('404')
                    });
            axios.get(`/api/admin/branches?token=${token}`)
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