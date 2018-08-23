<template>
    <div>
        <b-alert :show="countDown"
                 dismissible
                 variant="success"
                 @dismissed="countDown=0"
                 @dismiss-count-down="showInfo">
            New Appointment is created
        </b-alert>

        <full-calendar :events="appointments" lang="en" @dayClick="dayClick" @eventClick="eventClick">
            <div slot="fc-header-right" class="pull-right">
                <b-button size="sm" variant="primary">
                    <i class="fa fa-list" @click="console.log(e)"></i>
                </b-button>
                <b-button size="sm" variant="success">
                    <i class="fa fa-filter" @click="console.log(e)"></i>
                </b-button>
                </span>

            </div>
            <div slot="fc-header-left">
                <b-button size="sm" variant="primary" @click="$modal.show('dialog')"><i class="fa fa-plus-circle"> New Appointment</i></b-button>
            </div>
            <div slot="fc-body-card">

            </div>
        </full-calendar>
        <div>
            <modal name="dialog" :height="580">
                <b-card header-tag="h4">
                    <h4>New Appointment</h4>
                    <hr>
                    <b-form @submit="createNewAppointment" @reset="resetForm">
                        <b-form-group
                                id="customerGroup"
                                breakpoint="sm"
                                label="Customer"
                                label-for="customer"
                                :invalidFeedback="invalidCustomer"
                                :validFeedback="validCustomer"
                                :state="customerState">
                            <b-form-select id="customer" :state="customerState" :required="true" v-model="appointment.customer" :options="customers"
                                           class="mb-3"/>
                        </b-form-group>
                        <b-form-group
                                id="serviceGroup"
                                breakpoint="sm"
                                label="Service"
                                label-for="service"
                                :validFeedback="validService"
                                :invalidFeedback="invalidService"
                                :state="serviceState">
                            <b-form-select id="service" :state="serviceState"  :required="true" v-model="appointment.service" :options="services"
                                           class="mb-3"/>
                            </b-form-group>
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
                        <div class="pull-right">
                            <b-button type="submit" variant="primary">Create</b-button>
                            <b-button type="reset" variant="danger">Cancel</b-button>

                        </div>

                    </b-form>
                </b-card>

            </modal>
        </div>
    </div>
</template>

<script>
    import VModal from 'vue-js-modal';
    import Vue from 'vue';
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

    Vue.use(VModal);

    export default {
        components : {
            'full-calendar': require('vue-fullcalendar'),
            datePicker
        },
        data () {
            return {
                tempDate:new Date(),
                appointments:[],
                customers:[{value:null,text:"Select customer"}],
                services:[{value:null,text:'Select Service'}],

                appointment:{
                    customer:null,
                    service:null,
                    date:new Date(),
                    remark:'',
                    dateTime:moment()
                },
                countDown:0,
                token:'',
                config: {
                    format: 'DD-MM-YYYY hh:mm a',
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
            }
        },
        computed:{
            customerState () {
                return this.appointment.customer!=null;
            },
            serviceState () {
                return this.appointment.service!=null;
            },
            dateState () {
                return this.tempDate!=null;
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
            }
        },

        methods:{
            dayClick:function (day, jsEvent) {
                this.appointment.date=day;
                this.$modal.show('dialog');
            },
            eventClick:function (event, jsEvent,pos) {
                this.$router.replace(`/manager/appointments/${event.id}`)
            },
            createNewAppointment:function () {
                if(this.customerState==false || this.serviceState===false || this.dateState===false)
                    return
                let date;
                if(this.appointment.date instanceof Date){
                    date=this.appointment.date
                }else{
                    date=moment(this.appointment.date,'DD-MM-YYYY hh:mm a').toDate()
                }
                console.log(date);
                this.appointment.date=moment(date).format('YYYY MM DD HH mm ss');
                this.appointment.dateTime=date.getTime();

                axios.post(`/api/manager/appointments/create?token=${this.token}`,this.appointment)
                        .then(res=>{
                            let temp=res.data.data;
                            let app={
                                id:temp.id,
                                title:temp.title,
                                start:temp.start.date,
                                end:temp.start.date,
                                cssClass:temp.cssClass
                            }
                            this.appointments.push(app);
                            this.resetForm()
                            this.showInfo(3)
                        })
                        .catch(err=>{
                            console.log(err.response)
                        })
                this.$modal.hide('dialog')

            },
            resetForm:function () {
                this.appointment.customer=null;
                this.appointment.date=null;
                this.appointment.end_at=new Date;
                this.appointment.remark='';

                this.$modal.hide('dialog')
            },
            showInfo:function (count) {
                this.countDown=count;
            }
        },
        mounted:function () {
            this.token=localStorage.getItem('access_token');

            axios.get(`api/manager/appointments?token=${this.token}`)
                    .then(res=>{
                        this.appointments=res.data.data;
                        console.log("appointments ")
                        console.log(res.data.data);
                    })
                    .catch(err=>{
                        console.log(err.response)
                    })
            axios.get(`api/manager/customers?token=${this.token}`)
                    .then(res=>{
                        res.data.data.forEach(c=>{
                            let cust={
                                value:c.id,text:c.name
                            };
                            this.customers.push(cust);
                        });
                    })
                    .catch(err=>{
                        console.log(err.response);
                    });
            axios.get(`/api/manager/services?token=${this.token}`)
                    .then(res=>{
                        res.data.data.forEach(s=>{
                            let ser={
                                value:s.id,text:s.name
                            }
                            this.services.push(ser);
                        });
                    })
                    .catch(err=>{
                        console.log(err.response);
                    });
        }
    }
</script>
<style lang="scss" >
    .created{
        background-color: #456 !important;
        color:white !important;
    }
    .finished{
        background-color: #00bb00 !important;
        color:white !important;
    }
    .cancel{
        color: white !important;
        background-color: orangered;
    }
</style>