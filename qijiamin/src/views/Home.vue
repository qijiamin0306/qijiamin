<template>
  <div class="home">
    <router-view/>
    <div id="nav">
      <router-link :to="{name: 'mall'}">商城</router-link>
      <router-link :to="{name:'user'}">我的</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="scss">
  #nav {
    position: fixed;
    bottom: 0;
    box-shadow: 0 0 5px #b2b2b2;
    display: flex;
    justify-content: space-around;
    left: 0;
    right: 0;
    height: 60px;
    line-height: 60px;
    background: #fff;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-size: 0.4rem;
  &.router-link-exact-active {
     color: #42b983;
   }
  }
  }
</style>
