<template>
  <div>
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
                <a :href="a.downloadUrl" target="_blank" style="display:inline-block;">
                    <i class="iconfont icon-xiazai1 download-icon"></i>
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
          {imgSrc:require('../../assets/img/mj.jpg'),imgAlt:'龙城松原麻将',title:'龙城松原麻将',desc:'松原麻将玩法多样，集合松原快、慢听，乾安地区、长岭地区玩法。',downloadUrl:'http://songyuan-res.qhlongqing.com/download.html'},          
      ],
      active_city:'0',
      citys:[
          {id:0,name:'吉林'},
          {id:1,name:'辽宁'},
          {id:2,name:'黑龙江'},
          {id:3,name:'山东'},
          {id:4,name:'内蒙'},
          {id:5,name:'河北'},
      ]
    }
  },
  methods:{
      changeCity(id){
          this.active_city = id;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBox{
    margin-bottom:12px;
    font-size:12px;
}
.clear:after{
    content:"";
    display:block;
    clear:both;
}
.navBox ul li {
    position:relative;
    float: left;
    width: 25%;
    text-align:center;
    padding:0 0 6px 0;
    border-bottom: 1px solid #ccc;
}
.navBox ul li.active a {
    color: #f6b501;
}
.navBox ul a {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 2.08333333rem;
    line-height: 2.08333333rem;
    text-align: center;
    color: #777;
    font-size: 13px;
    border-right: 2px solid #ccc;
}
.navBox ul li.active a {
    color: #f6b501;
}
.navBox ul li.active:before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .33333333rem;
    background: #f6b501;
}

</style>
