

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
               <b-card>
                   <h4>Appointments made by employee</h4>
                   <hr>
                   <!--<ul class="list-group">-->
                       <!--<li class=" list-group-item" v-for="app in appointments">-->

                           <!--<strong>{{app.employee}} </strong> is appointed a <strong>{{app.serviceName}}</strong> on <strong>{{app.date}}</strong>-->
                           <!--<div class="pull-right">-->
                               <!--<b-button @click="edit(app.id)" size="sm" variant="success"> <i class="fa fa-edit"></i> </b-button>-->
                               <!--<b-button @click="doDelete(app.id)" size="sm" variant="danger"> <i class="fa fa-close"></i> </b-button>-->
                           <!--</div>-->
                       <!--</li>-->
                   <!--</ul>-->
                   <timeline>
                       <timeline-title> Appointments</timeline-title>
                        <timeline-item color="#345">yakkk</timeline-item>
                        <timeline-item :hollow="true">item</timeline-item>
                   </timeline>
               </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    // Import required dependencies
    import 'bootstrap/dist/css/bootstrap.css';
    // Import this component
    import datePicker from 'vue-bootstrap-datetimepicker';
    import {Timeline,TimelineItem,TimelineTitle} from 'vue-cute-timeline';
    import Vue from 'vue'
    // Import date picker css
    import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

    export default {
        components: {
            datePicker,
            Timeline,TimelineItem,TimelineTitle
        },
        data () {
            return {
                date: new Date(),
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
            appointments:[],
            }
        },
        methods:{
            edit:function (id) {
                this.$router.replace(`/manager/appointments/${id}`)
            },
            doDelete:function (id) {
                const  token=localStorage.getItem('access_token')
                axios.delete(`/api/manager/appointments/${id}/destroy?token=${token}`)
                        .then(res=>{
                            console.log(res.data)
                            this.appointments=this.appointments.filter(ap=>ap.id!=res.data.data.id)
                        })
                        .catch(err=>{
                            console.log(err.response)
                        })
            }
        },

        mounted:function () {
            let token=localStorage.getItem('access_token')
            const id=this.$route.params.id;
            axios.get(`/api/manager/employees/${id}/appointments?token=${token}`)
                    .then(res=>{
                        res.data.data.forEach(app=>{
                            let appointment={
                                id:app.id,
                                employee:app.employeeName,
                                serviceName:app.serviceName,
                                date:moment(app.date).format('D-M-Y hh:mm:ss a')
                            }
                            this.appointments.push(appointment)
                        })
                        console.log(res.data.data)
                    })
                    .catch(err=>{
                        console.log(err.response)
                    })
        }
    }
</script> 