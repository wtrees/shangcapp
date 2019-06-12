<!--src/components/tabbar/Login.vue-->
<template>
<div>
<div class="top">
  <div class="top2">
    <mt-swipe :auto="4000">
  <mt-swipe-item>
    <img class="imgq" src="https://img20.360buyimg.com/da/jfs/t1/75839/13/894/89013/5cf1394dE28207ee4/7cf4456570d6bddb.jpg!q90.webp" alt="">
    </mt-swipe-item>
  <mt-swipe-item><img class="imgq" src="https://img20.360buyimg.com/da/jfs/t1/73726/31/1026/159312/5cf5434eEb63f0214/559bd405e6ee5ff1.jpg!q90.webp" alt="">
  </mt-swipe-item>
  <mt-swipe-item> <img class="imgq" src="https://img13.360buyimg.com/da/jfs/t1/44144/30/5093/186642/5ce79897Eaa1859c0/8e23a1e3c673090d.jpg!q90.webp" alt="">

  </mt-swipe-item>
</mt-swipe>
</div>
</div>
<div class="zhongbu"  style="text-align: center;">
  <div  >
    <div class="zb1"><img class="zb2" src="../img/nav_0.png" alt=""></div>
  <a class="apl" href="">分类</a>
  </div>
    <div  >
    <div class="zb1"><img class="zb2" src="../img/nav_2.png" alt=""></div>
  <a class="apl" href="">特卖</a>
  </div>
    <div  >
    <div class="zb1"><img class="zb2" src="../img/nav_3.png" alt=""></div>
  <a class="apl" href="">热销</a>
  </div>
    <div  >
    <div class="zb1"><img class="zb2" src="../img/nav_4.png" alt=""></div>
  <a class="apl" href="">国际</a>
  </div>
</div>
 
  <div class="jx1">
    <div class="zbwz7"> 精选优品</div>
    <div class="wzjx1">更多></div>
  </div>
  <div class="jx1">
    <div class="lf"> 
        <img class="dib3" src="../img/jx1.png" alt="">
        </div>
   <div>   <img class="dib3" src="../img/jx2.png" alt=""></div>
    
  </div>
  <div class="jx1">
    <div>
      <p class="wz2">特惠</p>  <p class="wz3">9.9元起</p>
     
    </div>
        <div>
      <p class="wz2">大牌</p>  <p class="wz3">9.9元起</p>
    
    </div>
        <div>
      <p class="wz2">国际品牌</p>  <p class="wz3">9.9元起</p>
  
    </div>
         <div>
      <p class="wz2">限时折扣</p>  <p class="wz3">9.9元起</p>
            
    </div>
  
  </div>
   <div class="dib2"  style="  margin-top: 10px;">
    <img class="dib3" src="../img/dht.png" alt="">
    <div class="tb">
    
    </div>
  </div>
    <div class="jx1">
    <div class="zbwz7"> 浏览商品</div>
    <div class="wzjx1">更多></div>
  </div>
    <div class="jx1">
      <div>
      <div class="ck1">
        <img  class="tp5" src="../img/sp9.png" alt="">
      </div>
          <div>
              <a class="wz4">黑天河蛋糕进口</a> 
             <p class="wz5">法国进口原料原生奶</p>
             <div class="js">
             <p class="jgl">123.0元</p>
            <del class="jgl2">243.00元</del>
            </div>
             </div>
      </div>
            <div>
      <div class="ck1" style="ml">
        <img  class="tp5" src="../img/sp9.png" alt="">
      </div>
          <div>
              <a class="wz4">黑天河蛋糕进口</a> 
             <p class="wz5">法国进口原料，原生奶</p>
             <div class="js">
             <p class="jgl">123.0元</p>
            <del class="jgl2">243.00元</del>
            </div>
             </div>
      </div>
        
    
  
  </div>

</div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    methods:{
      btnLogin(){
  
        console.log(1);
   
      }
    }
  }
</script>
<style>
.zbwz7{
    color: #666;
  font-size: 16px;
}
.js{
  display: flex;
}
.jgl2{
  margin-left: 13px;
  font-size: 14px;
  color: #666;

}

.jgl{
  color: red;
  font-size: 19px;
}
.wz5{ padding: 5px;
margin-bottom: 2px;
  font-size: 16px;
  color:silver
}
.wz4{ padding: 5px;
margin-bottom: 5px;
  font-size: 17px;
  color: #666666
}
.ck1{
  margin-right: 14px;
  width: 160px;
  height: 100px;
}
.tp5{
  width: 100%;
  height: 100%;

}
.wz3{
  font-size: 14px;
  align-content: center;
  text-align: center;
  color: silver
}
.wz2{
  font-size: 15px;
  align-content: center;
  text-align: center;
  color: #666666
}
.lf{
  margin-right: 14px;
}
.wzjx1{
  font-size: 14px;
  color: #7777
}
.jx1{

align-content: center;
  padding: 12px;
  padding-bottom: 4px;
  background-color: #fff;
  justify-content: space-between;
  display: flex

}
.tb{
  position: absolute
  }

img{
  width: 100%;
  height: 100%;
}
.dib2{
  width: auto;

}
.dib2{
  width: 100%;
  height: 80%;

}
.apl{
  margin: 0px;
  color: #6e6e6e;
  font-size: 14px;
  padding-bottom: 20px;
}
.dibu{
  display: flex;
}
.zb1{

  width: 100%;
  height: 100%;
  width: 58px;
  height: 58px;
  margin: 15px;
  margin-bottom: 4px;
}
.zb2{
  width: 100%;
  height: 100%;
 
}
.zhongbu{
  margin: 8px;
    border-radius:10px;
  background-color: white;
  
  text-align: center;
  display: flex;
}
.top{
  border: 1px solid white; 
    border-radius:10px;
    margin: 10px;
  padding-left: 20px;
  padding-right: 20px;
  height: 195px;
background-image: url(../img/bg.jpg);

}
.imgq{
    border-radius:10px;
    width: 100%;
    height: 100%;
}
.top2{
  border-radius:10px;
 position: absolute;
 width: 300px;
margin-top: 23px;
height: 150px;
 background-color:red

}
.lbP{
  width: auto;
  height: 100px;
}
</style>

