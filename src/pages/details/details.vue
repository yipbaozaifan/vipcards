<template>
  <div class="details pages">
    <div class="details-img">
      <img src="" alt="">
    </div>
    <div class="details-contact">
      <p class="shop-name"></p>
      <p class="address"></p>
      <a href="tel: "></a>
    </div>
    <div class="details-base">
      <p>{{detail.title}}</p>
      <p>有效期：{{detail.release}}</p>
    </div>
    <div class="details-include">
      <h1 class="title">套餐内容</h1>
    </div>
    <div class="details-intro">
      <h1 class="title">使用说明</h1>
      <p>{{detail.intro}}</p>
    </div>
    <div class="detail-qrcode">
      <p>长按二维码，轻松关注我们</p>
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {}
    }
  },

}
</script>

<style lang="scss">

</style>
