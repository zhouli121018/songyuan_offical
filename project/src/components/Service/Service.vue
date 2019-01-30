<template>
  <div class="">
    <mt-navbar v-model="selected">
      <mt-tab-item id="majiang">
        <div  >
          麻将客服
        </div>
        </mt-tab-item>
      <mt-tab-item id="puke">
        <div  >
          扑克客服
        </div>
      </mt-tab-item>
    </mt-navbar>
    <div>
      <table class="service_item">
        <tr>
          <td>咨询：【添加微信】</td>
          <td>
            <div class="text_right">
              <p>qq9613620（微信号）</p>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected:'majiang'
    }
  },
  methods:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
