<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card variant="primary" header-tag="h4" footer-tag="footer">
                        <h4>Edit Payscale</h4>
                        <hr>
                        <b-alert :show="dismissCountDown"
                                 dismissible
                                 variant="success"
                                 @dismissed="dismissCountDown=0"
                                 @dismiss-count-down="countDownChanged">
                            New Payscale is created
                        </b-alert>
                        <b-alert :show="errorCount"
                                 dismissible
                                 variant="danger"
                                 @dissmissed="errorCount=0"
                                 @dismiss-count-down="onError">
                            <ul>
                                <li v-for="err in errors">
                                    <p v-for="e in err">{{e}}</p>
                                </li>
                            </ul>
                        </b-alert>

                        <b-form @submit="onSubmit" @reset="onReset">
                            <b-form-group
                                    id="nameGroup"
                                    description="Name of payscale"
                                    label="Name"
                                    label-for="name"
                                    :invalid-feedback="invalidName"
                                    :valid-feedback="validName"
                                    :state="nameState">
                                <b-form-input type="text" id="name" :state="nameState" v-model="payscale.name"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                    id="starting"
                                    description="Starting salary"
                                    label="Starting Salary"
                                    label-for="starting"
                                    :invalid-feedback="invalidStarting"
                                    :valid-feedback="validStarting"
                                    :state="startingState">
                                <b-form-input type="number" id="starting" :state="startingState" v-model="payscale.starting"></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="duration"
                                    description="Salary incremental duration by date"
                                    label="Incremental duration"
                                    label-for="incremental"
                                    :invalid-feedback="invalidInc"
                                    :valid-feedback="validInc"
                                    :state="incState">
                                <b-input-group size="md" append="Days">
                                    <b-form-input type="number" id="incremental" :state="incState" v-model="payscale.duration"></b-form-input>
                                </b-input-group>
                            </b-form-group>

                            <b-form-group
                                    id="amount"
                                    description="An amount Incremented after duration has been met"
                                    label="Incremental Amount"
                                    label-for="am"
                                    :invalid-feedback="invalidAmount"
                                    :valid-feedback="validAmount"
                                    :state="amountState">
                                <b-form-input type="number" id="am" :state="amountState" v-model="payscale.amount"></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="maximum"
                                    description="Maximum salary"
                                    label="Maximum Salary"
                                    label-for="max"
                                    :invalid-feedback="invalidMaximum"
                                    :valid-feedback="validMaximum"
                                    :state="maxState">
                                <b-form-input type="number" id="maximum" :state="maxState" v-model="payscale.max"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                    id="desc"
                                    description="Description"
                                    label="Description"
                                    label-for="desc">
                                <b-form-textarea id="desc" v-model="payscale.remark"
                                                 placeholder="Enter description" :rows="3"
                                                 :max-rows="6">

                                </b-form-textarea>
                            </b-form-group>
                            <hr>
                            <b-button type="submit" variant="primary">Save</b-button>
                            <b-button type="reset" variant="danger">Reset</b-button>
                        </b-form>

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
                return this.payscale.name!="";
            },
            startingState(){
                return !isNaN(this.payscale.starting);
            },
            incState(){
                return !isNaN(this.payscale.duration)
            },
            amountState(){
                return !isNaN(this.payscale.amount)
            },
            maxState(){
                if(isNaN(this.payscale.max))
                    return false
                if(this.payscale.max<this.payscale.starting)
                    return false;
                return true;
            },
            invalidName () {
                return this.payscale.name=''?'Name is required':'';
            },
            validName () {
                return this.payscale.name!=''?'Corrected name':'';
            },
            invalidStarting () {
                if (this.payscale.starting==='')
                    return 'Starting salary is required'
                if (isNaN(this.payscale.starting))
                    return 'Starting salary must be decimal'
                return '';
            },
            validStarting () {
                return !isNaN(this.payscale.starting)?'Corrected starting salary':'';
            },
            invalidInc(){
                if (this.payscale.duration=='')
                    return 'Incremental duration is required'
                if (isNaN(this.payscale.duration))
                    return 'Incremental duration value must be integer'
                return '';
            },
            validInc(){
                return !isNaN(this.payscale.duration)?'Corrected Incremental duration':'';
            },
            invalidAmount(){
                if (this.payscale.amount==='')
                    return 'Incremental amount is required'
                if (isNaN(this.payscale.amount))
                    return 'Incremental amount must be Decimal'
                return '';
            },
            validAmount(){
                return !isNaN(this.payscale.amount)?'Corrected Incremental Amount':'';
            },
            invalidMaximum(){
                if (this.payscale.max=='')
                    return 'Maximum Salary is required'
                if (isNaN(this.payscale.max))
                    return 'Maximum Salary must be Decimal'
                if (this.payscale.max<this.payscale.starting)
                    return 'Maximum Salary must be greater than or equal to starting salary'
                return '';
            },
            validMaximum(){
                return (!isNaN(this.payscale.max) && this.payscale.max > this.payscale.max) ?'Corrected Maximum Salary':'';
            }

        },
        data(){
            return {
                payscale: {
                    id:null,
                    name: '',
                    duration:0,
                    amount:0,
                    starting:0,
                    max:0,
                    remark: '',
                },
                dismissSecs: 5,
                dismissCountDown: 0,
                errorCount: 0,
                errors:[]
            }

        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                if (this.nameState ===false || this.startingState===false || this.incState === false || this.amountState=== false || this.maxState===false)
                    return
                let token=localStorage.getItem('access_token')
                let id=this.payscale.id;
                axios.put(`/api/manager/payscales/${id}/update`,this.payscale)
                        .then(res=>{
                            this.doClear();
                            this.countDownChanged(4)
                        })
                        .catch(err=>{
                            this.errors=err.response.data.errors;
                            this.onError(7);
                        })

            },
            doClear:function () {
                this.payscale.name='';
                this.payscale.duration='';
                this.payscale.amount='';
                this.payscale.starting='';
                this.payscale.max= '';
                this.payscale.remark= '';
            },
            onReset: function (evt) {
                evt.preventDefault();

            },
            countDownChanged: function (count) {
                this.countDown = count;
            },
            onError: function (count) {
                this.errorCount = count;
            }
        },
        mounted(){
            let id=this.$route.params.id;
            let token=localStorage.getItem('access_token')
            axios.get(`/api/manager/payscales/${id}?token=${token}`)
                    .then(res=>{
                        console.log(res.data)
                        this.payscale=res.data.data;
                    })
                    .catch(err=>{
                        console.log(err)
                    })
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