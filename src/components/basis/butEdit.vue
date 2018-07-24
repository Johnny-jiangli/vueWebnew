<template>
    <div class="modal fade bs-example-modal2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel2">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading">
              编辑
            </div>
            <div class="panel-body">
          <form>
            <div class="form-horizontal col-xs-6">
              <div class="form-group">
                <label for="deviceName" class="control-label col-xs-2"><span>*</span>名称</label>
                <div class="col-xs-10">
                  <input type="text" class="form-control" id="deviceName" placeholder="Email" v-bind:value="deviceName">
                </div>
              </div>
              <div class="form-group">
                <label for="userName" class="control-label col-xs-2"><span>*</span>用户名</label>
                <div class="col-xs-10">
                  <input type="text" class="form-control" id="userName"  v-bind:value="userName">
                </div>
              </div>
              <div class="form-group">
                <label for="ip" class="control-label col-xs-2"><span>*</span>IP</label>
                <div class="col-xs-10">
                  <input type="text" class="form-control" id="ip" v-bind:value="ip">
                </div>
              </div>
              <div class="form-group">
                <label for="address" class="control-label col-xs-2">安装点</label>
                <div class="col-xs-10">
                  <input type="text" class="form-control" id="address" placeholder="Last Name" v-bind:value="address">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-xs-2">设备型号</label>
                <div class="col-xs-10">
                  <input type="text" class="form-control" id="d " v-bind:value="deviceModel ">
                </div>
              </div>
            </div>
            <div class="form-horizontal col-xs-6">
              <div class="form-group">
                <label for="manufacturer" class="control-label col-xs-2"><span>*</span>厂商</label>
                <div class="col-xs-10">
                  <input type="text" class="form-control input-sm" id="manufacturer" v-bind:value="manufacturer" >
                </div>
              </div>
              <div class="form-group">
                <label for="password" class="control-label col-xs-2"><span>*</span>密码</label>
                <div class="col-xs-10">
                  <input type="text" class="form-control input-sm" id="password" v-bind:value="password">
                </div>
              </div>
              <div class="form-group">
                <label for="port" class="control-label col-xs-2"><span>*</span>端口号</label>
                <div class="col-xs-10">
                  <input type="text" class="form-control input-sm" id="port" v-bind:value="port">
                </div>
              </div>
              <div class="form-group">
                <label for="mediaId" class="control-label col-xs-2">流分发服务器</label>
                <div class="col-xs-10">
                  <input type="text" class="form-control input-sm" id="mediaId" v-bind:value="mediaId">
                </div>
              </div>
              <div class="form-group">
                <label for="channels" class="control-label col-xs-2">通道个数</label>
                <div class="col-xs-10">
                  <input type="text" class="form-control input-sm" id="channels" v-bind:value="channels" >
                </div>
              </div>
            </div>
            <div class="form-horizontal col-xs-12">
              <div class="form-group">
                <label class="control-label col-xs-2">备注</label>
                <div class="col-xs-10">
                  <textarea></textarea>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-offset-4 col-xs-10 deviceDelete">
                <button  class="btn btn-default" style="width: 150px" data-dismiss="modal" aria-label="Close">保存</button>
                <button  class="btn  btn-default" style="width: 150px" data-dismiss="modal" aria-label="Close" >取消</button>
              </div>
            </div>
          </form>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "butEdit",
      data(){
        return{
          remark: "1",
          createTime: 1531980435000,
          createId: null,
          updateTime: null,
          updateId: null,
          deviceId: "1",
          mediaId: "1",
          deviceName: "1",
          deviceModel: "1",
          manufacturer: "1",
          userName: "1",
          password: "1",
          ip: "1",
          port: "1",
          setUpTime: 1531929600000,
          channels: 1,
          address: "1",
          status: "1",
          channelNums: null
        };
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
  .panel-body>p{
    text-align: center;
    font-size: 18px;
    color: #202846 ;
  }
  .panel-body>div{
    margin-left: 70px ;
  }

  label{
    font-size: 10px;
    color: #7A7E86;
    letter-spacing: 0;
  }
  .deviceDelete>button{
    background: transparent;
    font-size:20px;
    color: #465484;
    border: none;
    margin: 20px 20px 20px 0;
  }
  .deviceDelete>button:hover{
    background: #465484;
    color: white;
  }
  span{
    color: red;
  }
  .btnStyle{
    width:55px;
  }
</style>
