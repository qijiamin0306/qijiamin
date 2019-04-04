<template>
  <div class="mall">
    <List :mall="mall" class="list" v-for="(mall,index) in mallList" :key="index">
    </List>
  </div>
</template>

<script>
import List from './List.vue'
export default {
  name: 'Mall',
  components: {
    List
  },
  data: function () {
    return {
      mallList: [],
      url: 'https://api.iweicang.com/v1/index.php'
    }
  },
  mounted () {
    this.getMallList()
  },
  methods: {
    getMallList: function () {
      this.$ajax({
        method: 'get',
        url: this.url + '?c=who&a=sellerGoodsListMade&seller_id=288&page=1'
      }).then((response) => {
        console.log(this.$ajax)
        this.mallList = response.data
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  .list{
    display: inline-block;
    margin: 0.39rem;
    border-bottom: 1px solid #ddd;
  }
  .mall{
    margin-bottom: 60px;
  }

</style>
