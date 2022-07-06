<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// //+ :: Import Bootstrap ::
// import "bootstrap/dist/css/bootstrap.min.css";


export default {

};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #e25b0db0;
    }
  }
}
</style>
