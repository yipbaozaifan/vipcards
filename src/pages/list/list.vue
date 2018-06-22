<template>
  <div class="pages list-pages">
    <div class="list-cards">
      <div class="list-item--card" v-for="(item, key) in list" :key="key">
        <item :item="item" :id="key"></item>
      </div>
    </div>
  </div>
</template>

<script>
import item from '../../components/item'
import cards from '../../assets/js/details.js'
export default {
  components: {
    item,
  },
  data() {
    return {
      list: cards,
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss">
.list-pages {
  .list-cards {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>


