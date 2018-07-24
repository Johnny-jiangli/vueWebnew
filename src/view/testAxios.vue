<template>
<device-component :list="list"></device-component>
</template>
<script>
  import DeviceComponent from '../components/basis/deviceComponent'
    export default {
        name: "testAxios",
      components:{DeviceComponent},
      data(){
          return {
            list:{}
          }
      },
      mounted(){
        this.$axios.post("/device/findList",{
          pageNum:1,
          pageSize:10
        })
          .then(res=>{
            console.log(res.data.data)
            this.list = res.data.data;
          })
          .catch(err=>{
            console.log(err)
          })
      }
    }
</script>

<style scoped>
li{
  color: #0f0f0f;
}
</style>
