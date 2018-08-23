<template>
    <!-- Content here -->
    <b-card header="List of Services" variant="primary" header-tag="h4" class="bg-info-card">
        <v-client-table :data="tableData" :columns="columns" :options="options">
            <div slot="actions" slot-scope="props">
                <b-button-group size="sm">
                    <b-button variant="success" @click="edit(props.row.id)"><i class="fa fa-edit"></i> Edit</b-button>
                    <b-button variant="danger" @click="deleteServices(props.row.id)"><i class="fa fa-trash"></i> Delete</b-button>
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
        components: {
        },
        data() {
            return {
                columns: ['id', 'name', 'commission','cost', 'actions'],
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
                this.$router.replace(`/admin/services/${id}/edit`);
            },
            deleteServices(id){
                const token=localStorage.getItem('access_token')
                axios.delete(`/api/admin/services/${id}/destroy?token=${token}`)
                        .then(res=> {
                                this.tableData = this.tableData.filter(item=>item.id !== res.data.data.id);
                        }).catch(err=> {
                                console.log(err)
                        });
                        }
        },
        mounted() {
            const token=localStorage.getItem('access_token')

            axios.get(`/api/admin/services?token=${token}`).then(response => {
                this.tableData = response.data.data;
//                console.log(response.data.data);
        }).catch(function (error) {
                console.log(error)
            });
        }
    }

</script>
