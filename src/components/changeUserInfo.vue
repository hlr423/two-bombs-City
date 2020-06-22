<template>
    <div>
      <Drawer :closable="false" width="640" v-model="value">
        <p :style="pStyle">User Profile</p>
        <p :style="pStyle">Personal</p>
        <div class="demo-drawer-profile">
          <Row>
            <Col span="12">
              Full Name: Aresn
            </Col>
            <Col span="12">
              Account: aresn@aresn.com
            </Col>
          </Row>
          <Row>
            <Col span="12">
              City: BeiJing
            </Col>
            <Col span="12">
              Country: China
            </Col>
          </Row>
          <Row>
            <Col span="12">
              Birthday: May 14, 1991
            </Col>
            <Col span="12">
              Website: <a href="https://dev.iviewui.com" target="_blank">https://dev.iviewui.com</a>
            </Col>
          </Row>
          Message: Hello, Developer
        </div>
        <Divider />
        <p :style="pStyle">Company</p>
        <div class="demo-drawer-profile">
          <Row>
            <Col span="12">
              Position: Programmer
            </Col>
            <Col span="12">
              Responsibilities:Coding
            </Col>
          </Row>
          <Row>
            <Col span="12">
              Department: Map visualization
            </Col>
          </Row>
          Skills:C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.
        </div>
        <Divider />
        <p :style="pStyle">Contacts</p>
        <div class="demo-drawer-profile">
          <Row>
            <Col span="12">
              Email: admin@aresn.com
            </Col>
            <Col span="12">
              Phone Number: +86 18888888888
            </Col>
          </Row>
          <Row>
            <Col span="12">
              GitHub: <a href="https://github.com/iview/iview" target="_blank">https://github.com/iview/iview</a>
            </Col>
          </Row>
        </div>
      </Drawer>
    </div>
</template>

<script>
    export default {
        name: "changeUserInfo",
      data () {
        return {
          value: false,
          pStyle: {
            fontSize: '16px',
            color: 'rgba(0,0,0,0.85)',
            lineHeight: '24px',
            display: 'block',
            marginBottom: '16px'
          }
        }
      },
      methods:{
        changeUserInfoShow(){
          this.value=true;
        }
      }
    }
</script>

<style scoped>
  .demo-drawer-profile{
    font-size: 14px;
  }
  .demo-drawer-profile .ivu-col{
    margin-bottom: 12px;
  }
</style>
