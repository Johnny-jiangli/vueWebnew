<template>
  <div class="wai">
    <div class="bar">
    <site-main-navigation-bar></site-main-navigation-bar>
    </div>
    <div class="bar1">
    <site-main-table></site-main-table>
    </div>
  </div>
</template>

<script>
  import SiteMainNavigationBar from './basis/siteMainNavigationBar'
  import SiteMainTable from './basis/siteMainTable'
    export default {
        name: "site-main",
      components:{
          SiteMainNavigationBar,
          SiteMainTable
      }
    }
</script>

<style scoped>
.wai{
  background: white;
}
  .bar{
    margin: 20px 50px;
    color: #0f0f0f;
    border-bottom: #cccccc solid 1px;
  }
  .bar1{
    margin: 20px 50px;
  }
</style>
