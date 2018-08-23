<template>
    <div>
        <b-btn size="sm" variant="primary"><i class="fa fa-plus-circle"></i> New Attendance </b-btn>
        <b-button-group size="sm" class="pull-right">
            <b-button variant="success"><i class="fa fa-download"></i> Import </b-button>
            <b-button variant="dark"><i class="fa fa-upload"> Export</i></b-button>
        </b-button-group>
        <hr>
        <vue-event-calendar  :events="attendances" @day-changed="onDayChanged" @month-changed="onMonthChanged">

            <template slot-scope="props">
                <div v-for="(event,i) in props.showEvents" class="attendance-item">
                    <div class="attendance-title">
                        <span>{{i+1}}. {{event.title}}</span>
                        <p class="pull-right">{{getDate(event.date)}}</p>
                    </div>
                    <hr>
                    <div align="right">
                    {{event.desc}} &nbsp;&nbsp;&nbsp;
                        <b-button size="sm" variant="danger"><i class="fa fa-trash"></i> </b-button>
                    </div>
                </div>
            </template>
        </vue-event-calendar>

        <modal name="dialog" :height="400">
            <b-card header-tag="h4">
                <h3>New Attendance</h3><br>
                <b-form @submit="newAttendance" @reset="resetForm">
                    <div class="form-control">
                        <h4>
                            {{getDate(model.date)}}
                        </h4>
                    </div>
                    <br>
                    <b-form-group
                            id="empGroup"
                            breakpoint="sm"
                            label="Employee"
                            label-for="emp">
                        <b-form-select id="emp" :required="true" v-model="model.employee" :options="employees"
                                       class="mb-3"/>
                    </b-form-group>
                    <b-form-group
                            id="remGroup"
                            breakpoint="sm"
                            label="Remark"
                            label-for="rem">
                        <b-input id="rem" type="text" v-model="model.remark " placeholder="Remark"
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
</template>
<script>
    export default{
        name:'overview',
        data:function () {
            return {
                attendances:[],
                model:{
                    date:new Date(),
                    employee:null,
                    remark:''
                },
                employees:[{value:null,text:'Select employee'}]
            }
        },
        computed:{

        },
        methods:{
            getDate(date){
                return moment(date).format('DD/MM/YYYY')
            },
            onDayChanged:function (data) {
                let dateArr=data.date.split(' ');
                this.model.date=new Date(dateArr)
                this.$modal.show('dialog')
            },
            onMonthChanged:function (data) {
            },
            resetForm: function () {
                this.model.employee = null;
                this.model.date = new Date()
                this.model.remark = '';

                this.$modal.hide('dialog')
            },
            newAttendance: function () {
                if(this.model.employee==null)
                    return;
                let d=moment(this.model.date).format('DD/MM/YYYY');
                this.model.date=d;
                const token=localStorage.getItem('access_token')
                axios.post(`api/manager/attendances/create?token=${token}`, this.model)
                        .then(res=> {

                            this.attendances.push(res.data.data);
                            this.countDownChanged(3);
                            this.resetForm();
                        })
                        .catch(err=> {
                            console.log(err);
                        })
                this.$modal.hide('dialog')

            },
        },
        mounted(){

            this.token = localStorage.getItem('access_token');
            axios.get(`api/manager/attendances?token=${this.token}`)
                    .then(res=> {
                        this.attendances = res.data.data;
                    })
                    .catch(err=> {
                        if(err.response.status==401)
                            this.$router.push('/login');
                    })
            axios.get(`api/manager/employees?token=${this.token}`)
                    .then(res=> {
                        res.data.data.forEach(c=> {
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
            let today=moment(new Date()).format('YYYY/MM/DD')
            this.$EventCalendar.toDate(today)
        }

    }
</script>
<style>
    .attendance-item{
        width: auto;
        height: auto;
        border-radius: 6px;
        background-color: white;
        box-shadow: 5px 5px 5px #456;
        color: #345;
        padding: 8px;
        margin: 10px;;

    }
    .attendance-title{
        display: inline;
    }
</style>