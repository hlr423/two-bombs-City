<template>
  <div class="layout">
    <div>
      <Row>
        <Col span="8">
         <span style="font-weight: bolder">当天：</span>  <Input v-model="countData.todayNum" placeholder="当天" style="width: 200px" />
        </Col>
        <Col span="8">
          <span style="font-weight: bolder">当月：</span> <Input v-model="countData.monthNum" placeholder="当月" style="width: 200px" />
        </Col>
        <Col span="8">
          <span style="font-weight: bolder">累计：</span>  <Input v-model="countData.totalNum" placeholder="累计" style="width: 200px" />
        </Col>
      </Row>
      <Divider />
      <Row style="margin-bottom: 15px">
        <Col span="24">
          <span style="font-weight: bolder">日期：</span>
          <DatePicker type="date"
                      :value="startTime"
                      show-week-numbers placeholder="Select date"
                      :clearable="true"
                      @on-change="getStartTime"
                      style="width: 200px"></DatePicker>
          -至-
          <DatePicker type="date"
                      :value="endTime"
                      show-week-numbers placeholder="Select date"
                      :clearable="true"
                      @on-change="getEndTime"
                      style="width: 200px"></DatePicker>
         <span style="margin: 0 15px;font-weight: bolder"> 团体名称:</span><Input v-model="teamName" placeholder="请输入团体名称" style="width: 200px" />
          <Button type="primary" @click="getStatisticData" style="margin-left: 10px">查询</Button>
          <Button type="info" @click="exportStatisticData" style="margin-left: 20px">导出</Button>
        </Col>
      </Row>
    </div>
    <div>
      <Table border  :columns="columns" :data="data" ></Table>
      <div style="text-align: right;margin-top: 15px">
        <Page :total="totalCount" show-elevator  :current="pageNumber" :page-size="pageSize" @on-change="changePage"/>
      </div>
    </div>
    <Spin size="large" fix  v-if="spinShow" ></Spin>
  </div>
</template>
<script>
  export default {
    name:'software',
    data(){
      return {
        countData:{totalNum:'',monthNum:'',todayNum:''},
        data:[],
        columns:[
          {
            title: '序号',
            key: 'id',
            align: 'center'
          },
          {
            title: '团体',
            key: 'teamName',
            align: 'center'
          },
          {
            title: '时间',
            key: 'date',
            align: 'center'
          },
          {
            title: '开始时间',
            key: 'startTime',
            align: 'center'
          },
          {
            title: '结束时间',
            key: 'endTime',
            align: 'center'
          },
          {
            title: '通过人数',
            key: 'inDoorPassCount',
            align: 'center',
          },
          {
            title: '备注',
            key: 'remark',
            align: 'center',
          },
        ],
        spinShow: false,
        startTime:'',
        endTime:'',
        teamName:'',
        totalCount: 0,
        pageNumber: 1,
        pageSize: 10,
      }
    },
    watch:{

    },
    created(){
      this.initCountData();
      this.initData();
    },
    methods:{
      initData(){
        let v=this;
        let params=new FormData()
        params.append('startTime',v.startTime);
        params.append('endTime',v.endTime);
        params.append('teamName',v.teamName);
        params.append('page',v.pageNumber);
        params.append('size',v.pageSize);
        v.$http.post('/api/user/statics-info',params).then((res)=> {
            if (res.body.code== '200') {
              v.data=res.body.data.content;
              v.totalCount=res.body.data.totalElements
            } else {
              v.$Message.error(res.body.info,1);
            }
            v.spinShow=false;
          })
          .catch((err)=> {
            v.$Message.error("操作失败！",1);
            v.spinShow=false;
          });
      },
      initCountData(){
        let v=this;
        v.$http.get('/api/user/statics')
          .then((res)=> {
            if (res.body.code== '200') {
              v.countData=res.body.data;
            } else {
              v.$Message.error(res.body.info,1);
            }
            v.spinShow=false;
          })
          .catch((err)=> {
            v.$Message.error("操作失败！",1);
            v.spinShow=false;
          });
      },
    //  分页
      changePage(page){
        this.pageNumber=page;
        this.initData();
      },
      getStartTime(date){
        this.startTime=date
      },
      getEndTime(date){
        this.endTime=date
      } ,
      getStatisticData(){
        this.initData();
      },
      exportStatisticData(){
        let v=this;
        window.location.href = `/api/user/export?startTime=${v.startTime}&endTime=${v.endTime}&teamName=${v.teamName}&page=${v.pageNumber}&size=${v.pageSize}`

        v.$Message.success('导出统计数据成功')

      }
    }
  }
</script>
<style scoped lang="less">
/* drawer 样式 */
  .demo-drawer{
    text-align: left!important;
  }
</style>
