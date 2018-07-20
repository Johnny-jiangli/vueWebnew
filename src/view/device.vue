<template>
    <!--设备管理-->
  <div>
    <navigation-bar></navigation-bar>
    <site-main></site-main>
  </div>
</template>

<script>
  import NavigationBar from '../components/navigationBar'
  import SiteMain from '../components/siteMain'
    export default {
        name: "device",
      components:{
          NavigationBar,
          SiteMain
      }
    }
</script>

<style scoped>

</style>
