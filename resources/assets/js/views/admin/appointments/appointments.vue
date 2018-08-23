<template>
    <div>
        <full-calendar :events="appointments" lang="en" @dayClick="dayClick">
            <div slot="fc-header-left">
                <b-button size="sm" variant="primary">
                    <i class="fa fa-list" @click="console.log(e)"></i>
                </b-button>
                <b-button size="sm" variant="success">
                <i class="fa fa-filter" @click="console.log(e)"></i>
                </b-button>
                </span>

            </div>
            <div slot="fc-header-right">
                <b-button size="sm" variant="primary" @click="$modal.show('dialog')">New Appointment</b-button>
            </div>
            <div slot="fc-body-card">
                <p>
                    Helloworld
                </p>
            </div>
        </full-calendar>
        <div>
            <modal name="dialog" :height="500">
                <b-card header-tag="h4" header="New appointment">
                    <b-form @submit="createNewAppointment" @reset="resetForm">
                        <b-form-group
                                id="customerGroup"
                                breakpoint="sm"
                                label="Customer"
                                label-for="customer">
                            <b-form-select id="customer" :required="true" v-model="appointment.customer" :options="customers"
                                           class="mb-3"/>
                        </b-form-group>
                        <b-form-group
                                id="serviceGroup"
                                breakpoint="sm"
                                label="Service"
                                label-for="service">
                            <b-form-select id="service" :required="true" v-model="appointment.service" :options="services"
                                           class="mb-3"/>
                        </b-form-group>
                        <b-row>
                            <b-col>
                                <b-form-group
                                        id="dateGroup"
                                        breakpoint="sm"
                                        label="From"
                                        label-for="dateTime">
                                    <b-input type="date" :required="true" id="dateTime" v-model="appointment.start_at" placeholder="YY/MM/DD"
                                             class="mb-3"/>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group
                                        id="dateGroup"
                                        breakpoint="sm"
                                        label="To"
                                        label-for="to">
                                    <b-input type="date" :required="true" id="to" v-model="appointment.end_at" placeholder="YY/MM/DD"
                                             class="mb-3"/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-form-group
                                id="remGroup"
                                breakpoint="sm"
                                label="Remark"
                                label-for="rem">
                            <b-input id="rem"  type="text" v-model="appointment.remark " placeholder="Remark"
                                           class="mb-3"/>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Save</b-button>
                        <b-button type="reset" variant="danger">Cancel</b-button>
                    </b-form>
                </b-card>

            </modal>
        </div>
    </div>
</template>

<script>
    import VModal from 'vue-js-modal';
    import Vue from 'vue';
    Vue.use(VModal);
    var demoEvents = [
        {
            title : 'Sunny Out of Office',
            start : '2018-06-07',
            end : '2018-07-27'
        }
    ]
    export default {
        data () {
            return {
                appointments:[],
                customers:[{value:null,text:"Select customer"}],
                services:[{value:null,text:'Select Service'}],

                appointment:{
                    customer:null,
                    service:null,
                    start_at:new Date(),
                    end_at:new Date(),
                    remark:''
                },
            }
        },
        components : {
            'full-calendar': require('vue-fullcalendar')
        },
        methods:{
            dayClick:function (day, jsEvent) {
                this.appointment.start_at=day;
                this.appointment.end_at=day;
                console.log("current date ".day)
                this.$modal.show('dialog');
            },
            createNewAppointment:function () {
                const token=localStorage.getItem('access_token');
                axios.post(`/api/admin/appointments/create?token=${token}`,this.appointment)
                        .then(res=>{
                            console.log(res.data.data);
                            this.appointments.push(res.data.data)
                            this.resetForm()
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                this.$modal.hide('dialog')

            },
            resetForm:function () {
                this.appointment.customer=null;
                this.appointment.service=null;
                this.appointment.start_at=new Date;
                this.appointment.end_at=new Date;
                this.appointment.remark='';

                this.$modal.hide('dialog')
            }
        },
        mounted:function () {
            const token=localStorage.getItem('access_token');
            axios.get(`/api/admin/appointments?token=${token}`)
                    .then(res=>{
                        this.appointments=res.data.data;
                        console.log(res.data.data);
                    })
                    .catch(err=>{
                        console.log(err.response)
                    })
            axios.get(`/api/admin/customers?token=${token}`)
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
            axios.get(`/api/admin/services?token=${token}`)
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