<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card  header-tag="h6" footer-tag="footer">
                        <div>
                            <h4>Edit Service</h4>
                            <hr>
                            <b-alert :show="countDown"
                                     dismissible
                                     variant="danger"
                                     @dismissed="countDown=0"
                                     @dismiss-count-down="countDownChanged">
                                <ul>
                                    <li v-for="err in errors">
                                        <p v-for="e in err">{{e}}</p>
                                    </li>
                                </ul>
                            </b-alert>


                            <b-form @submit="onSubmit" @reset="onReset">
                                <b-form-group
                                        id="nameGroup"
                                        description="Please enter service name."
                                        label="Name"
                                        label-for="name"
                                        :invalid-feedback="invalidName"
                                        :valid-feedback="validName"
                                        :state="nameState">
                                    <b-form-input id="name" type="text" :state="nameState" v-model.trim="model.name"></b-form-input>
                                </b-form-group>

                                <b-form-group
                                        id="durationGroup"
                                        description="Duration of a service"
                                        label="Duration"
                                        label-for="duration">
                                    <b-form-input id="duration" type="text"  v-model.trim="model.duration"></b-form-input>

                                    <!--<datepicker id="duration"  language="es">Select duration</datepicker>-->
                                </b-form-group>

                                <b-form-group
                                        id="commissionGroup"
                                        description="Percent of commission take by manager."
                                        label="Commission"
                                        label-for="commission"
                                        :invalid-feedback="invalidCommission"
                                        :valid-feedback="validCommission"
                                        :state="commissionState">
                                    <b-form-input id="commissionGroup" type="number" :state="commissionState" v-model.trim="model.commission"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                        id="costGroup"
                                        description="Cost of a service"
                                        label="Cost"
                                        label-for="cost"
                                        :invalid-feedback="invalidCost"
                                        :valid-feedback="validCost"
                                        :state="costState">
                                    <b-form-input id="price" type="number" :state="costState" v-model.trim="model.cost"></b-form-input>
                                </b-form-group>

                                <b-form-group
                                        id="ComplimentaryGroup"
                                        label="Complimentary"
                                        label-for="complimentary">
                                    <b-form-textarea id="complimentary" v-model="model.complimentary" placeholder="Service Complimentary"
                                                     :rows="3"
                                                     :max-rows="6">
                                    </b-form-textarea>
                                </b-form-group>

                                </b-form-group>
                                <b-form-group
                                        id="RemarkGroup"
                                        label="Remark"
                                        label-for="remark">
                                    <b-form-textarea id="remark" v-model="model.remark" placeholder="Service Remark"
                                                     :rows="3"
                                                     :max-rows="6">
                                    </b-form-textarea>
                                </b-form-group>

                                <hr>
                                <b-button type="submit" variant="primary">Update</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>

                        </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export  default{
        computed: {
            nameState () {
                return this.model.name.length >= 4 ;
            },commissionState () {
                return !isNaN(this.model.commission) && this.model.commission<=100;
            },costState () {
                return !isNaN(this.model.cost)
            },
            invalidName () {
                if (this.model.name.length > 3) {
                    return ''
                } else if (this.model.name.length > 0) {
                    return 'Enter at least 3 characters'
                } else {
                    return 'Service name is required'
                }
            },
            validName () {
                return this.nameState === true ? 'Correct service name' : ''
            },
            invalidCommission () {
                if (isNaN(this.model.commission))
                    return 'Please enter a decimal number'
                else if (this.model.commission>100)
                    return `Commission is a percent it can't be greater than 100`
                else
                    return 'Service name is required'
            },
            validCommission () {
                return this.commissionState === true ? 'Correct commission' : ''
            },
            invalidCost () {
                if (isNaN(this.model.cost))
                    return 'Please enter a decimal number'
                else
                    return 'Service name is required'
            },
            validCost () {
                return this.costState === true ? 'Correct cost' : ''
            }
        },
        data(){
            return {
                model: {
                    name: '',
                    remark:'',
                    complimentary:'',
                    commission: 0,
                    cost: 0,
                    duration:'',
                },
                errors:[],
                countDown: 0
            }

        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                console.log(this.model);
                if (this.nameState === false || this.commissionState===false || this.costState===false) {
                    return;
                }
                const id=this.model.id;
                const token=localStorage.getItem('access_token')
                axios.put(`/api/admin/services/${id}/update?token=${token}`, this.model)
                        .then(res=> {
                    this.$router.replace("/admin/services")
            })
                .catch(err=> {
                    if(err.response.status==406)
                this.errors=err.response.data.errors
                this.countDownChanged()
            })
            },
            onReset: function (evt) {
                evt.preventDefault();
                this.reset();
                this.countDownChanged()
            },
            reset: function () {
                this.model.name='';
                this.model.duration='';
                this.model.commission= 0;
                this.model.cost = 0;
                this.model.complimentary = '';
                this.model.remark = '';
            },
            countDownChanged: function () {
                this.countDown = 7;
            }
        },
        mounted(){
            const  id=this.$route.params.id;
            const token=localStorage.getItem('access_token')
            axios.get(`/api/admin/services/${id}?token=${token}`)
                    .then(res=>{
                this.model=res.data.data;
        })
        .catch(err=>console.log(err))
        }
    }
</script>
<style>
    .required-field > label::after {
        content: '*';
        color: red;
        margin-left: 0.25rem;
    }
</style>