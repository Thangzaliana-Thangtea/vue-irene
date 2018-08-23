<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card  header-tag="h4" footer="Card Footer"
                            footer-tag="footer">
                        <div>
                            <h4>Edit Branch</h4>
                            <hr>
                            <b-alert :show="errorCount"
                                     dismissible
                                     variant="danger"
                                     @dismissed="errorCount=0"
                                     @dismiss-count-down="errorChanged">
                                <ul>
                                    <li v-for="err in errors">
                                        <p v-for="e in err">{{e}}</p>
                                    </li>
                                </ul>
                            </b-alert>
                            <b-form @submit="onSubmit" @reset="onReset">
                                <b-form-group
                                        id="nameGroup"
                                        description="Name of the branch."
                                        label="Name"
                                        label-for="name"
                                        :invalid-feedback="invalidFeedback"
                                        :valid-feedback="validFeedback"
                                        :state="state">
                                    <b-form-input id="name" :state="state" v-model.trim="model.name"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                        id="addressGroup"
                                        description="Location of branch"
                                        label="Address"
                                        label-for="address">
                                    <b-form-textarea id="address" v-model="model.address" placeholder="Enter address"
                                                     :rows="3"
                                                     :max-rows="6">

                                    </b-form-textarea>
                                </b-form-group>
                                <b-form-group
                                        id="descGroup"
                                        description="Description of branch"
                                        label="Description"
                                        label-for="description">
                                    <b-form-textarea id="description" v-model="model.description"
                                                     placeholder="Enter Description"
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
        probs: {
            branch: {
                type: Object
            }
        },
        computed: {
            state () {
                return this.model.name.length >= 4 ? true : false
            },
            invalidFeedback () {
                if (this.model.name.length > 4) {
                    return ''
                } else if (this.model.name.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Please enter something'
                }
            },
            validFeedback () {
                return this.state === true ? 'Thank you' : ''
            }
        },
        data(){
            return {
                model: {
                    id: '',
                    name: '',
                    address: '',
                    description: '',
                },
                countDown: 0,
                errorCount: 0,
                errors: []
            }

        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                if (this.state === false) {
                    return;
                }
                axios.put(`/api/admin/branches/${this.model.id}/update`, this.model)
                        .then(res=> {
                            this.$router.push('/admin/branches')
                        })
                        .catch(err=> {
                            if (err.response.status == 406) {
                                this.errors = err.response.data;
                                this.errorChanged(10)
                            }
                        })
            },
            onReset: function (evt) {
                evt.preventDefault();
                this.reset();
            },
            reset: function () {
                this.model.name = '';
                this.model.address = '';
                this.description = '';
            },

            countDownChanged: function (count) {
                this.countDown = count;
            },
            errorChanged: function (count) {
                this.errorCount = count;
            }
        },
        mounted(){
            const id = this.$route.params.id;
            this.id = id;
            axios.get(`/api/admin/branches/${id}/`)
                    .then(res=> {
                        console.log(res);
                        this.model = res.data.data;
                    })
                    .catch(err=> {
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