<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {}
    },
    methods: {},
    created () {}
  }
</script>

<style lang="less">
  /* 全局样式*/
  .ivu-card-body{
    padding: 0!important;
  }
  .ivu-badge-dot {
    position: absolute;
    transform: translateX(-50%);
    transform-origin: 0 center;
    top: 12px;
    right: -8px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background: #ed4014;
    z-index: 10;
    box-shadow: 0 0 0 1px #fff;
  }
  .ivu-tabs-bar{
    margin-top: 16px!important;
    margin-bottom: 0!important;
  }
  .morDay{
    .ivu-table th{
      background-color: rgba(44, 125, 214, 0.36);
      color: white;
      text-align: center;
    }
    .ivu-table th:nth-child(1) {
      background-color: #2c7dd6;
      color: white;
    }
    .ivu-table-cell{
      text-align: center;
    }
  }
</style>
