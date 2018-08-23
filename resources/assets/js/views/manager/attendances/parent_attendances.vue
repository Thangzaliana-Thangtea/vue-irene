<template>
    <b-card no-body>
        <b-tabs card>
            <b-tab title="Overview">
                <overview></overview>
            </b-tab>
            <b-tab title="Payroll">
            </b-tab>
            <b-tab title="Leave">
            </b-tab>
            <b-tab title="Delll">
            </b-tab>
        </b-tabs>
    </b-card>
</template>
<script>
    import overview from './overview.vue';

    export default{

        data:function () {
            return {

            }
        },
        components:{
            overview
        },
        methods:{

        }
    }

</script>