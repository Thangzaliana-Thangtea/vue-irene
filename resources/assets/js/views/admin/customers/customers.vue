<template>
    <b-card  header-tag="h4" class="bg-info-card">
        <h4>List of Customers</h4>
        <hr>
        <v-client-table :data="tableData" :columns="columns" :options="options">
            <div slot="actions" slot-scope="props">

                <b-dropdown size="sm" variant="success" text="Actions">
                    <b-dropdown-item @click="appointments(props.row.id)"><i class="fa fa-calendar"></i> Appointments</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item @click="edit(props.row.id)"><i class="fa fa-edit"></i>Edit</b-dropdown-item>
                    <b-dropdown-item @click="deleteCustomer(props.row.id)"> <i class="fa fa-trash"></i>Delete</b-dropdown-item>
                </b-dropdown>
            </div>
        </v-client-table>
    </b-card>
</template>
<script>
    import Vue from 'vue';
    import {
            ClientTable,
            Event
    } from 'vue-tables-2';
    Vue.use(ClientTable, {}, true);
    export default {
        name: "advanced_tables",
        data() {
            return {
                columns: ['id', 'name','email','contact', 'address', 'actions'],
                tableData: [],
                options: {
                    sortIcon: {
                        base: 'fa',
                        up: 'fa fa-angle-up',
                        down: 'fa fa-angle-down'
                    },
                    // see the options API
                    skin: "table-hover table-striped table-bordered",
                    perPage: 10,
                    // footerHeadings: true,
                    highlightMatches: true,
                    pagination: {
                        chunk: 3,
                        //set dropdown to true to get dropdown instead of pagenation
                        dropdown: true
                    }
                }
            }
        },
        methods: {
            edit(id){
                this.$router.replace(`/admin/customers/${id}/edit`);
            },
            deleteCustomer(id){
                const token=localStorage.getItem('access_token');
                axios.delete(`/api/admin/customers/${id}/destroy?token=${token}`)
                        .then(res=> {
                    this.tableData = this.tableData.filter(item=>item.id !== res.data.data.id);
            }).catch(err=> {
                    console.log(err.response)
            });
            },
            appointments:function (id) {
                this.$router.push(`/manager/customers/${id}/appointments`);
            }
        },
        mounted() {
            const token=localStorage.getItem('access_token');

            axios.get(`api/admin/customers?token=${token}`).then(response => {
                this.tableData = response.data.data;
            console.log(response.data.data);
        }).catch(function (error) {
                console.log(error)
            });
        }
    }

</script>
