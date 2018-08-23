<template>
    <b-row>
        <div class="timeline-wrapper">
            <div class="timeline" v-for="item in items">
                <h5>{{item.title}}</h5>
                <h6 @click="descClick(item)">{{item.desc}}</h6>
            </div>
        </div>
        <div class="p-card" >
            <ul class="list-group">
                <li class="list-group-item" v-for="item in items">{{item.desc}}</li>
            </ul>
        </div>
    </b-row>
</template>
<script>
    export default{
        data:function () {
            return{
                items:[]
            }
        },
        methods:{
            descClick(item){
                console.log(item.desc)
            }
        },
        mounted:function () {
            for (let i=0;i<365;i++) {
                let item={
                    title:'title '+i,
                    desc:'desc '+i
                }
                this.items.push(item)
            }

        }
    }
</script>
<style>
    .timeline-wrapper{
        width: 100%;
        height: 100%;
        overflow: scroll;
        overflow-y: hidden;
        white-space: nowrap;
    }
    .timeline{
        cursor: hand;
        box-shadow: 4px 4px 4px 4px;
        background-color: white;
        margin: 16px;
        padding:10px;
        display: inline-block;
        width: 100px;
        height: 60px;
    }
    .h6{
        cursor: hand;
    }
    .p-card{
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: white;
        box-shadow: 5px 5px;
    }
</style>
