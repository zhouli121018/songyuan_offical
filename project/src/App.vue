<template>
<div>
  <mt-header fixed title="欢乐龙城"></mt-header>
  <div class="content_box">
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="./assets/img/banner1.jpg" alt="1" style="height:200px;">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./assets/img/banner2.jpg" alt="2" style="height:200px;">
      </mt-swipe-item>
    </mt-swipe> -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="home">全部</mt-tab-item>
      <mt-tab-item id="2">麻将</mt-tab-item>
      <mt-tab-item id="3">棋牌</mt-tab-item>
    </mt-navbar>
    
    <router-view></router-view>
  </div>
  
  <!-- <mt-tabbar v-model="selected">
    <mt-tab-item id="home">
      首页
    </mt-tab-item>
    <mt-tab-item id="download">
      下载
    </mt-tab-item>
  </mt-tabbar> -->
</div>
  
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected:''
    }
  },
  watch:{
    selected (newV,oldV) {
      console.log(newV)
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style>
  .mint-swipe{
    height:200px;
    /* background:gray; */
  }
  .mint-navbar{
    background: rgba(255,255,255,0.4);
  }
</style>
