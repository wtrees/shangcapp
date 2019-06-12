<template>
<div >
<mt-header title="商品详情" style=" background-color:#e43074;  font-size: 17px;height: 45px;  position: fixed;z-index: 1000000;">
    <mt-button icon="back"  @click="fanhui('contact')" slot="left">返回</mt-button>

  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
 
<div class="pfl">
    <div class="dpfd">
              <div class="z" @click="adddd">加入购物车</div>
              <div class="l">立刻购买</div>
          </div> 
    
</div>
<div class="pppl" >
  <div class="top22">
    <mt-swipe :auto="4000">
  <mt-swipe-item>
    <img class="imgqq" src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/38785/38/2200/327572/5cbfd619E54edc585/d98bce866c615155.jpg" alt="">
    </mt-swipe-item>
  <mt-swipe-item><img class="imgqq" src="https://img14.360buyimg.com/n0/jfs/t1/38785/38/2200/327572/5cbfd619E54edc585/d98bce866c615155.jpg" alt="">
  </mt-swipe-item>
  <mt-swipe-item> <img class="imgqq" src="https://img14.360buyimg.com/n0/jfs/t1/38785/38/2200/327572/5cbfd619E54edc585/d98bce866c615155.jpg" alt="">

  </mt-swipe-item>
</mt-swipe>

</div>
</div>
<div class="zho"  style="text-align: center;">
<div class="dpllq">
    <div class="dpllq2">
<div class="jiagg">  
       {{pice}}.00
       
       
         </div>
       <div> <img class="wll" src="../img/miaos.png" alt=""></div>
    </div> 
    
    <div class="dpllq3">
        <div class="ptwz">距离秒杀结束</div>
        <div class="ptwz2">{{content}}</div>
        
       </div></div>
 <div class="wzsc11">{{tla}}</div>
              <div class="wzsc13">
   {{tll}}
              </div>
<div ><img class="tpj" src="../img/xiangq.png" alt=""></div>
</div>
<mt-popup
  v-model="popupVisible"
 position="bottom">
  <div id="mm"  class="mm">
      <div class="too"></div>
      <div class="mmer">
          <div class="dpf">
              <div class="tpt">
                  <img  class="tpttp" src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t7834/269/1259140056/91288/51d3f8dc/599bacefN63eeb401.jpg!q80.dpg.webp" alt="">
              </div>
              <div class="xqwz13">
                  <div class="redq" >${{pice}}.00
</div>
          <div class="wzlp1">{{p}}
</div>
              </div>
          </div>
          <div>
              <div class="xqwz">颜色</div>
              <div class="xqwzto"><mt-button type="primary" style="font-size: 15px   ; padding: 7px;  ">药石黑</mt-button></div>
          </div>
          <div>
              <img src="../img/baoz.png" alt="">
          </div>
      </div>
     
  </div>
</mt-popup>
<div>
      <img src="../img/sp5.png" alt="" @click="tanchu">
    <img src="../img/sp3.png" alt=""  >
    <img src="../img/sp4.png" alt="">
</div>

</div>
</template>
<script>
import { MessageBox } from 'mint-ui';
  export default {
    data(){
      return {
          popupVisible:"",
          tll:"",
          tla:"",
          pice:"",
          p:"",
           content: '发送验证码',  // 按钮里显示的内容
   totalTime: 3600   
      }
    },
     created() {
     this.cx();
     this.countDown();
  },
    methods:{
       fanhui(a){
   this.$router.push({path: '/h', query:{lidd: a}});

    },
         countDown() {
  this.content = this.totalTime + '秒特价' //这里解决60秒不见了的问题
 let clock = window.setInterval(() => {
  this.totalTime--
  this.content = this.totalTime + '秒特价'
  if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
    window.clearInterval(clock)
    this.content = '重新发送验证码'
    this.totalTime = 60
    }
 },1000)
},
        adddd(){
           MessageBox('提示', '添加成功');

        },
           tanchu(){this.popupVisible="mm"},
        fh(){ $router.back(-1)},
        cx(){
            var udd=this.$route.query.lidd;
            console.log(udd);
            var url = "xqy";
            var obj = {ud:udd};
       this.axios.get(url,{params:obj}).then(result=>{
          var rows = result.data.data;
        console.log(rows)
        this.tll=rows[0].subtitle;
         this.tla=rows[0].title;
         this.pice=rows[0].price;
         this.p=rows[0].promise;
      })
        },
        tan(){ console,log("asd");
            this.popupVisible="mmo"}
    }
  }
</script>
<style scope>

.mint-header{
    position: fixed;
}
.pfl{z-index: 1000000;
margin-top: 167%;
    width: 100%;
    height: 50px;
    background-color: #6666;
    position: fixed
}
.jiagg{padding-left: 10px;
    color: #fff;
    font-size: 30px;
    padding-top: 15px;
}
.wll{padding-left:  px;
    width: 100%;
    height: auto;
}
.ptwz2{
       border:1px solid red;
    font-size: 14px;
color: #df3068;
}
.ptwz{padding-top: 16px;
    color: #333333;
    font-size: 13px
}
.dppl{
 
    border-radius: 10px
}
.dpllq3{
    padding-left: 5px;
    padding-right: 10px;
    width: 35%;
}
.dpllq2{
    display: flex;
    background-color:#e43074;
    width: 65%;
    height: 60px;
}
.dpllq{
    height: 50px;
    display: flex;
}
.asdd{z-index: 100;margin-top: 734px;
    width: 100%;
    display: flex;
    position: fixed;
}
.wzlp1{
    font-size: 15px;
    padding: 10px;
}

.imgqq{
z-index: 1;
    border-radius: 0px;
}
.dpfd{
    width: 100%;
   display: flex

}
.l{
    padding-top: 10px;
    height: 40px;
    text-align: center;
     color: #fff;
    width: 50%;
        font-size: 18px;
    background-color: red;
}
.z{
    padding-top: 10px;
    height: 40px;
    text-align: center;
    color: #fff;
    width: 50%;
    font-size: 18px;
    background-color: #ffa600;
}
.redq{margin-left: 20px;
margin-top: 10px;
    color: red;
    font-size: 24px;
    margin-bottom: 13px;
}
.xqwz3{margin-top: 10px;
    margin-left: 20px;
}
.dpf{
    display: flex;
}
.tpttp{
    width: 100%;
    height: 100%;
}
.tpt{
    margin-left: 15px;
    width: 100px;
    height: 100px;

}
.xqwzto{

    margin-top: 6px;
    margin-left: 10px;
    font-size: 12px
}
.xqwz{
    color: #7777;
    margin-left: 10px;
    font-size: 13px
}
.too{
    width: 360px;
}

.mmer{ 

     background-color: #fff;
}
.mm{
         overflow-x: hidden;
    width: 100%;
    height: 400px;
       background-color: #777;
   
}
.zho{
    background-color: #fff;
}

.top22{
    margin-top: 30px;
    border-radius: 0px;
    margin: 0px;
    width: 100%;
    height: 400px;
    
}
.wzsc11{
    text-align: left;
    padding-top: 10px;
    padding: 10px;
    font-weight:bold;
    width: 100%;
    font-size: 22px
}
.wzsc13{
    border-top: 1px solid #7777;
    padding: 10px;
     text-align: left;
color: #7777;
    width: 100%;
    font-size: 19px
}
</style>


