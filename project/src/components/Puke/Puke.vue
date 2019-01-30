<template>
  <div>
        <!-- <div class="navBox">
            <ul class="clear">
                <li v-for="c in citys" :class="{active:c.id==active_city}" :key="c.id" ><a href="#" @click.prevent="changeCity(c.id)"> {{c.name}}</a> </li>
            </ul>
        </div> -->
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      apps:[
         
          {imgSrc:require('../../assets/img/qp.jpg'),imgAlt:'欢乐龙城棋牌',title:'欢乐龙城棋牌',desc:'东北最流行的扑克打法，老少皆宜，游戏紧张刺激，考验玩家的智慧与勇气的游戏。',downloadUrl:'http://puke-res.jilinshenlong.com/down/down.html'},
          {imgSrc:require('../../assets/img/a3.jpg'),imgAlt:'广西A3黑',title:'广西A3黑',desc:'广西A3黑',downloadUrl:'https://fir.im/um6q'},
      ],
      active_city:'0',
      citys:[
          {id:0,name:'吉林'},
          {id:1,name:'辽宁'},
          {id:2,name:'黑龙江'},
          {id:3,name:'山东'},
        //   {id:4,name:'内蒙'},
        //   {id:5,name:'河北'},
      ],
      selected:'puke',
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
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
