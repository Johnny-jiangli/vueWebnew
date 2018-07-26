<template>
<Layout>
  <div id="wrapper"></div>
  <div class="wra">
  <Header>
    <div class="inner">
    <Menu mode="horizontal" :theme="theme1" active-name="1" style="line-height: 73px; height: 73px;background: transparent;">
      <Submenu name="1">
        <template slot="title">
          <Icon type="stats-bars"></Icon>
          统计分析
        </template>
        <MenuGroup title="使用">
          <MenuItem name="1-1">新增和启动</MenuItem>
          <MenuItem name="1-2">活跃分析</MenuItem>
          <MenuItem name="1-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="1-4">用户留存</MenuItem>
          <MenuItem name="1-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="2">
        <Icon type="ios-paper"></Icon>
        内容管理
      </MenuItem>
      <MenuItem name="3">
        <Icon type="ios-people"></Icon>
        用户管理
      </MenuItem>
      <MenuItem name="4">
        <Icon type="settings"></Icon>
        综合设置
      </MenuItem>

    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
      <Radio label="light"></Radio>
      <Radio label="dark"></Radio>
      <Radio label="primary"></Radio>
    </RadioGroup>
    </div>
  </Header>
  </div>
</Layout>
</template>

<script>
    export default {
        name: "tags"
    }
</script>

<style scoped>
  #wrapper{
    position:absolute;
    background:
      url("../assets/img/index/logo.png") 10px 10px no-repeat,
      url("../assets/img/index/logo_bg_bar.png") no-repeat,
      url("../assets/img/index/top_bar.png") round #465484;
      width:100%;
      height: 74px;
      top:0;
      left: 0;
  }
  .inner{

    width: 580px;
    margin-left: 310px;
    line-height: 74px;
  }

</style>
