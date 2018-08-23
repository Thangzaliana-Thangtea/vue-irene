<template>

    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <b-card>
                        <h2>Appointment</h2>
                        <hr>
                        <b-form @submit="submitForm" autocomplete="false">
                            <b-form-group
                                    id="dateGroup"
                                    label="Date"
                                    label-for="date"
                                    :invalidFeedback="invalidDate"
                                    :validFeedback="validDate"
                                    :state="dateState">
                                <date-picker id="date" class="form-control" v-model="appointment.date" :config="config"></date-picker>
                            </b-form-group>
                            <b-form-group
                                    id="customerGroup"
                                    description="Selected Customer"
                                    breakpoint="sm"
                                    label="Customer"
                                    label-for="customer"
                                    :invalidFeedback="invalidCustomer"
                                    :validFeedback="validCustomer"
                                    :state="customerState">
                                <b-form-select id="customer" :state="customerState" :required="true"
                                               v-model="appointment.customer" :options="customers"
                                               class="mb-3"/>
                            </b-form-group>
                            <b-form-group
                                    id="serviceGroup"
                                    description="Selected Service"
                                    breakpoint="sm"
                                    label="Service"
                                    label-for="service"
                                    :validFeedback="validService"
                                    :invalidFeedback="invalidService"
                                    :state="serviceState">
                                <b-form-select id="service" :state="serviceState" :required="true"
                                               v-model="appointment.service" :options="services"
                                               class="mb-3"/>
                            </b-form-group>

                            <b-form-group
                                    id="empGroup"
                                    description="Selected Employee"
                                    breakpoint="sm"
                                    label="Employee"
                                    label-for="emp"
                                    :validFeedback="validEmployee"
                                    :invalidFeedback="invalidEmployee"
                                    :state="employeeState">
                                <b-form-select id="emp" :state="employeeState" :required="true"
                                               v-model="appointment.employee" :options="employees"
                                               class="mb-3"/>
                            </b-form-group>

                            <b-form-group
                                    id="remGroup"
                                    breakpoint="sm"
                                    label="Remark"
                                    label-for="rem">
                                <b-form-textarea id="description" v-model="appointment.remark"
                                                 placeholder="Remark"
                                                 :rows="3"
                                                 :max-rows="6"></b-form-textarea>
                            </b-form-group>
                            <hr>
                            <b-button type="submit" variant="primary">Update</b-button>
                            <b-button @click="deleteAppointment" variant="danger">Delete</b-button>

                        </b-form>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import 'bootstrap/dist/css/bootstrap.css';
    // Import this component
    import datePicker from 'vue-bootstrap-datetimepicker';
    // Import date picker css
    import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';


    export default{
        components:{
            datePicker
        },
        data(){
            return{
                config: {
                    format: 'DD/MM/YYYY hh:mm a',
                    useCurrent: true,
                    sideBySide:true,
                    icons:{
                        time: 'fa fa-time',
                        date: 'fa fa-calendar',
                        up: 'fa fa-chevron-up',
                        down: 'fa fa-chevron-down',
                        previous: 'fa fa-chevron-left',
                        next: 'fa fa-chevron-right',
                        today: 'fa fa-screenshot',
                        clear: 'fa fa-trash',
                        close: 'fa fa-remove'
                    }
                },
               appointment:{
                    id:null,
                   date:moment(),
                   service:null,
                   customer:null,
                   employee:null,
                   remark:'',
               },
                services:[{value:null,text:"Select Service"}],
                customers:[{value:null,text:"Select Customer"}],
                employees:[{value:null,text:"Select Employee"}],
            }
        },
        methods:{
            submitForm:function () {
                if (this.customerState===false || this.serviceState===false || this.employeeState===false ||this.dateState===false)
                    return
                let token =localStorage.getItem('access_token');
                let date;
                if(this.appointment.date instanceof Date){
                    date=this.appointment.date
                }else{
                    date=moment(this.appointment.date,'DD-MM-YYYY hh:mm a').toDate()
                }
                console.log(date);
                this.appointment.date=moment(date).format('YYYY MM DD HH mm ss');
                this.appointment.dateTime=date.getTime();
                axios.put(`/api/manager/appointments/${this.appointment.id}/update?token=${token}`,this.appointment)
                        .then(res=>{
                            this.$router.replace('/manager/appointments')
                        })
                        .catch(err=>{
                            console.log(err)
                        })
            },
            deleteAppointment:function () {
                const token=localStorage.getItem('access_token');
                const id=this.appointment.id;
                axios.delete(`/api/manager/appointments/${id}/destroy?token=${token}`)
                        .then(res=>{
                            this.$router.replace('/manager/appointments')
                        })
                        .catch(err=>{
                            console.log(err)
                        })
            }

        },
        computed:{
            customerState () {
                return this.appointment.customer!=null;
            },
            serviceState () {
                return this.appointment.service!=null;
            },
            employeeState(){
                return this.appointment.employee!=null;
            },
            dateState () {
                return this.appointment.date!=null;
            },
            invalidCustomer () {
                if(this.appointment.customer==null){
                    return 'Customer is required'
                }
            },
            validCustomer () {
                return this.customerState === true ? 'Input is corrected' : ''
            },
            invalidService() {
                if(this.appointment.customer==null){
                    return 'Service is required'
                }
            },
            validService () {
                return this.state === true ? 'Input is corrected' : ''
            },
            invalidDate() {
                if(this.appointment.date==null){
                    return 'Date and time is required'
                }
            },
            validDate () {
                return this.dateState === true ? 'Input is corrected' : ''
            },
            invalidEmployee() {
                if(this.appointment.date==null){
                    return 'Employee is required'
                }
            },
            validEmployee() {
                return this.dateState === true ? 'Input is corrected' : ''
            }
        },

        mounted:function () {
                const token=localStorage.getItem('access_token');
                axios.get(`api/manager/customers?token=${token}`)
                        .then(res=>{
                            res.data.data.forEach(c=>{
                                let cust={
                                    value:c.id,
                                    text:c.name
                                }
                                this.customers.push(cust)
                            })
                        })
                        .catch(err=>{
                            console.log(err)
                        });
                axios.get(`api/manager/services?token=${token}`)
                        .then(res=>{
                            res.data.data.forEach(s=>{
                                let ser={
                                    value:s.id,
                                    text:s.name
                                }
                                this.services.push(ser)
                            })
                            console.log(this.services)
                        })
                        .catch(err=>{
                            console.log(err)
                        });
            axios.get(`api/manager/employees?token=${token}`)
                        .then(res=>{
                            res.data.data.forEach(e=>{
                                let emp={
                                    value:e.id,
                                    text:e.name
                                }
                                this.employees.push(emp)
                            })
                        })
                        .catch(err=>{
                            console.log(err)
                        });
            const appId=this.$route.params.id;
            axios.get(`api/manager/appointments/${appId}?token=${token}`)
                        .then(res=>{
                            this.appointment=res.data.data;
                            this.appointment.date=moment(res.data.data.date);
                            console.log(this.appointment.date)
                        })
                        .catch(err=>{
                            console.log(err)
                        });


        }
    }

</script>