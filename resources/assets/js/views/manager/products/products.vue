<template>
            <b-card header="List of Products" header-tag="h4" class="bg-info-card">
                <v-client-table :data="tableData" :columns="columns" :options="options">

                    <div slot="actions" slot-scope="props">

                        <b-button-group size="sm">
                            <b-button variant="success" @click="edit(props.row.id)"><i class="fa fa-edit"></i> Edit</b-button>
                            <b-button variant="danger" @click="deleteProduct(props.row.id)"><i class="fa fa-trash"></i> Delete</b-button>
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

        data() {
            return {
                columns: ['id', 'name', 'price', 'unit', 'actions'],
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
                        dropdown: true
                    }
                }
            }
        },
        methods: {
            edit: function (id) {
                this.$router.push(`/manager/products/${id}/edit`)
            },
            deleteProduct: function (id) {
                const token=localStorage.getItem('access_token')
                axios.delete(`/api/manager/products/${id}/destroy?token=${token}`)
                        .then(res=> {
                            this.tableData = this.tableData.filter(item=>item.id !== res.data.data.id);
                        })
                        .catch(err=> {
                            console.log(err);
                        })
            }
        },
        mounted() {
            const token=localStorage.getItem('access_token')
            axios.get(`/api/manager/products?token=${token}`).then(response => {
                this.tableData = response.data.data;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
</script>
