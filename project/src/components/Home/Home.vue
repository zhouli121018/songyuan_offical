<template>
    <div>
        <mt-navbar v-model="selected" class="wrap_navbar">
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
    
        <div class="navBox">
            <ul class="clear">
                <li v-for="c in citys" :class="{active:c.id==active_city}" :key="c.id" ><a href="#" @click.prevent="changeCity(c.id)"> {{c.name}}</a> </li>
            </ul>
        </div>
        
        <div class="wrapper" v-for="(a,k) in apps" :key="k">
            <div>
              <img :src="a.imgSrc" :alt="a.imgAlt" style="max-width:100%">
            </div>
            <div class="desc">
                <b>{{a.title}}</b>
                <p>
                    {{a.desc}}
                </p>
            </div>
            <div>
                <a :href="a.downloadUrl" target="_blank" style="display:inline-block;" class="download_btn">
                    点击下载
                </a>
            </div>
        </div>
        <div class="notice_box">
            <h3><i class="iconfont icon-more" style="color:#F6852D"></i> 综合资讯</h3>
            <ul class="eventList">
                <li v-for="(g,k) in gamedata" :key="k"><router-link :title="g.title" :to="{name:g.link}">{{g.title}}</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      apps:[
          {imgSrc:require('../../assets/img/mj.jpg'),imgAlt:'龙城松原麻将',title:'龙城松原麻将',desc:'松原麻将玩法多样，集合松原快、慢听，乾安地区、长岭地区玩法。',downloadUrl:'http://songyuan-res.qhlongqing.com/download.html'},          
      ],
      active_city:'0',
      citys:[
          {id:0,name:'吉林'},
          {id:1,name:'辽宁'},
          {id:2,name:'黑龙江'},
          {id:3,name:'北京'},
          {id:4,name:'内蒙'},
          {id:5,name:'河北'},
      ],
      selected:'home',
      gamedata:[
          {title:'游戏介绍',link:'gamedata1',},
          {title:'麻将文化',link:'gamedata2'},
          {title:'打麻将有益身心健康',link:'gamedata3'},
          {title:'打麻将要有精湛的技术',link:'gamedata4'},
      ]
    }
  },
  methods:{
      changeCity(id){
          this.active_city = id;
      },
      changeHash(){
      this.$nextTick(function(){
        this.$router.push({
          name: this.selected
        })
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
