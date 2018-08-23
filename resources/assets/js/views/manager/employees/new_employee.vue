<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card header-tag="h4" footer-tag="footer">
                        <div>
                            <h4>New Employee</h4>
                            <hr>
                            <b-alert :show="countDown"
                                     dismissible
                                     variant="success"
                                     @dismissed="countDown=0"
                                     @dismiss-count-down="countDownChanged">
                                New employee is created
                            </b-alert>
                            <b-alert :show="errorCount"
                                     dismissible
                                     variant="danger"
                                     @dismissed="errorCount=0"
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
                                        description="Please enter the name of employee."
                                        label="Name"
                                        label-for="name"
                                        :invalid-feedback="invalidFeedback"
                                        :valid-feedback="validFeedback"
                                        :state="state">
                                    <b-form-input id="name" type="text" :state="state"
                                                  v-model.trim="employee.name"></b-form-input>
                                </b-form-group>


                                <b-form-group
                                        id="contactGroup"
                                        description="Please enter employee contact (Mobile or landline)"
                                        label="Contact"
                                        label-for="contact">
                                    <b-form-input id="contact" type="text" v-model="employee.contact"
                                                  placeholder="Employee contact">
                                    </b-form-input>
                                </b-form-group>

                                <b-form-group
                                        id="addressGroup"
                                        description="Customer address"
                                        label="Address"
                                        label-for="address">
                                    <b-form-textarea id="address" v-model="employee.address"
                                                     placeholder="Employee Address"
                                                     :rows="3"
                                                     :max-rows="6">
                                    </b-form-textarea>
                                </b-form-group>
                                <b-form-group
                                        id="descGroup"
                                        description="Description"
                                        label="Description"
                                        label-for="description">
                                    <b-form-textarea id="description" v-model="employee.description"
                                                     placeholder="Description of Employee"
                                                     :rows="3"
                                                     :max-rows="6">
                                    </b-form-textarea>
                                </b-form-group>

                                <hr>
                                <b-button type="submit" variant="primary">Save</b-button>
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
        data(){
            return {
                employee: {
                    name: '',
                    contact: '',
                    address: '',
                    description: '',
                },
                countDown: 0,
                errorCount:0,
                errors:[]
            }

        },
        computed: {
            state () {
                return this.employee.name.length >= 4 ? true : false
            },
            invalidFeedback () {
                if (this.employee.name.length > 4) {
                    return ''
                } else if (this.employee.name.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Please enter something'
                }
            },
            validFeedback () {
                return this.state === true ? 'Thank you' : ''
            }
        },

        methods: {

            onReset: function (evt) {
                evt.preventDefault();
                this.clear();
            },
            clear: function () {
                this.employee.name = '';
                this.employee.contact = '';
                this.employee.address = '';
                this.employee.description = '';
            },
            countDownChanged: function (count) {
                this.countDown = count;
            },
            onError:function (count) {
                this.errorCount=count
            },
            onSubmit: function (evt) {
                evt.preventDefault();
                if (this.state === false) {
                    return;
                }
                const token = localStorage.getItem('access_token');
                axios.post(`/api/manager/employees/create?token=${token}`, this.employee)
                        .then(res=> {
                            this.clear();
                            this.countDownChanged(7);
                        })
                        .catch(err=> {
                            this.errors=err.response.data.errors;
                            this.onError(7)
                        })
            }
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