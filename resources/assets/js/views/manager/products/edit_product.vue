<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                <b-card  header-tag="h4" class="bg-success-card">
                    <div>
                        <h4>Edit Product</h4>
                        <hr>
                        <b-alert :show="errorCount"
                                 dismissible
                                 variant="danger"
                                 @dismissed="errorCount=0"
                                 @dissmiss-count-down="onError">
                                <ul>
                                    <li v-for="err in errors">
                                        <p v-for="e in err">{{e}}</p>
                                    </li>
                                </ul>
                        </b-alert>
                        <b-form @submit="onSubmit" @reset="onReset">
                            <b-form-group
                                    breakpoint="md"
                                    description="The name of your product"
                                    label=" Name"
                                    label-for="name"
                                    :invalid-feedback="invalidName"
                                    :valid-feedback="validName"
                                    :state="nameState">
                                <b-form-input :state="nameState" id="name" v-model="product.name" type="text"
                                              placeholder="Product Name"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                    breakpoint="md"
                                    description="Category of product"
                                    label="Category"
                                    label-for="category">
                                <b-form-select id="category" v-model="product.category_id" :options="categories"
                                               class="mb-3"/>
                            </b-form-group>
                            <b-form-group
                                    breakpoint="md"
                                    description="The selling price of product."
                                    label="Price"
                                    label-for="price"
                                    :invalid-feedback="invalidPrice"
                                    :valid-feedback="validPrice"
                            >
                                <b-form-input state="priceState" id="price" v-model="product.price" type="number"
                                              placeholder="Enter Product Price"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                    breakpoint="md"
                                    description="Units"
                                    label="Units"
                                    label-for="unit">
                                <b-form-input id="unit" type="text" v-model="product.unit"
                                              placeholder="An unit of product"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                    breakpoint="md"
                                    description="Description of the products"
                                    label="Description"
                                    label-for="desc">
                                <b-form-textarea id="desc"
                                                 v-model="product.description"
                                                 placeholder="Description"
                                                 :rows="3"
                                                 :max-rows="6">
                                </b-form-textarea>
                            </b-form-group>
                            <hr>
                            <b-button variant="primary" type="submit">Update</b-button>
                            <b-button variant="danger" type="reset">Reset</b-button>

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
                return this.product.name.length >= 4
            },
            priceState () {
                return !isNaN(this.product.price);
            },
            invalidName () {
                if (this.product.name.length > 4) {
                    return ''
                } else if (this.product.name.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Product name is required'
                }
            },
            validName () {
                return this.state === true ? 'Correct name' : ''
            },
            invalidPrice () {
                if (isNaN(this.product.price)) {
                    return ''
                } else if (this.product.price==0) {
                    return 'Please enter decimal number greater than 0'
                } else {
                    return 'Product Price is required'
                }
            },
            validPrice () {
                return this.priceState === true ? 'Valid price' : ''
            }
        },
        data(){
            return {
                id: -1,
                product: {
                    name: '',
                    category_id: null,
                    description: '',
                    price: 0,
                    unit: 'Pcs',
                },
                errorCount:0,
                errors:[],
                dismissSecs: 5,
                dismissCountDown: 0,
                categories: [
                    {value: null, text: 'Select category'}
                ]
            }

        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                const valid = this.product.name && this.product.price && this.product.unit;
                if (!valid) {
                    return;
                }
                const token=localStorage.getItem('access_token')
                axios.put(`/api/manager/products/${this.id}/update?token=${token}`, this.product)
                        .then(res=> {
                            this.clear();
                            this.showAlert();
                            this.$router.replace('/manager/products')
                        })
                        .catch(err=> {
                            this.errors=err.response.data.errors;
                        })
            },
            onReset: function (evt) {
                evt.preventDefault();
                this.clear()
            },
            clear: function () {
                this.product.name = '';
                this.product.price = 0;
                this.product.unit = 'Pcs';
                this.product.description = '';
            },

            showAlert: function () {
                this.dismissCountDown = this.dismissSecs
            },
            onError:function (count) {
                this.errorCount=count;
            },
            countDownChanged: function (count) {
                this.countDown = count;
            }
        },
        mounted(){
            const id = this.$route.params.id;
            this.id = id;
            const token=localStorage.getItem('access_token')
            axios.get(`/api/manager/categories?token=${token}`)
                    .then(res=> {
                        res.data.data.forEach(cat=> {
                            let category = {
                                value: cat.id,
                                text: cat.name
                            };
                            this.categories.push(category);
                        });
                    })
                    .catch(err=> {
                        console.log(err)
                    })
            axios.get(`/api/manager/products/${id}?token=${token}`)
                    .then(res=> {
                        this.product = res.data.data;
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
