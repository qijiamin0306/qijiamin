<template>
    <div>
      <LoginOrReg v-if="isLogin" @hidden = 'hidden'></LoginOrReg>
      <!--<router-link to="/loginOrReg">登录</router-link><br>-->
      <p @click="login">登录</p>
      <router-link to="/orderCenter">订单中心</router-link><br>
      <router-link to="/address">收货地址</router-link><br>
      <router-link to="/service">在线客服</router-link><br>
    </div>
</template>

<script>
import LoginOrReg from './LoginOrReg'
export default {
  name: 'User',
  components: { LoginOrReg },
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    login () {
      this.isLogin = true
    },
    hidden () {
      this.isLogin = false
    }
  }
}
</script>

<style scoped>

</style>
