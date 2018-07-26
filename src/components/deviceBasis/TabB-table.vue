<template>
  <Layout>
    <Table border :columns="columns7" :data="data6" no-data-text="还没有数据...">
    </Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="text-align: center">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </Layout>


</template>
<script>
  export default {
    data () {
      return {
        columns7: [
          // {
          //   title: 'Name',
          //   key: 'name',
          //   render: (h, params) => {
          //     return h('div', [
          //       h('Icon', {
          //         props: {
          //           type: 'person'
          //         }
          //       }),
          //       h('strong', params.row.name)
          //     ]);
          //   }
          // },
          {
            title: '序号',
            key: 'defenceName'
          },
          {
            title: '设备',
            key: 'deviceName'
          },
          {
            title: '算法',
            key: 'alarmId'
          },
          {
            title: '安装地点',
            key: 'name'
          },
          {
            title: '阈值',
            key: 'threshold'
          },
          {
            title: '状态',
            key: 'status',
            align: 'left',
            render: (h, params) => {
              return h('div', [
                h('i-switch', {
                  props: {
                    value:params.row.status,
                    type: 'Success',
                    size: 'large'
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
              ]);
            }
          },
          {
            title: '操作',
            key: 'action',
            align: 'left',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
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
                h('Button', {
                  props: {
                    type: 'primary',
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
                }, '编辑'),

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
        data6: [
          {
            "remark": null,
            "createTime": 1532489074000,
            "createId": null,
            "updateTime": null,
            "updateId": null,
            "defenceId": "1",
            "deviceId": "1",
            "algoId": "3dc43278246b4da787eb9e6a7252e949",
            "alarmId": "1",
            "channelNum": 1,
            "defenceName": "布防名称",
            "threshold": "0.9",
            "monitorArea": "10,20",
            "status": "1",
            "deployAlarmTimes": [],
            "deviceName": "1",
            "algoName": null
          }
        ]
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1);
      },
      // mockTableData1 () {
      //   let data = [];
      //   for (let i = 0; i < 10; i++) {
      //     data.push({
      //       name: 'Business' + Math.floor(Math.random () * 100 + 1),
      //       status: Math.floor(Math.random () * 3 + 1),
      //       portrayal: ['City', 'People', 'Cost', 'Life', 'Entertainment'],
      //       people: [
      //         {
      //           n: 'People' + Math.floor(Math.random () * 100 + 1),
      //           c: Math.floor(Math.random () * 1000000 + 100000)
      //         },
      //         {
      //           n: 'People' + Math.floor(Math.random () * 100 + 1),
      //           c: Math.floor(Math.random () * 1000000 + 100000)
      //         },
      //         {
      //           n: 'People' + Math.floor(Math.random () * 100 + 1),
      //           c: Math.floor(Math.random () * 1000000 + 100000)
      //         }
      //       ],
      //       time: Math.floor(Math.random () * 7 + 1),
      //       update: new Date()
      //     })
      //   }
      //   return data;
      // },
      changePage () {
        // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
        this.tableData1 = this.mockTableData1();
      }
    }
  }
</script>
<style scoped>

</style>
