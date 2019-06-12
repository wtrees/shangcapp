<template>
<div class="bjk">
  <img src="../img/gwc.png" alt="">
   <div class="cart">
    
     <div class="cart-item" v-for="(item,index) of list" :key="index">
       <div class="leftImgTxt"> 
         <input type="checkbox" v-model="item.cb" />
         <img :src="require(`../img/${item.pic}`)" class="img"/>
         <div class="rightImg">
           <div class="wz8" >{{item.title}}</div>
                    <div class="wz9" >{{item.details}}</div>
           <div class="dpf">
             <div class="dpf3">
               <div class="anz" :data-jf="item.pid" @click="jianfan" >一</div>
               <div class="anzj">{{item.seq_new_arrival}}</div>
               <div class="anzy"  :data-jfa="item.pid"  @click="jiafa">＋</div>

             </div>
           <div class="jg8">价格:{{item.price}}</div>
           </div>
           <span></span>
         </div>
       </div> 
       <mt-button class="delBtn" @click="delItem" :data-id="item.pid">删除</mt-button>
     </div>
     <div class="delAll">
            <div class="selectAll">
      全选
      <input   style="" id="myCheck" type="checkbox" @change="selectAll"/>
       <mt-button @click="delAll" style=" background-color: #ff737e; color: white;   margin-right: 10px;">清空购物车</mt-button>
       <mt-button @click="delSelected" style=" background-color: #ff737e;  color: white">删除选中商品</mt-button>
     </div>
     </div>
     <div class="dpf1">
       <div class="dlp">合计$ {{summ}}</div>
       <div class="dlp2">
         <mt-button class="btno"  style=" background-color: #ff737e;  color: white" @click="sum">购买</mt-button>
       </div>
     </div>
   </div>

       </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  data(){
    return {
      list:[],
           listt:[],
      summ:"",
    }
  },
  created() {
    this.loadMore();
  },
  methods: {
    jianfan(a){
      var aa=a.currentTarget.nextElementSibling.innerHTML
      var aa1=parseInt(aa);
      aa1-=1;
       var baoc=0;
      if(aa1==0){
        this.$messagebox("","商品数量不能为零");
        return;
      }
        var url = "jf";
       var b= a.target.dataset.jf;
      var obj ={ids:aa1,pd:b} ;
      this.axios.get(url,{params:obj}).then(result=>{
        console.log(result);
      })
        let str = 0;
     var urll = "cart";
       this.axios.get(urll).then(result=>{
       var rows = result.data.data;
       for(var item of rows){
         item.cb = false;
       }
    
       this.list = rows;
       })
      for(var item of this.list){
          console.log(item.seq_new_arrival)
         str+=(item.price*item.seq_new_arrival);
            console.log('mc'+item.seq_new_arrival)         
      }
      this.summ=str;
    
    },
    jiafa(a){
      var aa=a.currentTarget.previousElementSibling.innerHTML;
      var aa1=parseInt(aa);
            aa1+=1;
 
      if(aa1==10){
        this.$messagebox("","商品数量不能为大于十");
        return;
      }
    var url = "jf";
       var b= a.target.dataset.jfa;
      var obj ={ids:aa1,pd:b} ;
      this.axios.get(url,{params:obj}).then(result=>{
        console.log(result);
      })
             let str = 0;
     var urll = "cart";
       this.axios.get(urll).then(result=>{
       var rows = result.data.data;
       for(var item of rows){
         item.cb = false;
       }
  
       this.list = rows;
       })
      for(var item of this.list){
          console.log(item.seq_new_arrival)
         str+=(item.price*item.seq_new_arrival);
            console.log('mc'+item.seq_new_arrival)         
      }
      this.summ=str;

    },
    delSelected(){
      var str = "";
      for(var item of this.list){
       if(item.cb){
        str += item.pid+","
       }
       console.log(str)
      }
      if(str.length==0){
        this.$messagebox("","请选中要删除的商品");
        return;
      }
      str = str.substring(0,str.length-1);
      //6:发送ajax delAll
      var url = "delAll";
      var obj = {ids:str}
      this.axios.get(url,{params:obj}).then(result=>{
          this.loadMore();
      });


    },
    sum(){
      MessageBox.confirm('确定购买?').then(action => {
        showCancelButton=false;
  
});

    },



    delAll(){
      var str = "";
      for(var item of this.list){
         str += item.pid+","
      }
      console.log(str)
      if(str.length==0){
        this.$messagebox("","请选中要删除数据");
        return;
      }

      str = str.substring(0,str.length-1);
      //5:发送ajax请求获取数据
      //6:创建url delAll 
      var url = "delAll";
      //7:创建obj
      var obj = {ids:str};
      //8:发送ajax请求
      this.axios.get(url,{params:obj}).then(result=>{
        console.log(result);
      })
      //9:刷新

    },
    selectAll(e){
      //1:获取当前全选按钮状态
      var rs = e.target.checked;
      //2:获取购物车数组列表
      //3:创建循环
      for(var item of this.list){
       //4:将当前商品cb状态修改全选状态
       item.cb = rs;
      }
    },
    //删除指定购物车商品 15:00
    delItem(e){
     //0:确认提示消息
     this.$messagebox({
       title:"消息",
       message:"是否删除指定数据",
       showConfirmButton:true,
       showCancelButton:true
     }).then(result=>{
        //如果用户选中取消按钮,停止执行
        if("cancel"==result){
          return;
        }else{
     //1:获取当前商品id
     var id = e.target.dataset.id;
     //2:发送ajax删除商品
     console.log(id)
     var url = "del";
     var obj = {id:id};
     this.axios.get(url,{params:obj}).then(result=>{
         this.loadMore();
      })
      }
     })
    },
     loadMore(){
       var str=0;
       var url = "cart";
       this.axios.get(url).then(result=>{
       var rows = result.data.data;
       for(var item of rows){
          str+=(item.price*item.seq_new_arrival);
            this.summ=str;
         item.cb = false;
       }
       //3:将修改后数据赋值list
       this.list = rows;
           
       })
       //3:获取服务器购物车数据
       //4:保存
     }
  },
}
</script>
<style scope>
.bjk{
  padding-bottom: 40px;
  background-color: rgba(245, 194, 194, 0.4);
}
.mint-header{
  display: flex;
     position: fixed;
width: 100%;
}
.wz9{margin-top: 8px;margin-bottom: 8px;
  font-size: 8px;
  color: #7777;
}
.dpf1{
  display: flex;;
border-top: 1px solid#7777;
padding-top: 6px;
}
.btno{
  color: #fff;
  background-color:   #ff737e;
  margin: 0px;
  width: 100%;
  height: 40px;
}
.dlp{padding-top: 10px;
  font-size: 18px;
padding-left: 10px;
  width: 40%;
  color: #ff737e;
}
.dlp2{
  width: 60%;
}
.coll{
  position: absolute;
  height: 140px;
  z-index: 0;
  background-color: red;
}
#myCheck{margin-top: 15px;
  margin-right: 30px;

}
.a{
  margin-right: 10px;
}


.mint-button-text{
  width: 30px;
   font-size: 14px
}
.delBtn{
  font-size: 10px
}
.dpf3{margin-top: 8px;
  display: flex;;
  height: 20px;
  width: 30px;;

}
.anzy{border:1px solid#777;
border-top-right-radius: 6px;
border-bottom-right-radius: 6px;
font-size: 18px;

padding-left: px;
padding-right: 5px;
}
.anzj{border:1px solid#777;
padding-left: 6px;
padding-right: 6px;
padding-top: 3px;
font-size: 12px;

}
.anz{
  padding-top: 3px;
  border:1px solid#777;
border-top-left-radius: 6px;
border-bottom-left-radius: 6px;
font-size: 10px;

padding-left: 6px;
padding-right: 6px;
}
.jg8{margin-top: 10px;
  margin-left: 70px;
  display: flex;
  font-size: 13px;
  color:#ff737e;
 

}
.wz8{text-align: left;
  font-size: 16px
}
.selectAll{
  font-size: 14px;
  margin:15px;
}
/*最外层商品容器*/
.cart-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-top:5px;
  padding:5px;
}
/*修改左侧图片与文字 11:33*/
.leftImgTxt{
  display: flex;
}
/*左侧图片*/
.img{margin-left: 10px;
  width:2rem;
  height:2rem;
}

.rightImg{
  margin-left:25px;
}
.cart{

  margin: 10px;

  padding: 3px;
  border-radius: 10px;
  background-color: #fff;
    margin-top: 10px;
}
.delBtn{
  font-size: 10px
}
</style>


