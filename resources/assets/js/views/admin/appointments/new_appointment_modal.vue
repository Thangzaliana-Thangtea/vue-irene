<template>
        <div>
            <modal name="dialog">
                <b-card header-tag="h4" header="New appointment">
                    <b-form @submit="createNewAppointment" @reset="resetForm">
                        <b-form-group
                                id="customerGroup"
                                breakpoint="sm"
                                description="Customer"
                                label="Customer"
                                label-for="customer">
                            <b-form-select id="customer" v-model="appointment.customer" :options="customers"
                                           class="mb-3"/>
                        </b-form-group>
                        <b-form-group
                                id="serviceGroup"
                                breakpoint="sm"
                                description="Service"
                                label="Service"
                                label-for="service">
                            <b-form-select id="service" v-model="appointment.service" :options="services"
                                           class="mb-3"/>
                        </b-form-group>
                        <b-form-group
                                id="remGroup"
                                breakpoint="sm"
                                description="Remark"
                                label="Remark"
                                label-for="rem">
                            <b-input id="rem"  type="text" v-model="appointment.remark" :options="services"
                                     class="mb-3"/>
                        </b-form-group>

                        <b-button variant="primary">Create</b-button>
                        <b-button variant="danger">Cancel</b-button>
                    </b-form>
                </b-card>
                <div slot="top-right">
                    <button @click="$modal.hide('foo')">
                        close
                    </button>
                </div>
                <div slot="top-right">
                    <button @click="$modal.hide('foo')">
                        close
                    </button>
                </div>
            </modal>
        </div>
</template>
<script>
    import VModal from 'vue-js-modal';
    import Vue from 'vue';

    Vue.use(VModal)

    export default{
        data(){
            return{
                appointment:{
                    customer:null,
                    service:null,
                    appointment_date:new Date(),
                    remark:'',
                },
                services:[{value:null,text:'Select Service'}],
                customers:[{value:null,text:'Select Customer'}],
            }
        },
        methods:{

        },
        mounted:function () {
            axios.get('/admin/services')
                    .then(res=>{
                        res.data.data.forEach(cat=>{
                            let s={
                                value:cat.id,
                                text:cat.name
                            }
                            this.services.push(s)
                        })
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            axios.get('/admin/customers')
                    .then(res=>{
                        res.data.data.forEach(cat=>{
                            let s={
                                value:cat.id,
                                text:cat.name
                            }
                            this.customers.push(s)
                        })
                    })
                    .catch(err=>{
                        console.log(err)
                    })
        }
    }

</script>