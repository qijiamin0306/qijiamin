<template>
    <div class="mask">
      <div class="bg">
        <div class="input-box">
          <input type="text" v-model="mobile" placeholder="请输入手机号"/><br>
          <input type="password" v-model="code" placeholder="请输入验证码"/>
          <button @click="getCode" class="code">获取验证码</button>
        </div>
        <div class="bottom">
          <button type="button" @click="login()" class="button login">登录</button>
          <button type="button" @click="close()" class="button cancel">取消</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LoginOrReg',
  data () {
    return {
      mobile: '',
      code: ''
    }
  },
  methods: {
    login: function () {
      var that = this
      this.$ajax({
        mothed: 'post',
        url: this.GLOBAL.url + 'c=members&a=codeLogin',
        param: {
          mobile: that.mobile,
          code: that.code
        }
      }).then((res) => {
        this.$emit('hidden')
      }).catch((error) => {
        alert(error)
      })
    },
    close: function () {
      this.$emit('hidden')
    },
    getCode: function () {
      this.$ajax({
        mothed: 'get',
        url: this.GLOBAL.url + 'c=members&a=send_login_code&mobile=' + this.mobile
      }).then((res) => {
        alert(res)
      }).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>

<style scoped>
  .input-box{
    text-align: left;
  }
  .mask{
    text-align: center;
  }
  .bg{
    width: 6rem;
    border-radius: 8px;
    margin: auto;
    margin-top: 5rem;
    padding: 0.8rem;
  }
  button{
    border: none;
  }
  .code{
    background: none;
    margin-left: 0.3rem;
    font-size: 0.38rem;
    float: right;
  }
  .bottom{
    display: flex;
    justify-content: space-between;
  }
  .button{
    padding: 0.2rem;
    width: 45%;
    border-radius: 5px;
    color: #ffffff;
  }
  .login{
    background: linear-gradient(123deg,rgba(222,195,138,0.6) 0%,rgba(176,146,88,0.6) 100%);
  }
  .cancel{
    background: linear-gradient(123deg,rgba(222,195,138,1) 0%,rgba(176,146,88,1) 100%);
  }
  input{
    border:none;
    border-bottom: 1px solid #ddd;
    width: 50%;
    margin-bottom: 1rem;
    padding: 0.1rem;
  }
  input::placeholder{
    font-size: 0.38rem;
  }
</style>
