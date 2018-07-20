<template>
  <table class="table">
      <thead>
        <th>序号</th>
        <th>布防名称</th>
        <th>设备</th>
        <th>算法</th>
        <th>安装地点</th>
        <th>阀值</th>
        <th>状态</th>
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
            <front-panel></front-panel>
          </td>
        </tr>
      </tbody>
    </table>
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
  table{
    position: relative;
    background: white;
    color: #0f0f0f;
  }
thead{
  background: #cccccc;
}
th,td{
  height: 80px;
  line-height: 80px;
  text-align: center;
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
  height: 25px;
  margin-top: 1px;
  margin-left: -130%;
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
  margin-top:0;
  margin-left: -66%;
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
