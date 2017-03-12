<style >
    @import '../styles/reset.css';
    @import '../styles/common.css';
</style>
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted (){
            console.log('app');
        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
