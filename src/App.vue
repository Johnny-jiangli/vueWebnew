<template>
  <div id="app">
    <site-index-navigation-bar></site-index-navigation-bar>
    <router-view/>
  </div>
</template>

<script>
  import SiteIndexNavigationBar from './components/basis/siteIndexNavigationBar'
export default {
  name: 'App',
  components:{
    SiteIndexNavigationBar
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
