<template>
  <div >
<mt-header title="个人信息" style=" background-color:#ff737e;  font-size: 17px;height: 45px; ;">
    <mt-button icon="back"  @click="fanhuigr('me')" slot="left">返回</mt-button>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
<mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>
<div class="">
    <button class="hel2"> 确认修改</button>
</div>

  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
     created() {
     this.kle();
  },
    methods:{
       fanhuigr(a){
   this.$router.push({path: '/h', query:{lidd: a}});

    },
     handleClose()
     {
       console.log("asdsa")
        this.$router.push("/yh")
     }
    }
  }
</script>
<style scope>
.mint-header-title{
  font-size: 18px;
}
.mint-header{
  height: 90px;
}
.mint-cell-value{
  padding-top: 13px;
}
.hel2{
    margin-top: 40px;
    font-size: 18px;
    color: white;
     border-radius: 10px;
     padding: 12px;
    background-color:#ff737e  ;
    height: 100%;
    width: 100%;
}
</style>


