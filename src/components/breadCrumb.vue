<!--<template>-->
<!--    <div>-->
<!--      <Breadcrumb :style="{margin: '16px 0'}" >-->
<!--        <BreadcrumbItem v-for="item in bread">{{item.name}}</BreadcrumbItem>-->
<!--      </Breadcrumb>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "breadCrumb",-->
<!--      data(){-->
<!--          return{-->
<!--            data1:[-->
<!--              {name:'第一个菜单',-->
<!--              key:'1',-->
<!--              children:[-->
<!--                {-->
<!--                  key:'11',-->
<!--                  name : '人员管理',-->
<!--                  module: '组织机构',-->
<!--                  url: 'https://cn.vuejs.org/v2/guide/'-->
<!--                },-->
<!--                {-->
<!--                  key:'12',-->
<!--                  name : '权限管理',-->
<!--                  module: '组织机构',-->
<!--                  url: 'http://stable.admin.migu.cn/ms-admin/manage/index'-->
<!--                }-->
<!--              ]},],-->
<!--            menuList:[-->
<!--              {name:'第一个菜单',-->
<!--                key:'1',-->
<!--                children:[-->
<!--                  {-->
<!--                    key:'11',-->
<!--                    name : '人员管理',-->
<!--                    url: 'https://cn.vuejs.org/v2/guide/'-->
<!--                  },-->
<!--                  {-->
<!--                    key:'12',-->
<!--                    name : '权限管理',-->
<!--                    url: 'http://stable.admin.migu.cn/ms-admin/manage/index'-->
<!--                  },-->
<!--                  {-->
<!--                    key:'13',-->
<!--                    name : '文档配置',-->
<!--                    url: 'https://www.jianshu.com/p/'-->
<!--                  }-->
<!--                ]},-->
<!--              {name:'第二个菜单',-->
<!--                key:'2',-->
<!--                children:[-->
<!--                  {-->
<!--                    key:'21',-->
<!--                    name : '人员管理',-->
<!--                    url: '/person2'-->
<!--                  },-->
<!--                  {-->
<!--                    key:'22',-->
<!--                    name : '权限管理',-->
<!--                    url: '/authority2'-->
<!--                  },-->
<!--                  {-->
<!--                    key:'23',-->
<!--                    name : '文档配置',-->
<!--                    url: '/doc2'-->
<!--                  }-->
<!--                ]},-->
<!--            ],-->
<!--            bread:[]-->
<!--          }-->
<!--      },-->
<!--      methods:{-->
<!--        nav(key){-->
<!--          this.bread=[];-->
<!--         this.navList(key,this.menuList,'1')-->
<!--        },-->
<!--        navList(key,data,num){-->
<!--         data.map((value,index)=>{-->
<!--            if(value.key.substr(0,num)==key.substr(0,num)){-->
<!--              this.bread.push({name:value.name,key:value.key})-->
<!--              if(value.children){-->
<!--                this.navList(key,value.children,++num)-->
<!--              }-->
<!--            }-->

<!--          })-->
<!--          console.log(this.bread);-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
