<template>
<div>
  <mt-header fixed title="欢乐龙城">
     <div slot="left">
       <img src="./assets/img/LOGO.png" alt="longcheng" style="width:100%;">
     </div>
  </mt-header>
  <div class="content_box">
    <mt-swipe :auto="4000" style="overflow:hidden;" :style="{height:banner_height+'px'}" ref="banner_box">
      <mt-swipe-item v-for="(b,k) in banners" :key="k">
        <img :src="b.src" :alt="k" >
      </mt-swipe-item>
    </mt-swipe>
    <mt-navbar v-model="selected">
      <mt-tab-item id="home">
        <div   @click.prevent="changeHash">
          麻将
        </div>
        </mt-tab-item>
      <mt-tab-item id="puke">
        <div  @click.prevent="changeHash" >
          棋牌
        </div>
      </mt-tab-item>
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
      selected:'',
      banners:[
        {src:require('./assets/img/1.jpg')},
        {src:require('./assets/img/2.jpg')},
        {src:require('./assets/img/3.jpg')},
        {src:require('./assets/img/4.jpg')},
      ],
      banner_height: 180,
    }
  },
  watch:{
    // selected (newV,oldV) {
    //   console.log(newV)
    //   this.$router.push({
    //     name: newV
    //   })
    // }
  },
  mounted() {
    this.$nextTick(()=>{
      console.log(this.$refs.banner_box)
      let w = this.$refs.banner_box.$el.clientWidth
      console.log(w)
      this.banner_height = w*310/640;
      console.log(this.banner_height)
    })
  },
  methods:{
    changeHash(){
      this.$nextTick(function(){
        this.$router.push({
          name: this.selected
        })
      })
    }
  },
  created(){
    console.log(this.$route)
    this.selected = this.$route.name
  }

}
</script>

<style>
  .mint-navbar{
    background: rgba(255,255,255,0.4);
  }
</style>
