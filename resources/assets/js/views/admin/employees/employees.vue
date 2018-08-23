<template>
    <div class="row">

        <div class="col-lg-12 mb-3">
            <b-card header="List of employees" variant="primary" header-tag="h4" class="bg-info-card">
                <v-client-table :data="tableData" :columns="columns" :options="options">

                    <div slot="actions" slot-scope="props">
                        <b-button-group size="sm">
                            <b-button variant="success" @click="edit(props.row.id)">Edit</b-button>
                            <b-button variant="danger" @click="deleteEmployee(props.row.id)">Delete</b-button>
                        </b-button-group>
                    </div>
                </v-client-table>
            </b-card>
        </div>
        <modal name="progress_dialog">
            <p>Fetching employees data...</p>
        </modal>

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
        components: {
        },
        data() {
            return {
                id:0,
                columns: ['id', 'name', 'address','actions'],

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
                this.$router.push(`/admin/employees/${id}/edit`)
            },
            confirmDelete(){
                console.log(this.id);
            },
            deleteEmployee:function (id) {
                const token=localStorage.getItem('access_token');
                axios.delete(`api/admin/employees/${id}/destroy?token=${token}`)
                        .then(res=>{
                            this.tableData=this.tableData.filter(item=>item.id!=res.data.data.id)
                        }).catch(err=>{
                            console.log(err);
                        })
            }
        },
        mounted() {
            this.$modal.show('progress_dialog');
            const token=localStorage.getItem('access_token');
            axios.get(`api/admin/employees?token=${token}`)
                    .then(response => {
                        this.tableData = response.data.data;
                    }).catch(function (error) {
                        console.log(error)
                    });
            this.$modal.hide('progress_dialog');
        }
    }



</script>
