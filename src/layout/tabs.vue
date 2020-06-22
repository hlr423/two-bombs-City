<template>
    <div  style="margin-top: 20px">
      <a-tabs tabPosition="left" @change="changeTabs" :defaultActiveKey="activeKey">
        <a-tab-pane key="1" tab="人员计数">
<!--          <PersonnelStatistics/>-->
          <router-view/>
        </a-tab-pane>
        <a-tab-pane key="2" tab="人员统计">
<!--          <PersonnelCount/>-->
        </a-tab-pane>
      </a-tabs>

    </div>
</template>

<script>
  import PersonnelStatistics from './PersonnelStatistics'
  import PersonnelCount from './PersonnelCount'
    export default {
        name: "tabs",
      data(){
        return {
          activeKey:'1',
          data:[],
          software:[
            {typeName:'试验验证环境',id:'1',data:[
                {icon:'el-icon-s-cooperation',name:'software',color:'#398bf6'},
                {icon:'el-icon-platform-eleme',name:'software',color:'#398bf6'},
                {icon:'el-icon-edit',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-finance',name:'software',color:'#398bf6'},
                {icon:'el-icon-edit',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-cooperation',name:'software',color:'#398bf6'},
                {icon:'el-icon-platform-eleme',name:'software',color:'#398bf6'},
                {icon:'el-icon-edit',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-finance',name:'software',color:'#398bf6'},
                {icon:'el-icon-edit',name:'software',color:'#398bf6'},
                {icon:'el-icon-platform-eleme',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-cooperation',name:'software',color:'#398bf6'},
                {icon:'el-icon-platform-eleme',name:'software',color:'#398bf6'},
                {icon:'el-icon-edit',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-finance',name:'software',color:'#398bf6'},
                {icon:'el-icon-edit',name:'software',color:'#398bf6'},
              ]},
            {typeName:'数据仿真环境',id:'2',data:[
                {icon:'el-icon-s-management',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-help',name:'software',color:'#398bf6'},
                {icon:'el-icon-edit',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-ticket',name:'software',color:'#398bf6'},
                {icon:'el-icon-camera-solid',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-management',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-help',name:'software',color:'#398bf6'},
                {icon:'el-icon-edit',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-ticket',name:'software',color:'#398bf6'},
                {icon:'el-icon-camera-solid',name:'software',color:'#398bf6'},

              ]},
            {typeName:'数据效能评估环境',id:'3',data:[
                {icon:'el-icon-s-help',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-ticket',name:'software',color:'#398bf6'},
                {icon:'el-icon-camera-solid',name:'software',color:'#398bf6'},
                {icon:'el-icon-edit',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-management',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-help',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-ticket',name:'software',color:'#398bf6'},
                {icon:'el-icon-camera-solid',name:'software',color:'#398bf6'},
                {icon:'el-icon-edit',name:'software',color:'#398bf6'},
                {icon:'el-icon-s-management',name:'software',color:'#398bf6'},
              ]},

          ],
          drawer: false,
          dialog: false,
          loading: false,
          direction: 'ltl',
          formLabelWidth: '140px',
          timer: null,
        }
      },
      components:{
        PersonnelStatistics,
        PersonnelCount
      },
      methods:{
        changeTabs(value){
          console.log(value)
        },
        //显示详情列表
        handleShow(item){
          console.log(item)
          this.drawer = true;
        },
        cancelForm() {
          this.loading = false;
          this.drawer = false;
          clearTimeout(this.timer);
        },
        handleClose(done) {
          done();
        }
      },
      computed: {
      },
    }
</script>

<style scoped lang="less">
  .layout{
    margin: 0 50px 10px 10px;
    /*text-align: center;*/
  }
  .App-logo {
    margin: 20px;
    height: 10%;
    pointer-events: none;
  }

  /*@media (prefers-reduced-motion: no-preference) {*/
  /*  .App-logo {*/
  /*    animation: App-logo-spin infinite 20s linear;*/
  /*  }*/
  /*}*/

  .App-header {
    background-color: #ffffff;
    /*height: 10%;*/
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    border-radius: 8px;
    box-shadow: 1px 5px 10px 2px #e9e9e9;
    text-align: center;
    margin-top: 10px;
    margin-right: 30px;
    margin-bottom: 10px;
    div:first-child{
      padding: 5px 0;
      margin-top: 20px;
      height: 120px;
      i{
        font-size: 5rem;
        transition: font-size 0.5s;
      }
    }
  }
  .App-header:hover{
    box-shadow: 1px 5px 10px 2px rgba(51, 159, 255, 0.65);
    div:first-child{
      i{
        font-size: 4rem;
      }
    }
  }
  .App-link {
    color: #61dafb;
  }
  .coment{
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }
  .nameStyle{
    height: 5vh;
    width: 100%;
    cursor: pointer;
    background-color: rgba(51, 159, 255, 0.72);
    margin-top: 15px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

  }
  .nameStyle:hover{
    background-color: rgba(51, 159, 255, 0.3);
    i{
      color: #ffb836;
      animation:myMove 1s infinite;
      -webkit-animation:myMove 1s infinite; /*Safari and Chrome*/
    }
  }

  @keyframes myMove
  {
    from {margin-left:0;}
    to {margin-left:20px;}
  }

  @-webkit-keyframes myMove /*Safari and Chrome*/
  {
    from {margin-left:0;}
    to {margin-left:20px;}
  }
  /* drawer 样式 */
  .demo-drawer{
    text-align: left!important;
  }
</style>
