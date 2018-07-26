<template>
  <Row :gutter="32">
    <Col span="24" class="demo-tabs-style1" style="background:#f5f6fa;padding:16px;">
      <Tabs type="card">
        <TabPane label="设备管理">
          <tab-a-table v-bind:ab="tags2" :cc="{a:1}"></tab-a-table>
        </TabPane>
        <TabPane label="设备布防">
          <tab-b-table></tab-b-table>
        </TabPane>
        <TabPane label="推送设置">标签三的内容</TabPane>
        <TabPane label="底裤管理">标签三的内容</TabPane>
      </Tabs>
    </Col>
    <!--<Col span="12" class="demo-tabs-style2">-->
      <!--<Tabs type="card">-->
        <!--<TabPane label="标签一">标签一的内容</TabPane>-->
        <!--<TabPane label="标签二">标签二的内容</TabPane>-->
        <!--<TabPane label="标签三">标签三的内容</TabPane>-->
      <!--</Tabs>-->
    <!--</Col>-->
  </Row>
</template>

<script>
  import TabATable from './deviceBasis/TabA-table'
  import TabBTable from './deviceBasis/TabB-table'
    export default {
        name: "Tags2",
      data(){
          return {
            tags2:[]
          }
      },
      components:{
          TabATable,
          TabBTable
      },
      mounted(){
      }
  }
</script>

<style scoped>
  .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
    height: 120px;
    margin-top: -16px;
  }

  .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
    background: #fff;
    padding: 16px;
  }
  .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: transparent;
  }

  .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    border-color: #fff;
  }
  /*.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{*/
    /*border-radius: 0;*/
    /*background: #fff;*/
  /*}*/
  /*.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{*/
    /*border-top: 1px solid #3399ff;*/
  /*}*/
  /*.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{*/
    /*content: '';*/
    /*display: block;*/
    /*width: 100%;*/
    /*height: 1px;*/
    /*background: #3399ff;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
  /*}*/
</style>
