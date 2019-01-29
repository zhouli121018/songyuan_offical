<template>
<div style="max-width:786px;margin:0 auto;">
  <ul class="header_menu" v-if="show_menu">
    <li v-for="(l,k) in routsList" :key="k">
      <a :href="l.link" @click.prevent="jump(l)">
        {{l.title}}
      </a>
    </li>
  </ul>
  <mt-header fixed title="">
     <div slot="left">
       <img src="./assets/img/LOGO.png" alt="longcheng" style="width:100%;">
     </div>
     
     <mt-button  slot="right" @click="show_menu=!show_menu">
       <i class="iconfont icon-more_" style="color:#333;"></i>
       
     </mt-button>
     
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
          扑克
        </div>
      </mt-tab-item>
    </mt-navbar>
    
    <router-view></router-view>

  </div>
  <div class="footer">
    <div class="bottom_menu_box">
        <a title="用户协议" href="http://www.yukewangluo.com/mobile/protocol.html">用户协议</a> | <a title="客服中心" href="http://www.yukewangluo.com/mobile/service.html">客服中心</a> | <a title="诚聘英才" href="http://www.yukewangluo.com/mobile/employ.html">诚聘英才</a> | <a title="关于途游" href="http://www.yukewangluo.com/mobile/about.html">关于我们</a>
      </div>
    <p class="footer_tips" v-if="false">健康游戏忠告：抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防上当受骗 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
    <div>
      <p>
        <a href="http://jb.ccm.gov.cn/" target="_blank">全国文化市场统一举报电话：12318</a>
      </p>
      <a href="http://www.miitbeian.gov.cn" target="_blank">吉ICP备18000167号-1 吉网文（2018）1597-008号</a>
      <p>
				COPYRIGHT ©2017-2018吉林省神龙网络科技有限公司 版权所有
			</p>
    </div>
    <div>
      <p>健康游戏公告</p>
      <p>抵制不良游戏，拒绝盗版游戏，注意自我保护，谨防上当受骗， </p>
      <p>适度游戏益脑，沉迷游戏伤身，合理安排时间，享受健康生活。 </p>
      <p class="img_box_bottom">
        <img src="./assets/img/rz.png" alt="行业认证">
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
      selected:'',
      banners:[
        {src:require('./assets/img/1.jpg')},
        {src:require('./assets/img/2.jpg')},
        {src:require('./assets/img/3.jpg')},
        {src:require('./assets/img/4.jpg')},
      ],
      banner_height: 180,
      show_menu:false,
      routsList:[
        {title:'客服中心',link:'service'},
        {title:'家长监护',link:'parents'},
        {title:'诚聘英才',link:'hr'},
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
