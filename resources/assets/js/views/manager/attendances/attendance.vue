<template>
    <div>
        <b-alert :show="countDown"
                 dismissible
                 variant="success"
                 @dismissed="countDown=0"
                 @dismiss-count-down="countDownChanged">
            New Attendances is collected
        </b-alert>
        <b-alert :show="deleteCount"
                 dismissible
                 variant="danger"
                 @dismissed="deleteCount=0"
                 @dismiss-count-down="showDeleteAlert">
            Attendance info is deleted
        </b-alert>
        <full-calendar :events="attendances" lang="en" @dayClick="dayClick" @eventClick="eventClick">
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
                <b-list-group>
                    <b-list-group-item class="centered"><h4>Attended Employees</h4></b-list-group-item>
                    <!--<b-list-group-item v-for="(att,index) in attendances">{{att.title}} <strong> attended on </strong> {{att.start}}</b-list-group-item>-->
                </b-list-group>

                <ul class="list-group">
                    <li class="list-group-item" v-for="att in attendances">{{att.title}} <strong>Attended on </strong> {{att.start}} </li>
                </ul>
            </div>
        </full-calendar>
        <div>
            <modal name="dialog" :height="400">
                <b-card header-tag="h4">
                    <h3>New Attendance</h3><br>
                    <b-form @submit="newAttendance" @reset="resetForm">
                        <div class="form-control">
                            <h4>
                                {{getDate}}
                            </h4>
                        </div>
                        <br>
                        <b-form-group
                                id="empGroup"
                                breakpoint="sm"
                                label="Employee"
                                label-for="emp">
                            <b-form-select id="emp" :required="true" v-model="attendance.employee" :options="employees"
                                           class="mb-3"/>
                        </b-form-group>
                        <b-form-group
                                id="remGroup"
                                breakpoint="sm"
                                label="Remark"
                                label-for="rem">
                            <b-input id="rem" type="text" v-model="attendance.remark " placeholder="Remark"
                                     class="mb-3"/>
                        </b-form-group>
                        <div class="pull-right">
                            <b-button type="submit" variant="primary">Save</b-button>

                            <b-button type="reset" variant="danger">Cancel</b-button>
                        </div>
                    </b-form>
                </b-card>

            </modal>
        </div>
        <div>
            <modal name="show_dialog" :height="300">
                <b-card>
                    <h2>Attendance detail</h2><br>
                     <h4>{{show.date}}</h4><br>
                    <h6>{{show.title}}</h6><br>
                    <h6>{{show.remark}}</h6><br>
                        <div class="pull-right">

                            <b-button @click="deleteAttendance" variant="danger">Remove</b-button>
                            <b-button @click="close" variant="dark">Close</b-button>
                        </div>
                </b-card>

            </modal>

        </div>
        <div>
            <modal name="loading_dialog" width="100" height="30">
                <strong>{{loadingText}}</strong>
                <b-progress :value="counter" :max="max"></b-progress>
            </modal>
        </div>
    </div>
</template>

<script>
    import VModal from 'vue-js-modal';
    import Vue from 'vue';

    Vue.use(VModal);

    export default {

        data () {
            return {
                attendances: [],
                employees: [{value: null, text: "Select Employee"}],

                attendance: {
                    employee: null,
                    date: moment(),
                    remark: '',
                },
                show: {
                    title:'',
                    id:null,
                    employee: null,
                    date: null,
                    remark: ''
                },
                token: '',
                counter: 0,
                max: 0,
                loadingText:'',
                countDown:0,
                deleteCount:0,
            }
        },
        computed:{
            getDate(){
                return moment(this.attendance.date).format('DD/MMM/YYYY')
            }
        },
        components: {
            'full-calendar': require('vue-fullcalendar')
        },
        methods: {
            dayClick: function (day, jsEvent) {
                this.attendance.date = day
                this.$modal.show('dialog');
            },
            eventClick: function (event, jsEvent,pos) {
                this.show= event;
                this.$modal.show('show_dialog');
            },
            newAttendance: function () {
                if(this.attendance.employee==null)
                    return;
                let d=moment(this.attendance.date).format('DD/MM/YYYY');
                this.attendance.date=d;
                axios.post(`api/manager/attendances/create?token=${this.token}`, this.attendance)
                        .then(res=> {
                            console.log(res.data.data)
                            let att={
                                id:res.data.data.id,
                                title:res.data.data.title,
                                start:moment(res.data.data.start.date),
                                end:moment(res.data.data.start.date)
                            }

                            this.attendances.push(att);
                            this.countDownChanged(3);
                            this.resetForm();
                        })
                        .catch(err=> {
                            if(err.response.status==201)
                                this.countDownChanged(3);
                            console.log(err);
                        })
                this.$modal.hide('dialog')

            },
            close:function () {
                this.$modal.hide('show_dialog')
            },
            deleteAttendance:function () {
                let token=localStorage.getItem('access_token');
                axios.delete(`/api/manager/attendances/${this.show.id}/destroy`)
                        .then(res=>{
                            this.attendances=this.attendances.filter(att=>att.id!=res.data.data.id)
                            this.showDeleteAlert(3);
                        })
                        .catch(err=>{
                            console.log(err.response)
                        })
                this.$modal.hide('show_dialog')
            },
            showDeleteAlert:function (count) {
                this.deleteCount=count;
            },
            resetForm: function () {
                this.attendance.employee = null;
                this.attendance.date = moment(),
                this.attendance.remark = '';

                this.$modal.hide('dialog')
            },
            countDownChanged:function (count) {
                this.countDown=count;
            }
        },
        mounted: function () {
            this.token = localStorage.getItem('access_token');
            this.$modal.show('progress_dialog')
            this.loadingText = "Fetching attendances data..."
            this.counter = 0;
            axios.get(`api/manager/attendances?token=${this.token}`)
                    .then(res=> {
                        this.attendances = res.data.data;
                        console.log(res.data.data);
                    })
                    .catch(err=> {
                        if(err.response.status==401)
                            this.$router.push('/login');
                    })
            axios.get(`api/manager/employees?token=${this.token}`)
                    .then(res=> {
                        this.max = res.data.length;
                        res.data.data.forEach(c=> {
                            this.counter++;
                            let cust = {
                                value: c.id, text: c.name
                            };
                            this.employees.push(cust);
                        });
                    })
                    .catch(err=> {
                        if(err.response.status==401)
                            this.$router.push('/login');
                    });
            this.$modal.hide('progress_dialog')
        }
    }
</script>
<style lang="scss">
    .created {
        background-color: #456 !important;
        color: white !important;
    }

    .finished {
        background-color: #00bb00 !important;
        color: white !important;
    }

    .cancel {
        color: white !important;
        background-color: orangered;
    }
</style>