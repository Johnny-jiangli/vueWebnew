<template>
  <div id="">
    <!--<site-index-navigation-bar></site-index-navigation-bar>-->
    <!--<site-main></site-main>-->
  </div>
</template>

<script>
  import SiteMain from '../components/siteMain'
  import SiteIndexNavigationBar from '../components/basis/siteIndexNavigationBar'
    export default {
        name: "index",
      components:{
          SiteMain,
        SiteIndexNavigationBar
      }
    }
</script>

<style scoped>
div{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*background: #465484;*/
  color: white;
}
</style>
