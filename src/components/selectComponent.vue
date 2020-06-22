<template>
  <div style="width: 500px">
    <Input v-model="value"  style="width: 450px" placeholder="搜索系統名称">
      <Select v-model="defaultValueParams" slot="prepend"  class="selectIcon" style="width: 120px;background-color:#3982ed;color: white" >
        <Option  v-for="item in searchData" :value="item.id" :key="item.key">{{item.value}}</Option>
      </Select>
      <Button slot="append" icon="ios-search" @click="searchDataValue"  style="background-color:#3982ed;color: white" ></Button>
    </Input>
  </div>
</template>

<script>
    export default {
        name: "selectComponent",
      data(){
        return{
          defaultValueParams:'',
          value:'',
        }
      },
      props:['searchData','defaultValue'],
      methods:{
        searchDataValue(){
          let params=[];
          params.push(this.defaultValueParams);
          params.push(this.value);
          this.$emit('searchChanged',params)
        }
      },
      watch:{
        defaultValue:function (v) {
          this.defaultValueParams=v
        }
      }
    }
</script>

<style scoped>

</style>
