<template>
  <!--模态框-->
  <div class="modal fade bs-example-modal1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="panel panel-default">
          <!-- Default panel contents -->
          <div class="panel-heading">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            设备详情</div>
          <div class="panel-body">
            <form>
              <div class="form-horizontal col-xs-6">
                <div class="form-group">
                  <label class="control-label col-xs-4"><span>*</span>名称</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">{{deviceName}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class ="control-label col-xs-4"><span>*</span>用户名</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">{{userName}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="IP" class="control-label col-xs-4"><span>*</span>IP</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">{{code}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-4">安装点</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">{{address}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-4">设备型号</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">{{deviceName}}</p>
                  </div>
                </div>
              </div>
              <div class="form-horizontal col-xs-6">
                <div class="form-group">
                  <label  class="control-label col-xs-4"><span>*</span>厂商</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">{{manufacturer}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label  class="control-label col-xs-4"><span>*</span>密码</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">{{ password }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-4"><span>*</span>端口号</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">{{port}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-4">流分发服务器</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">{{mediaId}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-4">通道个数</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">{{channels}}</p>
                  </div>
                </div>
              </div>
              <div class="form-horizontal col-xs-6">
                <div class="form-group">
                  <label class="control-label col-xs-4">备注</label>
                  <div class="col-xs-8">
                    <p class="form-control-static">sdasdsadssssssssssssssssssssssssssssssssssssssssssssss</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- List group -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "butMore",
      data(){
        return{
           "data": {
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
          }
        };
      },
      methods:{

      },
      computed:{
        deviceName(){
          return 1
        },
        userName(){},
        ip(){},
        address(){},
        deviceModel(){},
        manufacturer(){},
        port(){},
        mediaId(){},
        channels(){},
        password(){}

      },
      mounted(){

      }
    }
</script>

<style scoped>
  .modal{
    margin-top: 240px;
  }
  .panel{
    margin: 0 0 ;
  }
  .panel-heading{
    color: #202846;
    font-size: 18px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  span{
    color: red;
  }
  label{
    font-size: 10px;
    color: #7A7E86;
    letter-spacing: 0;
  }
  form{

  }
</style>
