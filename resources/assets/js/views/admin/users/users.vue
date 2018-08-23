<template>
    <div class="row">

        <div class="col-lg-12 mb-3">
            <b-card  variant="primary" header-tag="h4" class="bg-info-card">
                <h4>List Of Users</h4>
                <hr>
                <v-client-table :data="tableData" :columns="columns" :options="options">

                    <div slot="role" slot-scope="props">
                        <p>{{props.row.role == 0 ?'Admin':'Manager'}}</p>
                    </div>
                    <div slot="actions" slot-scope="props">
                        <b-button-group size="sm">
                            <b-button variant="success" @click="edit(props.row.id)"><i class="fa fa-edit"></i> Edit</b-button>
                            <b-button variant="danger" @click="deleteEmployee(props.row.id)"><i class="fa fa-trash"></i> Delete</b-button>
                        </b-button-group>
                    </div>
                </v-client-table>
            </b-card>
        </div>
        <!--<b-modal ref="myModalRef" hide-footer title="Confirm Delete">-->
        <!--<div class="d-block text-center">-->
        <!--<h3>Are you sure?</h3>-->
        <!--</div>-->
        <!--<b-btn class="mt-3" @click="confirmDelete">Yes</b-btn>-->
        <!--</b-modal>-->

    </div>
</template>
<script>
    import Vue from 'vue';
    import {
            ClientTable,
            Event
    } from 'vue-tables-2';
    Vue.use(ClientTable, {}, false);
    export default {

        data() {
            return {
                id:0,
                columns: ['id', 'name', 'email','branch','role','actions'],

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
        methods:{
            edit(id){
                this.id=id;
                this.$router.replace(`/admin/users/${id}/edit`)
            },
            confirmDelete(){
                console.log(this.id);
            },
            deleteEmployee:function (id) {
                let token=localStorage.getItem('access_token');

                axios.delete(`/api/admin/users/${id}/destroy?token=${token}`)
                        .then(res=>{
                    this.tableData=this.tableData.filter(item=>item.id!=res.data.data.id)
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
        mounted() {
            let token=localStorage.getItem('access_token');
            axios.get(`/api/admin/users?token=${token}`).then(response => {
                console.log(response.data.data);
                this.tableData = response.data.data;
        }).catch(function (error) {
                console.log(error)
            });
        }
    }



</script>
