<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card-group mb-0">
                        <div class="card p-4">
                            <div class="card-body">
                                <h1>Reset password</h1>
                                <p v-if="err" class="error">Invalid Email</p>
                                <p class="text-muted">Enter your email address</p>
                                <div class="input-group mb-3">
                                    <span class="input-group-addon"><i class="icon-envelope"></i></span>
                                    <input type="email" v-model="login.email" class="form-control" placeholder="Email"
                                           required>
                                </div>

                                <div class="row">
                                    <div class="col-6">
                                        <button type="button" @click="doReset" class="btn btn-primary px-4">Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let token = localStorage.getItem('access_token');

    export default {
        name: 'Login',
        data(){
            return {
                currentUser:null,
                login: {
                    email: '',
                    password: ''
                },
                err: false

            }
        },
        methods: {

            doReset: function () {
                axios.post('/password/reset', this.login)
                        .then(res=> {
//                            const token=res.data.token;
                            console.log(res.data);
                        })
                        .catch(err=> {
                            console.log(err.response)
                            this.err=true;
                        })
//                axios.post('/api/pages/reset', this.login)
//                        .then(res=> {
//                            const token=res.data.token;
//                            this.sendResetLink(token);
//                        })
//                        .catch(err=> {
//                            console.log(err.response)
//                            this.err=true;
//                        })
            },
            sendResetLink(tokens){
                console.log('my token '+tokens);
                axios.get('/api/pages/token',{token:tokens})
                        .then(res=>{
                            this.err=false;
                            console.log(res);
                        })
                        .catch(err=>{
                            console.log(err.response)
                        })
            }
        },
        mounted:function () {
        }
    }
</script>
<style>
    .error {
        color: red;
    }
</style>