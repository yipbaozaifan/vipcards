<template>
  <div class="details pages">
    <div class="details-img sections">
      <img src="" alt="">
    </div>
    <div class="details-contact sections">
      <div class="contact-left">
        <p class="shop-name">华柏汽车一站式服务</p>
        <p class="address">云浮市新兴县广兴大道东百合山游乐场桥东中石化加油站侧</p>
      </div>
      <a class="tel" href="tel:13178650327">
        <span></span>
      </a>
    </div>
    <div class="details-base sections">
      <p class="title">{{detail.title}}</p>
      <p class="release">有效期：{{detail.release}}</p>
    </div>
    <div class="details-include sections">
      <h1 class="title">套餐内容</h1>
    </div>
    <div class="details-intro sections">
      <h1 class="title">使用说明</h1>
      <p>{{detail.intro}}</p>
    </div>
    <div class="detail-qrcode sections">
      <p>长按二维码，轻松关注我们</p>
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
import details from '../../assets/js/details';
export default {
  data() {
    return {
      detail: {}
    }
  },
  mounted() {
    this.detail = details[this.$route.params.itemId];
    console.log(this.detail);
  }
}
</script>

<style lang="scss">
@import '../../assets/css/var.scss';
.details {
  background-color: #cccccc;
  .sections {
    margin-bottom: px2vw(8);
    background-color: #ffffff;
  }
  .details-img {
      text-align: center;
      padding: px2vw(20) 0;
    img {
      display: inline-block;
      width: px2vw(350);
      min-height: px2vw(200);
    }
  }
  .details-contact {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: px2vw(20);
    .contact-left {
      .shop-name {
        font-size: 20px;
        margin-bottom: px2vw(30);
        font-weight: 600;
      }
      .address {
        font-size: 14px;
      }
    }
    .tel {
      display: inline-block;
      width: px2vw(220);
      height: px2vw(80);
      background-color: brown;
      text-align: center;
      line-height:  px2vw(60);
      font-size: 0;
      margin-left: px2vw(55);
      &::before {
        content:"";
        display:inline-block;
        height:100%;
        vertical-align:middle;
        font-size: 0;
      }
      span {
        background-image: url(./assets/images/tel.png);
        background-size: 100% 100%;
        width: px2vw(40);
        height: px2vw(40); 
        display: inline-block;
        vertical-align: middle;
        font-size: 0;
      }
    }
  }
  .details-base {
    
  }
}
</style>
