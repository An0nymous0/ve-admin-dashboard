<template>
  <div style="background-color:#2d3a4b;position:absolute;top:0;left:0;height: 100%;width: 100%"
       @keyup.enter="handleLogin">
    <vue-particles
      style="position:absolute;top:0;left:0;height: 100%;width: 100%"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"></vue-particles>
    <el-form style="z-index: 9999" :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left"
             label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">系统登录 - 教学管理中心</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin"
                   :loading="logining">登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//  import {requestLogin, login} from '../api/api';
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import md5 from 'crypto-js/md5'

  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      };
    },
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
//        'getUserInfo'
        // ...
      ])
    },
    methods: {
      ...mapActions([
//        'get_userInfo',
//        'update_userInfo',
//        'update_token',
      ]),
      handleLogin(ev) {
//        this.$refs.ruleForm2.validate((valid) => {
//          if (valid) {
//            this.logining = true;
//            var loginParams = {username: this.ruleForm2.account, password: md5(this.ruleForm2.checkPass)};
//            login(loginParams).then(response => {
//              this.logining = false;
//              let {data} = response
//              if (data.status !== 200) {
//                this.$notify({
//                  title: '提示',
//                  message: data.msg,
//                  type: 'info'
//                });
//              } else {
//                this.update_token(data.data.token)
//                this.get_userInfo
//                this.$router.push({path: '/main'});
//              }
//            });
//          } else {
//            console.log('error submit!!');
//            return false;
//          }
//        });
      }
    }
  }

</script>

<style scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    /*margin-bottom: 20px;*/
    /*background-color: #F9FAFC;*/
    margin: 180px auto;
    /*border: 2px solid #8492A6;*/
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login-container.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .login-container.remember {
    margin: 0px 0px 35px 0px;
  }
</style>
