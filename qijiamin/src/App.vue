<template>
  <div id="app">
    <p>app</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
.bg{
  background: #ffffff;
}
</style>
