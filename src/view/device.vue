<template>
    <!--设备管理-->
  <div id="device">
    <device-component :list="deviceData"></device-component>
  </div>
</template>
<script>
    import DeviceComponent from '../components/basis/deviceComponent'
    export default {
        name: "device",
      components:{
          DeviceComponent
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
        this.$axios.post('/api/device/findList',{
          pageNum:1,
          pageSize:10
        }).then(function (res) {
          this.list = res.data.data
        })
      },
      beforeDestroy(){
      }
    }
</script>

<style scoped>
#device{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
