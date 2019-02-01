<template>
    <mt-header :title="title">
        <router-link to="/" slot="left" @click.prevent="goback">
            <mt-button icon="back" >返回</mt-button>
        </router-link>
    </mt-header>
</template>
<script>
export default {
    name:'my-title',
    props:['title'],
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>

</style>

