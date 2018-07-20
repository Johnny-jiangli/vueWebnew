<template>
  <div id="siteMainNavigationBar">
      <ul class="nav nav-pills">
        <li  role="presentation" v-bind:class="{active:isActive}" @click="toggle"><router-link to="/device"><img src="../../assets/img/index/icon_monitor1.png" alt="">设备管理</router-link ></li>
        <li role="presentation" v-bind:class="{active:isActive}" @click="toggle"><router-link to="/deployDefence"><img src="../../assets/img/index/icon_chuan2.png" alt="">设备布防</router-link></li>
        <li role="presentation" v-bind:class="{active:isActive}" @click="toggle"><router-link to="#"><img src="../../assets/img/index/icon_message1.png"  alt="">推送设置</router-link></li>
        <li role="presentation" v-bind:class="{active:isActive}" @click="toggle"><router-link to="#"><img src="../../assets/img/index/icon_message1.png" alt="">底库管理</router-link></li>
      </ul>
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

li{
  margin-right: 20px;
}
a{
  color: white;
  background: #dcdee0;
}
a:hover{
  color: #0f0f0f;
  background-color:red;
}
a:active{
  background-color: #465484;
}
  ul{
    background: white;

  }
</style>
