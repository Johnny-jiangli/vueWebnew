<template>
  <article>
  <div class="inner">
    <form class="form-inline">
      <div class="form-group">
      <button class="btn btn-default"><img src="../../assets/img/index/icon_add1.png"  width="18" alt="">新增</button>
      </div>
      <div class="form-group" style="border-left:#acbac8 solid 1px ;margin-left: 20px;padding-left: 20px">
      <p class="form-control-static">
        目标筛选：
      </p>
      </div>
      <div class="form-group">
        <label class="sr-only" for="exampleInputEmail3">目标筛选</label>
        <input type="email" class="form-control" id="exampleInputEmail3" placeholder="名称">
      </div>
      <div class="form-group">
        <select class="form-control">
        <option>类型</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> 记住我的选择
        </label>
      </div>
      <button type="submit" class="btn btn-default">搜索</button>
    </form>
  </div>
  </article>
</template>
<script>
    export default {
        name: "add",
      data(){
        return{
          "remark": "1",
          "createTime": 1531980435000,
          "createId": null,
          "updateTime": null,
          "updateId": null,
          "deviceId": "1",
          "mediaId": "1",
          "deviceName": "1",
          "deviceModel": "1",
          "manufacturer": "1",
          "userName": "1",
          "password": "1",
          "ip": "1",
          "port": "1",
          "setUpTime": 1531929600000,
          "channels": 1,
          "address": "1",
          "status": "1",
          "channelNums": null
        };
      },
    }
</script>

<style scoped>
  article{
    box-sizing: border-box;
  }
  article>.inner{
    background: white;
    padding: 20px 10px;
    margin: 20px 20px;
    border-radius:5px;
  }
</style>
