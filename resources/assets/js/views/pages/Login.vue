<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card-group mb-0">
                        <div class="card p-4">
                            <div class="card-body">
                                <h1>Login</h1>
                                <p v-if="err" class="error">Invalid Credential</p>
                                <p class="text-muted">Sign In to your account</p>
                                <div class="input-group mb-3">
                                    <span class="input-group-addon"><i class="icon-envelope"></i></span>
                                    <input type="email" v-model="login.email" class="form-control" placeholder="Email"
                                           required>
                                </div>
                                <div class="input-group mb-4">
                                    <span class="input-group-addon"><i class="icon-lock"></i></span>
                                    <input type="password" v-model="login.password" class="form-control"
                                           placeholder="Password" required>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <button type="button" @click="doLogin" class="btn btn-primary px-4">Login
                                        </button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <button type="button" @click="showReset" class="btn btn-link px-0">Forgot password?</button>
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
            gotoDashboard: function () {
                let token = localStorage.getItem('access_token');
                if(!token)
                    return
                axios.get('/api/auth/me'+'?token='+token)
                        .then(res=> {
                            this.currentUser=res.data;
                            if (res.data.role==0)
                                this.$router.replace('/admin');
                            else{
                                this.$router.replace('/manager');
                            }
                        }).catch(err=> {
                            console.log(err.response)
                        })
            },
            showReset:function () {
                this.$router.replace('forgot-password')
            },
            doLogin: function () {

                axios.post('/api/auth/login', this.login)
                        .then(res=> {
                            if (res.data.access_token) {
                                localStorage.setItem('access_token', res.data.access_token);
                                this.currentUser=res.data.user;

                                if(this.currentUser.role==0)
                                    this.$router.replace('/admin')
                                if(this.currentUser.role==1)
                                    this.$router.replace('/manager')
                            } else {
                                console.log(res)
                            }
                        })
                        .catch(err=> {
                            this.err = true;
                        })
            }
        },
        mounted:function () {
            this.gotoDashboard();
        }
    }
</script>
<style>
    .error {
        color: red;
    }
</style>