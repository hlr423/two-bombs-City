
<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-menu-item index="/">两弹城人员统计</el-menu-item>
    </el-menu>
    <div  style="margin-top: 20px;margin-right: 30px">
    <a-tabs tabPosition="left" @change="changeTabs" :defaultActiveKey="activeKey">
      <a-tab-pane :key="item.id" :tab="item.label" v-for="item in tabs">

      </a-tab-pane>
      <router-view/>
    </a-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name:'index',
    data() {
      return {
        tabs:[
          {label:'人员统计',id:'1'},
          {label:'人员计数',id:'2'}
        ],
        activeIndex: '/',
        activeKey:'1',
      };
    },
    methods: {
      handleSelect(index) {
        this.activeIndex = index;
      },
      changeTabs(value){
        if(value=='1'){
          this.$router.push({path:'/'})
        }else {
          this.$router.push({path:'/PersonnelCount'})
        }
      },
    },
    created() {
      this.$router.push({path:'/'})
    }
  }
</script>
<style scoped lang="less">
   .el-menu{
    padding-left: 150px!important;
     background-color: rgba(102, 183, 255, 0.77) !important;
     box-shadow: 1px 1px 5px 1px silver;
     height: 7vh;
     .el-menu-item{
       background-color: #66b7ff !important;
       color: #ffffff !important;
       font-size: 18px;
       height: 7vh;
       line-height: 7vh;
     }
   .el-menu-item.is-active{
       background-color: #ffffff !important;
       color: #66b7ff !important;
       border-bottom: 4px solid #ffffff !important;
       height: 7vh;
     }
  }
</style>
