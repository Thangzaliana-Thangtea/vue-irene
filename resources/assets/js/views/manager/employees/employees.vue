<template>
    <div>

        <b-card header-tag="h4" class="bg-success-card">
            <h4>List of Employees</h4>
            <hr>
            <v-client-table :data="tableData" :columns="columns" :options="options">

                <div slot="actions" slot-scope="props">
                    <!--<b-button-group size="sm">-->
                    <!--<b-button variant="success" @click="edit(props.row.id)">Edit</b-button>-->
                    <!--<b-button variant="danger" @click="deleteEmployee(props.row.id)">Delete</b-button>-->
                    <!--</b-button-group>-->
                    <b-dropdown size="sm" variant="success" text="Actions">
                        <b-dropdown-item @click="viewAppointments(props.row.id)"><i class="fa fa-calendar"></i>
                            Appointments
                        </b-dropdown-item>
                        <b-dropdown-item @click="viewAttendance(props.row.id)"><i class="fa fa-bookmark"></i> Attendance
                        </b-dropdown-item>
                        <b-dropdown-item @click="edit(props.row.id)"><i class="fa fa-edit"></i>Edit</b-dropdown-item>
                        <b-dropdown-item @Click="deleteEmployee(props.row.id)"><i class="fa fa-trash"></i>Delete
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </v-client-table>

        </b-card>

        <modal name="loading-dialog" height="200">
            <p>Loading</p>
        </modal>
    </div>

</template>
<script>

    import Vue from 'vue';
    import VModal from 'vue-js-modal'
    import {
            ClientTable,
            Event
    } from 'vue-tables-2';
    Vue.use(ClientTable, {}, false);
    Vue.use(VModal);
    export default {

        data() {
            return {
                id: 0,
                columns: ['id', 'name', 'contact', 'address', 'actions'],

                tableData: [],
                options: {
                    sortIcon: {
                        base: 'fa',
                        up: 'fa fa-angle-up',
                        down: 'fa fa-angle-down'
                    },
                    // see the options API
                    skin: "table-hover table-striped table-bordered",
                    perPage: 7,
                    // footerHeadings: true,
                    highlightMatches: true,
                    pagination: {
                        chunk: 3,
                        //set dropdown to true to get dropdown instead of pagenation
                        dropdown: false
                    }
                }
            }
        },
        methods: {
            edit(id){
                this.id = id;
                this.$router.push(`/manager/employees/${id}/edit`)
            },
            confirmDelete(){
                console.log(this.id);
            },
            deleteEmployee: function (id) {
                axios.delete(`/api/manager/employees/${id}/destroy`)
                        .then(res=> {
                            this.tableData = this.tableData.filter(item=>item.id != res.data.data.id)
                        }).catch(err=> {
                    console.log(err);
                })
            },
            viewAttendance: function (id) {
                this.$router.push(`/manager/employees/${id}/attendances`)
            },
            viewAppointments: function (id) {
                this.$router.push(`/manager/employees/${id}/appointments`)
            }
        },
        mounted() {
            this.$modal.show('loading-dialog')

            
            this.token = localStorage.getItem('access_token');
            axios.get(`/api/manager/employees?token=${this.token}`).then(res => {
                this.tableData = res.data.data;
                console.log(res)
            }).catch(function (error) {
                console.log(error)
            });
            this.$modal.hide('loading-dialog')
        }
    }


</script>
