<template>
  <div class="wrapper">
    <site-main-navigation-bar></site-main-navigation-bar>
    <Add></Add>
    <site-main-table>
      <but-more ></but-more>
      <but-edit></but-edit>
      <but-delete></but-delete>
    </site-main-table>
  </div>
</template>
<script>
  import butEdit from './butEdit'
  import butDelete from './butDelete'
  import butMore from  './butMore'
  import SiteMainNavigationBar from './siteMainNavigationBar'
  import SiteMainTable from './siteMainTable'
  import Add from './add'
  export default {
        name: "deviceComponent",
        props:{
          list:Array,
          count:Number,
        },
         components:{
           butEdit,
           butDelete,
           butMore,
           SiteMainNavigationBar,
           SiteMainTable,
           Add
        },
      data(){
          return {
            deviceData:[]
          }
      },
    methods:{
    },
    computed:{
          // 计算属性
    },
    watch:{
      // 观察者
    },
    // 生命周期
      created(){
      },
      mounted(){

      },
      beforeDestroy(){
      }
    }
</script>

<style scoped>
 .wrapper{
   box-sizing: border-box;
    background: #F5F6FA;
    margin-top:-20px;
    padding: 10px 30px;
  }
</style>
