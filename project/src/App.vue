<template>
<div style="width:100%;margin:0 auto;" @click="hide_fixed_menubar" ref="box_content">
  <ul class="header_menu" v-show="show_menu" ref="fixed_menubar">
    <li v-for="(l,k) in routsList" :key="k">
      <a :href="l.link" @click.prevent="jump(l)">
        {{l.title}}
      </a>
    </li>
  </ul>
  <mt-header fixed title="">
     <div slot="left" @click="jump({link:'home'})" style="padding-top:4px;">
       <img src="./assets/img/LOGO.png" alt="longcheng" style="height:42px;">
     </div>
     
     <mt-button  slot="right" @click="show_menu=!show_menu" ref="right_btn">
       <i class="iconfont icon-moreclass" style="color:#333;font-size:26px;"></i>
       
     </mt-button>
     
  </mt-header>
  
  <div class="content_box">
    <mt-swipe :auto="4000" style="overflow:hidden;" :style="{height:banner_height+'px'}" ref="banner_box">
      <mt-swipe-item v-for="(b,k) in banners" :key="k">
        <img :src="b.src" :alt="k" >
      </mt-swipe-item>
    </mt-swipe>
    <router-view style="overflow:auto;" :style="{height:content_height+'px'}"></router-view>

  </div>
  <div class="footer" ref="footer_height">
    <div class="bottom_menu_box">
      <span v-if="r.link!='home'" v-for="(r,k) in routsList" :key="k"> 
        <a :title="r.title" :href="r.link" @click.prevent="jump(r)">{{r.title}}</a> | 
      </span>
    </div>
    <p class="footer_tips" v-if="false">健康游戏忠告：抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防上当受骗 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
    <div>
      <!-- <p>
        <a href="http://jb.ccm.gov.cn/" target="_blank">全国文化市场统一举报电话：12318</a>
      </p> -->
      <span>吉ICP备18000167号-1 吉网文（2018）1597-008号</span>
      <p>
				CopyRight ©2017-2018吉林省神龙网络科技有限公司 版权所有
			</p>
      <p>
				<img src="./assets/img/beian.png" alt="beian" style="vertical-align: middle;"> 公安备案号：22072102000119
			</p>
    </div>
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
      content_height:300,
      selected:'',
      banners:[
        {src:require('./assets/img/1.jpg')},
        {src:require('./assets/img/2.jpg')},
        {src:require('./assets/img/3.jpg')},
        // {src:require('./assets/img/4.jpg')},
      ],
      banner_height: 180,
      show_menu:false,
      routsList:[
        // {title:'下载中心',link:'home'},
        {title:'首页',link:'home'},
        {title:'客服中心',link:'service'},
        {title:'家长监护',link:'parents'},
        {title:'诚聘英才',link:'job'},
        {title:'关于我们',link:'about'},
      ]
    }
  },
  watch:{
    
  },
  mounted() {
    this.$nextTick(()=>{
      console.log(this.$refs.banner_box)
      let w = this.$refs.banner_box.$el.clientWidth
      console.log(w)
      this.banner_height = w*310/640;
      console.log(this.banner_height)

      let body_height = document.documentElement.clientHeight;
      let foot_h = this.$refs.footer_height.offsetHeight
      this.content_height = body_height - this.banner_height - 60 - foot_h
      console.log(this.content_height);
    })
  },
  methods:{
    changeHash(){
      this.$nextTick(function(){
        this.$router.push({
          name: this.selected
        })
      })
    },
    jump(rou){
      this.$router.push(rou.link)
    },
    hide_fixed_menubar(e){
      let el = this.$refs.fixed_menubar;
      let right_btn = this.$refs.right_btn.$el;
      if(!right_btn.contains(e.target)){
        if(el.contains(e.target)){
          this.show_menu = true;
        }else{
          this.show_menu = false;
        }
      }
    },
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
