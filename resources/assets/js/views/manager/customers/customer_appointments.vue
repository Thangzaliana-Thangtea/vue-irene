<template>
    <b-row>
        <b-col cols="4">
            <b-card>
                <div>
                    <!--<b-alert :show="countDown"-->
                             <!--dismissible-->
                             <!--variant="success"-->
                             <!--@dismissed="countDown=0"-->
                             <!--@dismiss-count-down="countDownChanged">-->
                        <!--Nw Customer is created-->
                    <!--</b-alert>-->
                    <!--<b-alert :show="errorCount"-->
                             <!--dismissible-->
                             <!--variant="danger"-->
                             <!--@dismissed="errorCount=0"-->
                             <!--@dismiss-count-down="errorCountChanged">-->
                        <!--<ul>-->
                            <!--<li v-for="err in errors">{{err}}</li>-->
                        <!--</ul>-->
                    <!--</b-alert>-->

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

                        <b-button type="submit" variant="primary">Update</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>

                </div>
            </b-card>
        </b-col>
        <b-col cols="8">
            <ul class="list-group">
                <li class="list-group-item active">
                    <h4>Appointment History</h4>
                </li>
                <li class="list-group-item" v-for="app in appointments">
                    <strong>{{app.title}}</strong> appointment is scheduled on
                    <strong>{{getDate(app.date)}}</strong>
                    &nbsp; &nbsp;&nbsp;
                        <b-badge v-if="app.status==0" variant="dark">Booked</b-badge>
                        <b-badge v-if="app.status==1" variant="primary">Finished</b-badge>
                    <b-btn size="sm" class="pull-right" variant="danger"><i class="fa fa-close"></i></b-btn>
                </li>
            </ul>
        </b-col>
    </b-row>
</template>
<script>
    export default{
        data:function () {
            return {
                appointments:[],
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
            },
        },
        methods:{
            getDate(data){
                return moment(data).format('DD-MMM-YYYY hh:mm:ss a')
            },
            onSubmit:function () {

            },
            onReset:function () {

            }
        },
        mounted:function () {
            const id=this.$route.params.id;
            const token=localStorage.getItem('access_token');
            axios.get(`api/manager/customers/${id}?token=${token}`)
                    .then(res=>{
                        this.model=res.data.data;
                     })
                    .catch(err=>{
                        console.log(err.response)
                    });

            axios.get(`api/manager/customers/${id}/appointments?token=${token}`)
                    .then(res=>{
                        this.appointments=res.data.data;
                     })
                    .catch(err=>{
                        console.log(err.response)
                    })
        }
    }
</script>