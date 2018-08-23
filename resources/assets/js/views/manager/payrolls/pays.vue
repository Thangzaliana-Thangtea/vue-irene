<template>
    <div>
        <h6>New Payment</h6>
        <hr>
        <b-form-row>
                <b-form inline @submit="onSubmit">
                        <b-form-select id="emp" v-model="model.employee" :options="employees"
                                       class="mb-2 mr-sm-2 mb-sm-0">
                            <option slot="fisrt" value="null">Choose Employee</option>
                        </b-form-select>

                        <b-form-select id="scale" v-model="model.payscale" :options="payscales"
                                       class="mb-2 mr-sm-2 mb-sm-0">
                            <option slot="fisrt" value="null">Choose Employee</option>
                        </b-form-select>

                        <label for="from" class="mr-sm-2">From</label>
                        <b-form-input type="date" id="from" v-model="model.from" placeholder="From"
                                      class="mb-2 mr-sm-2 mb-sm-0"/>

                        <label for="to" class="mr-sm-2">To</label>
                        <b-form-input type="date" id="to" v-model="model.to" placeholder="To"
                                      class="mb-2 mr-sm-2 mb-sm-0"/>

                    <b-button type="submit" variant="primary"><i class="fa fa-plus-circle"></i> Add</b-button>
                </b-form>

        </b-form-row>
        <hr>

        <b-row>
            <b-col>
                <h6>Payment History</h6>
                <hr>
                <table class="table">
                    <thead>Heading one</thead>
                    <th>One</th>
                    <th>Two</th>
                    <th>Three</th>
                    <tr>
                        <td>yeah</td>
                        <td>yeah</td>
                        <td>yeah</td>
                    </tr>
                    <tr>
                        <td>yeah</td>
                        <td>yeah</td>
                        <td>yeah</td>
                    </tr><tr>
                    <td>yeah</td>
                    <td>yeah</td>
                    <td>yeah</td>
                </tr>
                </table>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default{
        name:'payroll',
        data () {
            return {
                model: {
                    employee: null,
                    payscale: null,
                    from:new moment(),
                    to: moment(new Date(),'DD/MM/YYYY').add(30)
                },
                employees: [{value:null,text:'Choose Employee'}],
                payscales: [{value:null,text:'Choose Payscale'}]
            }
        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault
            }
        }
    }
</script>