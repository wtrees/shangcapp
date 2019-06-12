<template>
  <!--登录组件-->
  <div class="a">
    <cube-input
  v-model="value"
  :clearable="clearable"
    :autofocus="autofocus"
  :autocomplete="autocomplete"
  :eye="eye"
></cube-input>
    <div class="imgDiv">
      <img class="tplp" src="../img/tx.jpg" alt="">
    </div>
    <div class="operateDiv">
    <mt-field style="border-bottom:1px solid #777"  placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field  style="border-bottom:1px solid #777"  placeholder="密码"  v-model="upass"></mt-field>
   
    </div>
     <div class="typ">
         <mt-button size="large" class="mybutton"
         @click="login">登录</mt-button>
       </div>

  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  data(){
    return {
       accountPlaceholder:"请输入用户名",
       uname:"",
       upass:"",
          value: '',
      placeholder: '请输入内容',
      type: 'passw-ord',
      readonly: false,
      maxlength: 100,
      disabled: false,
      autofocus: true,
      autocomplete: true,
      eye: {
        open: true,
        reverse: false
      }
    
    }
  },
  methods: {
    login(){
      var n = this.uname;
      var p = this.upass;
      var nreg = /^[a-zA-Z0-9]{3,10}$/;
      var preg = /^[a-zA-Z0-9]{3,8}$/;
      if(!nreg.test(n)){
         this.$toast("用户名格式不正确");
         return;
      }
      if(!preg.test(p)){
         this.$toast("密码格式不正确");
         return;
      }
      var url = "login";
      var obj = {uname:n,upass:p};
      this.axios.get(url,{params:obj}).then(result=>{
        if(result.data.code == 1){
          this.$router.push("/h");
        }else{
          this.$messagebox("消息",
          result.data.msg);
        }
      });
   MessageBox('提示', '登录成功');
    }
    
  },
  
}
</script>
<style scoped>
.mint-cell-wrapper{
border-bottom:1px solid #777
}
.typ{
  margin: 10px;
}
.tplp{
  margin-top: 30px;
  border-radius: 100%;
  width: 100px;
  height: 100px;
}
.a{
    background-color: #fff;
    height: 640px;
}
    .tipslogin {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 52px;
      background: rgb(238, 238, 238);
      padding-left: 20px;
      padding-right: 20px;
    }
    /* 半闭样式 */
    .closeSpan {
      color: rgb(153, 153, 153)
    }
    /* 图片 logo 根样式 */
    .imgDiv {
      display: flex;
      justify-content: center;
    }
   
    /* 图片样式 */
    .logo{
      width: 80px;
      height: 80px;
    }
   /* 输入框底边框样式 */
    .mint-cell-wrapper  {
      border-bottom: 1px solid #ff5000;
    }

    /* 修改按钮按钮下的默认颜色 */
    .mint-button::after {
      background-color: transparent;
    }
    /* 操作区域的样式*/
    .operateDiv {
        margin-top: 20px;
        padding-top: 30px;
        background-color:#fff;
      padding-left: 20px;
      padding-right: 20px;
    }
    /* 输入框边距 */
    .myinput {
      margin-top: 30px;
    }
    /* 获取短信验证码字体颜色 */
    .getCode {
      color:#ff5000;
      font-size: 17px;
      border-left:1px solid #b5b5b5;
      padding-left: 7px;
    }
    /* 免费注册根样式 */
    .registerDiv {
 
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* 免费注册字体样式*/
    .registerDiv span {
      color: #555;
    }
    /* 登录短信验证按钮边距 */
    .mybutton {
      margin-top: 20px;
    }
    /* 修改默认 butoon 的样式 达到和淘宝登录一样 */
    .mint-button--default {  
      background: -webkit-linear-gradient(left,#26a2ff,#0a84e2) no-repeat;
      border-radius: 25px;
      color: #fff;
      height: 48px;
    }
    /* 同上 */
    .mint-button--primary {
      border-radius: 25px;
      height: 48px;
      background-color: transparent;
      border: 1px solid #ff5000;
      color: #ff5000
    }
    /* 修改默认弹框的样式，达到基本和淘宝的效果一样 */
    .mint-msgbox{
      border-radius: 8px;
      width: 70%
    }
    /* 弹出框内容样式 */
    .mint-msgbox-content {
      min-height: 50px;
      font-size: 18px;
    }
    /* 弹出内容居中 */
    .mint-msgbox-message{
      line-height: 50px;
    }
    /* 弹出框确定按钮样式 */
    .mint-msgbox-btns{
      height: 60px;
    }
    /* 弹出框确定按钮字体 */
    .mint-msgbox-confirm {
      color: #f40;
    }
    .imgDiv{
 
    }
</style>


