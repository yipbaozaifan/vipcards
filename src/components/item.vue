<template>
  <div class="warp item">
    <div class="container container-left">
      <div class="item-img" :style="{
        backgroundImage: item.image
      }">
      </div>
    </div>
    <div class="container container-right">
      <h1 class="item-title ellipsis">{{item.title}}</h1>
      <p class="item-release">有效期：{{item.release}}</p>
      <p class="item-price">¥ {{item.price}}</p>
      <router-link :to="{name:'detail', params: {itemId: id}}" class="btn-detail">详情</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'id'],
}
</script>

<style lang="scss">
@import '../assets/css/var.scss';
.warp {
  width: 100%;
}
.item {
  box-sizing: border-box;
  background-color: #fff;
  padding: px2vw(20) px2vw(20);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .container-left {
    .item-img {
      background-size: 100% 100%;
      width: px2vw(160);
      height: px2vw(100);    
    }
  }
  .container-right {
    width: px2vw(400);
    position: relative;
    .btn-detail {
      position: absolute;
      right: 0;
      bottom: 0;
      display: inline-block;
      padding: 0 px2vw(30);
      background-color: brown;
      color: #fff;
      font-size: 14px;
      height: px2vw(45);
      line-height: px2vw(45);  
    }
    .item-title {
      margin-bottom: px2vw(20);
    }
    .item-release {
      color: #555555;
      font-size: 12px;
    }
    .item-price {
      margin-top: px2vw(8);
      color: red;
    }
  }
}
</style>

