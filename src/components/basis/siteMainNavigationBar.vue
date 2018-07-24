<template>
  <div id="siteMainNavigationBar">
    <nav>
    <div class="inner">
    <ul class="nav">
    <li class="active"><router-link to="#"><img src="../../assets/img/index/icon_monitor1.png" alt="">设备管理</router-link></li>
    <li><router-link to="#"><img src="../../assets/img/index/icon_2_1.png" alt="">设备布防</router-link></li>
    <li><router-link to="#"><img src="../../assets/img/index/icon_message1.png" alt="">推送设置</router-link></li>
    <li><router-link to="#"><img src="../../assets/img/index/icon_ph_1.png" alt="">底库管理</router-link></li>
    </ul>
    </div>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "site-main-navigation-bar",
      data(){
        return {
          isActive:false,
        };
      },
      methods:{
        toggle(){
          this.isActive = !this.isActive
        }

      },
      computed:{

      }
    }
</script>

<style scoped>
  #siteMainNavigationBar{

    font-size: 16px;
  }
  nav{
    box-sizing: border-box;
  }
  nav>.inner{
    background: #F5F6FA;
    margin: 10px 20px;
    padding-top:10px ;
    border-bottom: #ccc solid 1px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  nav>.inner li {
    list-style-type: none;
    display: inline-block;
    margin-right:10px;
    margin-top:10px;

    line-height: 34px;
    text-align: center;
  }
  nav>.inner li>a{
    background: #C6CBD1 ;
    border-radius: 2px;
    color: white;
    height: 48px;
    width: 134px;
  }
  nav>.inner>.nav>.active>a:hover,
  nav>.inner>.nav>.active>a:focus{
    background: #465484;
    color: white;
  }
  nav>.inner li>a:hover,
  nav>.inner li>a:focus
  {
    background: #465484;
    color: white;
  }
</style>
