<template>
    <div>
        <b-row>
            <b-col cols="4">
                <b-card>
                    <h2>Persona</h2>
                    <b-form @submit="onSubmit" @reset="onReset">
                        <b-form-group
                                id="nameGroup"
                                description="Please enter the name of employee."
                                label="Name"
                                label-for="name"
                                :invalid-feedback="invalidFeedback"
                                :valid-feedback="validFeedback"
                                :state="state">
                            <b-form-input id="name" type="text" :state="state"
                                          v-model.trim="employee.name"></b-form-input>
                        </b-form-group>

                        <b-form-group
                                id="contactGroup"
                                description="Please enter employee contact (Mobile or landline)"
                                label="Contact"
                                label-for="contact">
                            <b-form-input id="contact" type="text" v-model="employee.contact"
                                          placeholder="Employee contact">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group
                                id="addressGroup"
                                description="Customer address"
                                label="Address"
                                label-for="address">
                            <b-form-textarea id="address" v-model="employee.address"
                                             placeholder="Employee Address"
                                             :rows="3"
                                             :max-rows="6">
                            </b-form-textarea>
                        </b-form-group>
                        <b-form-group
                                id="descGroup"
                                description="Description"
                                label="Description"
                                label-for="description">
                            <b-form-textarea id="description" v-model="employee.description"
                                             placeholder="Description of Employee"
                                             :rows="3"
                                             :max-rows="6">
                            </b-form-textarea>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Update</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-card>
            </b-col>
            <b-col cols="8">

                    <full-calendar :events="attendances" lang="en" @dayClick="dayClick">
                        <div class="pull-right" slot="fc-header-right">
                            <b-button size="sm" variant="success">
                                <i class="fa fa-filter" @click="console.log(e)"></i>
                            </b-button>
                            <b-button size="sm" variant="primary">
                                <i class="fa fa-list" @click="console.log(e)"></i>
                            </b-button>

                        </div>
                        <div slot="fc-body-card">
                            <hr/>
                            <!--<b-list-group>-->
                                <!--<b-list-group-item class="centered"><h4>Attended Employees</h4></b-list-group-item>-->
                                <!--&lt;!&ndash;<b-list-group-item v-for="(att,index) in attendances">{{att.title}} <strong> attended on </strong> {{att.start}}</b-list-group-item>&ndash;&gt;-->
                            <!--</b-list-group>-->

                            <!--<ul class="list-group">-->
                                <!--<li class="list-group-item" v-for="att in attendances">{{att.title}} <strong>Attended on </strong> {{att.start}} </li>-->
                            <!--</ul>-->
                        </div>
                    </full-calendar>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import fullCalendar from 'vue-fullcalendar'
    export default{
        name:'EmployeeAttendance',
        components:{
            fullCalendar
        },
        data:function () {
            return {
                attendances:[],
                employee:{
                    name:'',
                    contact:'',
                    address:'',
                    description:''
                },
                token:''
            }
        },
        computed: {
            state () {
                return this.employee.name.length >= 4 ? true : false
            },
            invalidFeedback () {
                if (this.employee.name.length > 4) {
                    return ''
                } else if (this.employee.name.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Please enter something'
                }
            },
            validFeedback () {
                return this.state === true ? 'Thank you' : ''
            }
        },
        methods:{
            dayClick:function () {

            },
            onSubmit:function () {
                
            },
            onReset:function () {

            }
        },
        mounted:function () {
            const id=this.$route.params.id
            console.log(id);
            this.token=localStorage.getItem('access_token');

            axios.get(`api/manager/employees/${id}/attendances?token=${this.token}`)
                    .then(res=>{
                        this.attendances=res.data.data;
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            axios.get(`api/manager/employees/${id}`)
                    .then(res=>{
                        this.employee=res.data.data;
                    })
                    .catch(err=>{
                        console.log(err.response)
                    })
        }
    }
</script>