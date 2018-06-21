<template>
  <div class="warp item">
    <div class="container container-left">
      <div class="item-img" :style="{
        backgroundImage: item.img
      }">
      </div>
    </div>
    <div class="container container-right">
      <h1 class="item-title">{{item.title}}</h1>
      <p class="item-release">有效期：{{item.release}}</p>
      <p class="item-price">¥ {{item.price}}</p>
      <router-link :to="{name:'Detail', params:{item: item.id}}" class="btn-detail">详情</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style lang="scss">
.warp {
  width: 100%;
}
.item {
  background-color: #fff;
  padding: 0 px2vw(20);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .container-left {
    .item-img {
      background-size: 100% 100%;
      width: 15px;
      height: 15px;
    }
  }
  .container-right {
    position: relative;
    .btn-detail {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>

