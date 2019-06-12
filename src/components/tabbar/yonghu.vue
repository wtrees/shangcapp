<template>
 <div class="bjkk">
     
<div class="dp">
    <div class="txr">
        <img  class="tx1" src="../img/tx.jpg" alt="" >
    </div>
    <div class="yh1">
        <p class="wzz9" >您好！       
            {{list}}</p>
    </div>
</div>
 
<div class="zbb2">
     <router-link to="/gr" slot="left">
<div class="zbo1">
<div class="tp2"><img  src="../img/y1.png" alt=""></div>
<div class="wz1" >个人信息</div>
</div>
  </router-link>
<div class="zbo1">
<div class="tp2"><img  src="../img/y2 .png" alt=""></div>
<div class="wz1" >收货地址</div>
</div>
<div class="zbo1">
<div class="tp2"><img  src="../img/yy3 .png" alt=""></div>
<div class="wz1" >会员卡</div>
</div>
<div class="zbo1">
<div class="tp2"><img  src="../img/yy4.png" alt=""></div>
<div class="wz1" >优惠卷</div>
</div>
<div class="zbo1">
<div class="tp2"><img  src="../img/y1.png" alt=""></div>
<div class="wz1" >我的拼团</div>
</div>
<div class="zbo1">
<div class="tp2"><img  src="../img/y1.png" alt=""></div>
<div class="wz1" >我的拼团</div>
</div>
<div class="zbo1">
<div class="tp2"><img  src="../img/y1.png" alt=""></div>
<div class="wz1" >我的拼团</div>
</div>
</div>
<div class="">
    <mt-button class="hel" style=" background-color: #ff737e;   margin-left: 5px; margin-right: 5px;color: white;" @click="dll" > {{denglu}}</mt-button>

</div>
 </div>
</template>
<script>
  export default {
    data(){
      return {
           list:"游客",
           denglu:"请登录", 
           dll1:"dll1"  
      }
      
    },
      created() {
     this.loadMore();
     this.dll
  },
  methods: {
     dll(){ 
       if(this.list!="游客")
       {
         var url= "xx"
                console.log("注销成功");
        this.list="游客";
        this.denglu="请登录";
         this.axios.get(url).then(result=>{
            console.log("asdaa");
         })

     }
     else{  this.$router.push({ path:'/lg'  })   }
       
       },
    loadMore(){
        var url = "yhh";
      this.axios.get(url).then(result=>{
        console.log(result)
        if(result!="sb"){
          var rows = result.data.data;
        this.list = rows[0].uname;
        console.log(rows)
           this.denglu="退出登录"
        } 
      })

    }
  },
  }
</script>
<style scope>
.bjkk{
  padding-bottom: 40px;
  background-color: rgba(245, 194, 194, 0.4);
}
.txr{
  width: 150px;
}
.wzz9{
    color: white;
    font-size: 20px
}
.hel{
    margin-top: 20px;
    font-size: 18px;
    color: white;
     border-radius: 10px;
     padding: 12px;
    background-color:#ff737e;
    height: 100%;
    width: 100%;
}
.zb2{
    border-radius: 10px
}
.wz1
{margin-left: 10px;
    margin-top: 4px;
    font-size: 17px;
    color: black

}
.tp2{
    height: 25px;
    width: 25px;
    
}
.zbb2{
  margin-left: 5px;
  margin-right: 5px;
    background-color:white;
    border-radius:10px;

}
.zbo1{
    display: flex;
    padding: 14px;
    background-color: white;
     border-bottom:1px solid #3636;
 
}
.yh1{
    margin-left: 20px;
    margin-top: 70px;
}
.tx1{
    margin-top: 20px;
    margin-left: 40px;
    width: 70%;;
    height: 70%;
    border: 1px solid red;
   border-radius:100%;
}
.dp{
     border-radius:4px;
    margin: 10px;
    display: flex;
    height: 140px;
    background-image: url(../img/dr.png);
    background-size: 100%;

}
</style>


