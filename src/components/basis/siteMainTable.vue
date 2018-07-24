<template>
  <section>
    <div class="inner">
      <table class="table">
      <thead>
        <th>序号</th>
        <th>布防名称</th>
        <th>设备</th>
        <th>算法</th>
        <th>安装地点</th>
        <th>阀值</th>
        <th>开/关</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="(item,index) in items">
          <td>{{item.deviceId}}</td>
          <td>{{item.deviceName}}</td>
          <td>{{item.device}}</td>
          <td>{{item.deviceALG}}</td>
          <td>{{item.deviceAddress}}</td>
          <td>{{item.deviceFa}}</td>
          <td class="td">
            <div class="material-switch pull-right">
              <input id="someSwitchOptionSuccess" name="dd" type="checkbox"/>
              <label for="someSwitchOptionSuccess" class="label-success"></label>
            </div>
          </td>
          <td>
            <button type="button" class="btn btn-default btn-xs" data-toggle="modal" data-target=".bs-example-modal1">
              <img src="../../assets/img/index/icon_more.png" alt="">
              详情
            </button>
            <button type="button" class="btn btn-default btn-xs" data-toggle="modal" data-target=".bs-example-modal2">
              <img src="../../assets/img/index/icon_edit.png" width="15" alt="">
              编辑
            </button>
            <button type="button" class="btn btn-default btn-xs" data-toggle="modal" data-target=".bs-example-modal3">
              <img src="../../assets/img/index/icon_delete.png" width="15" alt="">
              删除
            </button>
          </td>
        </tr>
      </tbody>
    <tfoot>
      <slot>

      </slot>
    </tfoot>
    </table>
    </div>
  </section>
</template>

<script>
  import FrontPanel from '../basis/frontPanel'
    export default {
        name: "site-main-table",
      components:{
          FrontPanel
      }
      ,
      data(){
          return {items:[
              {
                deviceId:1,
                deviceName:'人脸识别',
                device:'NVR设备通道1',
                deviceALG:'人脸识别',
                deviceAddress:'小区门口',
                deviceFa:0.8,
                deviceStatus:true
              },
              {
                deviceId:1,
                deviceName:'人脸识别',
                device:'NVR设备通道1',
                deviceALG:'人脸识别',
                deviceAddress:'小区门口',
                deviceFa:0.8,
                deviceStatus:true
              }, {
                deviceId:1,
                deviceName:'人脸识别',
                device:'NVR设备通道1',
                deviceALG:'人脸识别',
                deviceAddress:'小区门口',
                deviceFa:0.8,
                deviceStatus:true
              }
            ]
          }
      }
    }
</script>

<style scoped>

  section{
    box-sizing: border-box;
    margin: 0 20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  tbody{
    background: white;
    color: #7a7e86;

  }

th{
  height: 60px;
  line-height: 60px;
  text-align: center;
}
tr{
  text-align: center;
}
  section>.inner{
    height: 690px;
  }
  section>.inner{
    border: #ccc solid 1px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    box-shadow: 0 0 3px #ccc ;
  }
  section>.inner>table th{
    height: 61px;
    background: #f5f6fa;
    font-size: 16px;
    color: #202846;
  }
  section>.inner>table tr{
    color: #7a7e86;
    font-size: 16px;
  }
  button{
    font-size:16px;
    color: #7a7e86;
  }
  button:hover{
    background: #465484;
    color: white;
  }

.material-switch > input[type="checkbox"] {
  display: none;
}
.material-switch > label {
  cursor: pointer;
  height: 0px;
  position: relative;
  width: 40px;
}
.material-switch > label::before {
  background: rgb(0, 0, 0);
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  content: '';
  height: 23px;
  margin-top: -10px;
  margin-left: -150%;
  position:absolute;
  opacity: 0.3;
  transition: all 0.4s ease-in-out;
  width: 120%;
}
.material-switch > label::after {
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  content: '';
  height:25px;
  left: -10%;
  margin-top:-11px;
  margin-left: -88%;
  position: absolute;
  top: 0;
  transition: all 0.3s ease-in-out;
  width: 55%;
}
.material-switch > input[type="checkbox"]:checked + label::before {
  background: inherit;
  opacity: 0.5;
}
.material-switch > input[type="checkbox"]:checked + label::after {
  background: inherit;
  left: 50%;
}
</style>
