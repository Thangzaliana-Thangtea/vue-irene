<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card variant="primary" header-tag="h4" footer-tag="footer">
                        <h4>New Category</h4>
                        <hr>
                        <b-alert :show="dismissCountDown"
                                 dismissible
                                 variant="success"
                                 @dismissed="dismissCountDown=0"
                                 @dismiss-count-down="countDownChanged">
                            New Category is created
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
                                    description="The name of category"
                                    label="Name"
                                    label-for="name"
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    :state="state">
                                <b-form-input id="name" :state="state" v-model="category.name"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                    id="desc"
                                    description="Description"
                                    label="Description"
                                    label-for="desc">
                                <b-form-textarea id="desc" v-model="category.description"
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
            state () {
                return this.category.name.length >= 4 ? true : false
            },
            invalidFeedback () {
                if (this.category.name.length > 4) {
                    return ''
                } else if (this.category.name.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Category name is required'
                }
            },
            validFeedback () {
                return this.state === true ? 'Correct Category name' : ''
            }
        },
        data(){
            return {
                category: {
                    name: '',
                    description: '',
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
                if (this.category.name.length < 2)
                    return;
                const token = localStorage.getItem('access_token')
                axios.post(`/api/manager/categories/create?token=${token}}`, this.category)
                        .then(res=> {
                            console.log(res);
                            this.clear()
                            this.showAlert()
                        })
                        .catch(err=> {
                            console.log(err.response);
                            this.errors=err.response.data.errors;
                            this.onError(7);
                        })
            },
            onReset: function (evt) {
                evt.preventDefault();
                this.reset();
            },
            clear: function () {
                this.category.name = '';
                this.category.description = ''
            },
            showAlert: function () {
                this.dismissCountDown = this.dismissSecs
            },

            countDownChanged: function (count) {
                this.countDown = count;
            },
            onError: function (count) {
                this.errorCount = count;
            }
        },
        mounted(){

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