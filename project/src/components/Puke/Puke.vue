<template>
  <div>
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
         
          {imgSrc:require('../../assets/img/qp.jpg'),imgAlt:'欢乐龙城棋牌',title:'欢乐龙城棋牌',desc:'东北最流行的扑克打法，老少皆宜，游戏紧张刺激，考验玩家的智慧与勇气的游戏。',downloadUrl:'http://puke-res.jilinshenlong.com/down/down.html'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
