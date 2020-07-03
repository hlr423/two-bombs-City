<template>
  <div style="width: 50%;">
    <Form :model="countData" label-position="right" :label-width="100" >
      <FormItem label="团体名称">
        <Input v-model="countData.teamName"></Input>
      </FormItem>
      <FormItem label="备注">
        <Input v-model="countData.remarks"></Input>
      </FormItem>
      <FormItem label="">
        <Button type="primary" long :disabled="flag" @click="startStatistics" >开始统计</Button>
      </FormItem>
      <FormItem label="">
        <Button type="primary" long :disabled="!flag" @click="endStatistics" >结束统计</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
    export default {
        name: "PersonnelCount",
      data () {
        return {
          flag:false,
          countData: {
            teamName: '',
            remarks: '',
          },
          data:{},
        }
      },
      methods:{
        startStatistics(){
          this.CountData('');
          this.flag=true;
        } ,
        endStatistics(){
          this.CountData(this.data.id)
          this.flag=false;
        },
        CountData(id){
          let v=this;
          // let params=new FormData()
          // params.append('remark',v.countData.remarks);
          // params.append('teamName',v.countData.teamName);
          // params.append('id',id?id:'');
          let paramData={
            remark:v.countData.remarks,
            teamName:v.countData.teamName,
            id:id?id:''
          };
          v.$http.post('/api/user/num',{params:paramData})
            .then((res)=> {
              console.log(res)
              if(id){
                if (res.body.code== '200') {
                  v.data=res.body.data;
                } else {
                  v.flag=false;
                  v.$Message.error(res.body.info,3);
                }
              }else {
                if (res.body.code== '200') {
                  v.$Message.success('结束统计',2);
                } else {
                  v.flag=false;
                  v.$Message.error(res.body.info,1);
                }
              }
              v.spinShow=false;
            })
            .catch((err)=> {
              v.flag=false;
              v.$Message.error("无法连接到设备！",2);
              v.spinShow=false;
            });
        },
      }
    }
</script>

<style scoped>

</style>
