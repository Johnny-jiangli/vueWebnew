<template>
<Layout>
  <add-form></add-form>
  <Table border :columns="columns7" :data="data6"></Table>
  <div style="margin: 10px;overflow: hidden">
    <div style="text-align: center">
      <Page :total="100" :current="1" @on-change="changePage"></Page>
    </div>
  </div>
</Layout>
</template>

<script>
  import AddForm from './AddForm'
  import MotalA from './motalIA'
    export default {
    components:{AddForm,MotalA},
      data () {
        return {
          columns7: [
            {
              title: '名称',
              key: 'deviceName'
            },
            {
              title: '设备',
              key: 'deviceId'
            },
            {
              title: '用户名',
              key: 'userName'
            },
            {
              title: 'IP',
              key: 'ip'
            },
            {
              title: '端口号',
              key: 'port'
            },
            {
              title: '安装地点',
              key: 'address'
            },
            {
              title: '操作',
              key: 'action',
              align: 'left',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'dark',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.show(params.index)
                      }
                    }
                  }, '详情'),
                  h('Button',{
                    props:{
                      type:'dark',
                      size:'small'
                    },
                    on:{
                      click:()=>{
                        this.openModal(params.index)
                      }
                    }
                  },'编辑')
                  ,
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.remove(params.index)
                      }
                    }
                  }, '删除')
                ]);
              }
            }
          ],
          data6:[{
            "remark": "1",
            "createTime": 1532489324000,
            "createId": null,
            "updateTime": null,
            "updateId": null,
            "deviceId": "1",
            "mediaId": "4",
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
          }]



        }
      },
      methods: {
        changePage () {
          // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
          this.tableData1 = this.mockTableData1();
        },
        show (index) {
          this.$Modal.info({
            title: 'User Info',
            content: `名称：${this.data6[index].deviceName}<br>用户名：${this.data6[index].address}<br>IP：${this.data6[index].address}`
          })
        },
        remove (index) {
          this.data6.splice(index, 1);
        },
        openModal: function() {
          this.$Modal.confirm({
            scrollable:true,
            okText:'保存',
            render: (h) => {
              return h(MotalA, {
                props: {

                },
                on: {
                  value1: (value1) => {
                    this.v1 = value1
                  },
                  value2: (value2) => {
                    this.v2 = value2
                  }
                }
              })
            },
            onOk: () => {
              if (this.v1 == '' || this.v2 == '') {
                this.$Message.error('信息填写不完整!')
              }
              const msg = this.$Message.loading({
                content: '正在保存..',
                duration: 0
              })
              this.saveLink(msg)
            }
          })
        }
      },
      mounted(){
        this.$axios.post("/device/findList",{
          pageNum:1,
          pageSize:10
        })
          .then(res=>{
            this.data6 =res.data.data;
          })
          .catch(err=>{
            // console.log(err)
          })
      }
    }
</script>

<style scoped>

</style>
