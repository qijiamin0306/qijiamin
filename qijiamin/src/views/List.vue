<template>
  <div @click="detail()">
    <img :src="picUrl+mall.img" class="pic">
    <p class="name">{{mall.name}}</p>
    <p class="price">￥{{mall.sell_price}}</p>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'List',
  store,
  props: {
    mall: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      picUrl: 'https://pic.iweicang.com'
    }
  },
  methods: {
    detail: function () {
      this.$router.push({
        path: '/detail',
        query: {
          id: this.mall.id
        }
      })
    }
  }
}
</script>

<style scoped>
  .pic{
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }
  .price{
    color: #E64340;
    font-size: 0.42rem;
  }
  .name{
    font-size: 0.35rem;
  }
</style>
