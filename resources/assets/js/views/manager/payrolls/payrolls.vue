<template>
    <b-card no-body>
        <b-tabs card>
            <b-tab title="Overview">
                <overview></overview>
            </b-tab>
            <b-tab title="Payroll">
                <pays></pays>
            </b-tab>
            <b-tab title="Leave">
                <test></test>
            </b-tab>
            <b-tab title="Delll">
                <p>Payroll main</p>
            </b-tab>
        </b-tabs>
    </b-card>
</template>
<script>
    import overview from './overview.vue';
    import pays from './pays.vue'
    import test from './test.vue'
    export default{

        data:function () {
            return {

            }
        },
        components:{
            test,
            pays,
            overview
        },
        methods:{

        }
    }

</script>