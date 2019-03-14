<template>
    <div>
      <div>
        <!--<img/>-->
      </div>
      <div class="detail">
        <p><span>当前价：</span><span class="price">{{detail.sell_price}}</span></p>
        <p class="name">{{detail.goods_name}}</p>
        <p><span>快递：</span><span>{{detail.delivery}}</span></p>
      </div>
      <div class="content">
        <div class="title">产品介绍</div>
        <div>
          <div v-html="detail.goods_content" class="info">
          </div>
        </div>
      </div>
      <div class="footer">
        <button @click="buy()">立即购买</button>
      </div>
      <LoginOrReg v-if="isLogin" @hidden = 'hidden'></LoginOrReg>
      <div class="mask" v-show="isShowMask">
        <div class="popup">
          <div><span>购买数量</span></div>
          <div><span @click="close()">取消</span><span @click="sure()">确定</span></div>
        </div>
      </div>
    </div>
</template>

<script>
import LoginOrReg from './LoginOrReg'
export default {
  name: 'Detail',
  components: {
    LoginOrReg
  },
  data () {
    return {
      id: 0,
      url: 'https://api.iweicang.com/v1/index.php',
      detail: {},
      isShowMask: false,
      isLogin: false
    }
  },
  mounted: function () {
    this.getDetail()
  },
  methods: {
    getDetail: function () {
      this.id = this.$route.query.id
      this.$ajax({
        method: 'get',
        url: this.url + '?c=goods&a=detail&id=' + this.id
      }).then((response) => {
        this.detail = response.data
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    },
    buy: function () {
      this.isLogin = true
      // this.isShowMask = true
    },
    close: function () {
      this.isShowMask = false
    },
    sure: function () {
      this.$router.push('/order')
    },
    hidden: function () {
      this.isLogin = false
    }
  }
}
</script>

<style>
  body{
    margin: 0;
  }
  .detail{
    font-size: 0.4rem;
    padding: 0.5rem;
  }
  .name{
    font-weight: bold;
  }
  .title{
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    padding: 0.5rem;
  }
.footer button{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 1rem;
  border: none;
  background: linear-gradient(123deg,#DEC38A 0%,#B09258 100%);
  color: #ffffff;
}
.content{
  margin-bottom: 1.6rem;
  font-size: 0.4rem;
  text-align: center;
}
.info img,video{
  width: 9.7rem;
}
.mask{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  background: rgba(0,0,0,0.4);
}
.popup{
  background: #ffffff;
}
  .price{
    color: #E64340;
    font-size: 0.42rem;
  }
</style>
