<template>
    <!--布防管理的面板组件-->
<div>
  <!-- Large modal -->
  <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target=".bs-example-modal1">
    <img src="../../assets/img/index/icon_more.png" alt="">
    详情
  </button>

  <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target=".bs-example-modal2">
    <img src="../../assets/img/index/icon_more.png" alt="">
    编辑
  </button>

  <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target=".bs-example-modal3">
    <img src="../../assets/img/index/icon_more.png" alt="">
    删除
  </button>




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
                  <label class="control-label col-xs-2"><span>*</span>名称</label>
                  <div class="col-xs-10">
                    <p class="form-control-static">{{deviceName}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class ="control-label col-xs-2"><span>*</span>用户名</label>
                  <div class="col-xs-10">
                    <p class="form-control-static">{{userName}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="ip" class="control-label col-xs-2"><span>*</span>IP</label>
                  <div class="col-xs-10">
                    <p class="form-control-static">{{ip}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-2">安装点</label>
                  <div class="col-xs-10">
                    <p class="form-control-static">{{address}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-2">设备型号</label>
                  <div class="col-xs-10">
                    <p class="form-control-static">{{deviceName}}</p>
                  </div>
                </div>
              </div>
              <div class="form-horizontal col-xs-6">
                <div class="form-group">
                  <label  class="control-label col-xs-2"><span>*</span>厂商</label>
                  <div class="col-xs-10">
                    <p class="form-control-static">{{manufacturer}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label  class="control-label col-xs-2"><span>*</span>密码</label>
                  <div class="col-xs-10">
                    <p class="form-control-static">{{password}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-2"><span>*</span>端口号</label>
                  <div class="col-xs-10">
                    <p class="form-control-static">{{port}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-2">流分发服务器</label>
                  <div class="col-xs-10">
                    <p class="form-control-static">{{mediaId}}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-2">通道个数</label>
                  <div class="col-xs-10">
                    <p class="form-control-static">{{channels}}</p>
                  </div>
                </div>
              </div>
              <div class="form-horizontal col-xs-6">
                <div class="form-group">
                  <label class="control-label col-xs-2">备注</label>
                  <div class="col-xs-10">
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

  <div class="modal fade bs-example-modal2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel2">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content col-xs-12">
        <form>
        <div class="form-horizontal col-xs-6">
          <div class="form-group">
            <label for="deviceName" class="control-label col-xs-2">名称</label>
            <div class="col-xs-10">
              <input type="text" class="form-control" id="deviceName" placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label for="userName" class="control-label col-xs-2">用户名</label>
            <div class="col-xs-10">
              <input type="text" class="form-control" id="userName" placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label for="ip" class="control-label col-xs-2">IP</label>
            <div class="col-xs-10">
              <input type="text" class="form-control" id="ip" placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label for="address" class="control-label col-xs-2">安装点</label>
            <div class="col-xs-10">
              <input type="text" class="form-control" id="address" placeholder="Last Name">
            </div>
          </div>
        </div>
        <div class="form-horizontal col-xs-6">
          <div class="form-group h">
            <label for="manufacturer" class="control-label col-xs-2">厂商</label>
            <div class="col-xs-10">
              <input type="text" class="form-control input-sm" id="manufacturer" placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="control-label col-xs-2">密码</label>
            <div class="col-xs-10">
              <input type="text" class="form-control input-sm" id="password" placeholder="Last Name">
            </div>
          </div>
          <div class="form-group">
            <label for="port" class="control-label col-xs-2">端口号</label>
            <div class="col-xs-10">
              <input type="text" class="form-control input-sm" id="port" placeholder="Last Name">
            </div>
          </div>
          <div class="form-group">
            <label for="port1" class="control-label col-xs-2">流分发服务器</label>
            <div class="col-xs-10">
              <input type="text" class="form-control input-sm" id="port1" placeholder="Last Name">
            </div>
          </div>
        </div>



          <div class="form-group">
          <div class="col-xs-offset-4 col-xs-10">
          <button type="submit" class="btn btn-lg btn-default" style="width: 150px">保存</button>
          <button type="submit" class="btn btn-lg btn-default" style="width: 150px" data-dismiss="modal" aria-label="Close" >取消</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="modal fade bs-example-modal3" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel3">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="panel panel-default">
          <!-- Default panel contents -->
          <div class="panel-body">
            <p><img src="../../assets/img/index/icon_delete.png" alt=""></p>
            <p>确定删除吗？</p>
            <div>
            <button class="btn btn-default" data-dismiss="modal" aria-label="Close" v-on="handleDelete">确定</button>
              <button class="btn btn-default" data-dismiss="modal" aria-label="Close" >取消</button>
            </div>
          </div>
          <!-- List group -->
        </div>

      </div>
    </div>
  </div>

</div>
</template>

<script>
    export default {
        name: "front-panel",
        props:{
        panelData:Object
      },
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


      created(){},
      mounted(){},
      beforeDestroy(){}
    }

</script>

<style scoped>
.modal{
  margin-top: 180px;
}
  ul>li{
    border: none;
    margin-bottom: 10px;
  }
.panel{
  margin: 0 0 ;
}
.panel-heading{
    color: #202846;
    font-size: 18px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
.tableType>tbody>tr>td{
  border: none;
}
.tableType>tbody>tr>td:nth-child(odd){
    width: 150px;
    text-align: right;
    color: #7a7e86;
  }
.tableType>tbody>tr>td:nth-child(even){
    text-align: left;
    color:#202846;
  }
span{
  color: red;
}
  /*删除*/
.panel-body>p{
  text-align: center;
  font-size: 18px;
  color: #202846 ;
}
.panel-body>div{
  margin-left: 70px ;
}

.panel-body>div>button {
  margin-right: 10px;
}

  label{
    font-size: 10px;
    color: #7A7E86;
    letter-spacing: 0;
  }
</style>
