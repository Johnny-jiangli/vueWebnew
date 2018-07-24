<template>
  <div>index page</div>
</template>
<script>
  export default {
    name:'testget',
    created () {
      // axios.post('device/selectList',{
      //   pageNum:1,
      //   pageSize:10
      // }).then(function (res) {
      //   console.log(res)
      //   console.log('调用成功')
      // }).catch(function (err) {
      //   console.log('调用失败')
      // })
      this.axios.post('./device/findList').then(function(response){
        console.log(response.data)
      })
    }
  }
</script>
