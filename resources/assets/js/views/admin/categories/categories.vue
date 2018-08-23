<template>
    <b-card header="List of category" header-tag="h4" class="bg-info-card">
        <v-client-table :data="tableData" :columns="columns" :options="options">
            <div slot="actions" slot-scope="props">

                <b-button-group size="sm">
                    <b-button variant="success" @click="edit(props.row.id)"><i class="fa fa-edit"></i> Edit</b-button>
                    <b-button variant="danger" @click="deleteBranch(props.row.id)"><i class="fa fa-trash"></i> Delete</b-button>
                </b-button-group>
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
    Vue.use(ClientTable, {}, false);
    export default {
        name: "advanced_tables",

        data() {
            return {
                tableData: [],
                columns: ['id', 'name', 'description', 'actions'],
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
            edit: function (id) {
                this.$router.push(`/admin/categories/${id}/edit`);
            },
            deleteBranch: function (id) {
                const token=localStorage.getItem('access_token');
                axios.delete(`/api/admin/categories/${id}/destroy?token=${token}`)
                        .then(res=> {
                    this.tableData = this.tableData.filter(item => item.id !== res.data.data.id)
//                            showInfo();
            })
                .catch(err=> {
                    console.log(err)
            });
            },
            showInfo: function () {

            },
            fetchall:function () {

                const token=localStorage.getItem('access_token')
                axios.get(`/api/admin/categories?token=${token}`)
                        .then(response => {
                    console.log(response.data);
                this.tableData = response.data.data;
            }).catch(function (error) {
                    console.log(error);
                })
            }

        },
        mounted() {
            this.fetchall();
        }
    }
</script>
