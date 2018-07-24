<template>
  <div>
    <div class="modal fade bs-example-modal3" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel3">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-body">
              <p><img src="../../assets/img/index/icon_delete.png" alt=""></p>
              <p>确定删除吗？</p>
              <div class="deviceDelete">
                <button class="btn btn-xs btn-default" data-dismiss="modal" aria-label="Close">确定</button>
                <button class="btn btn-xs btn-default" data-dismiss="modal" aria-label="Close" >取消</button>
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
        name: "butDelete",
      data(){
        return{
          "code": "10100",
          "msg": "失败",
          "count": 0,
          "data": null
        }
      },
    }
</script>

<style scoped>
  .modal{
    margin-top: 240px;
  }
  .panel{
    margin: 0 0 ;
    height: 150px;
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
</style>
