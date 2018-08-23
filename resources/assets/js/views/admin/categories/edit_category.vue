<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <b-card variant="primary"  header-tag="h4" footer-tag="footer">
                        <div>
                            <h4>Edit Category</h4>
                            <hr>
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
                                    <b-form-input required id="name" :state="state"
                                                  v-model="category.name"></b-form-input>
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
            state () {
                return this.category.name.length >= 4
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
                return this.state === true ? 'Valid name' : ''
            }
        },
        data(){
            return {
                erors: null,
                id: 0,
                category: {
                    name: '',
                    description: '',
                },
                errorCount:0,
                errors:[]
            }

        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                if (this.state === false) {
                    return;
                }
                const token=localStorage.getItem('access_token')
                axios.put(`/api/admin/categories/${this.id}/update?token=${token}`, this.category)
                        .then(res=> {
                            this.clear();
                            this.$router.replace('/admin/categories')
                        })
                        .catch(err=> {
                            this.errors=err.response.data.errors;
                            this.onError(7)
                        })
            },
            onReset: function (evt) {
                evt.preventDefault();
                this.clear();
            },
            clear: function () {
                this.category.name = '';
                this.category.description = ''
            },
            onError:function (count) {
                this.errorCount=count;
            }

        },
        mounted(){
            const id = this.$route.params.id;
            this.id = id;
            const token=localStorage.getItem('access_token')
            axios.get(`/api/admin/categories/${id}?token=${token}`)
                    .then(res=> {
                        console.log(res);
                        this.category = res.data.data;
                    })
                    .catch(err=> {
                        console.log(err);
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