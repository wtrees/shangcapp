<template>
  <div class="mt">
    





  <mt-search 
  cancel-text="取消"
  placeholder="请输入宝贝名字"
  @keyup.enter.native="search"
  class="font-size-6"
  style="width:100%;height:60px; "
  >
  
  </mt-search>
  <mt-navbar>
  <mt-tab-item id="1">综合▲</mt-tab-item>
  <mt-tab-item id="2">销量</mt-tab-item>
  <mt-tab-item id="3">视频</mt-tab-item>
    <mt-tab-item id="4">排序</mt-tab-item>
  <mt-tab-item id="5">筛选</mt-tab-item>
</mt-navbar>


      <div class="sp"  v-for="(item,index) of list" :key="index" @click="asd(item.lid)" >
          <div class="tp" >
              <img class="tplll" :src="require(`../img/${item.details}`)" alt="">
          </div>
          <div class="tp2">
              <div class="wzsc1">{{item.title}}</div>
              <div class="wzsc3">
                  {{item.price}}.00
                  <img  style="  margin-left: 6px;" src="../img/jg3.png" alt="">
              </div>
              <div class="dbp">
                   <div class="zyl">自营</div>
                <div class="wzsc4">121万条评价 好评率98%</div>
           </div>
                 <div class="wzsc2">京东直营viov手机商城></div>
              </div>
          </div>
          
   

<div class="bt1">
     <mt-button size="large" style=" background-color: #ff737e;" type="primary" @click="loadMore">加载更多</mt-button>

</div>
   

  </div>
</template>
<script>
import { Search } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
    props:{

  
  },
  data(){
    return {
       list2:[], 
  

       list:[],  
       pno:0,    
       pageSize:4
    }
  },
    components: {
  'mt-search': Search
},
  created() {
     this.loadMore();
  },
  
  methods: {
    asd(lid){
   this.$router.push({path: '/spxq', query:{lidd: lid}});
    },
    loadMore(){
      this.pno++;
      var url = "product";
      var obj = {pno:this.pno,pageSize:this.pageSize};
      this.axios.get(url,{params:obj}).then(result=>{
        var rows = this.list.concat(result.data.data);
        this.list = rows;
Indicator.open({
  text: '加载中...',
  spinnerType: 'double-bounce'
});
setTimeout(() => {
Indicator.close();
}, 1000);

      
      })
    }
  },

}
</script>
<style scope>
.dpf22{
  height: 30px;
}
.mintui mintui-search{
  margin-top: 5px;
  
}
.mint-searchbar{
    background-color: #ff737e;
}
.mint-searchbar{
  margin-top: 5px;
  background-color: #ff737e;
  border-radius: 20px;
  padding: 0px;
  height: 50px;
  margin-left: 5px;
  margin-right: 5px;

}
.mint-searchbar-inner{
    width: 50px;

}
.mint-searchbar-cancel{
 font-size: 14px; 
}
.mint-searchbar-core{
font-size: 15px;
    padding: 0px;
    height: 20px;

    color: red;
      background-color: rgba(0, 0, 0, 0);
}
.bt1{

    margin: 5px;
        margin-top: 4px;
}
.tplll{
  width: 100%;
  height: auto;
}
.wzsc4{
        width: 250px;
      margin-left: 6px;
    color: #7777;
    font-size: 14px;
}
.dbp{
    width: 250px;
        margin-top: 5px;
    display: flex;
}
.zyl{
    margin-left: 6px;
    border-radius: 3px;
    width: 30px;
    height: 16px;
    color: #fff;
    background-color: red;
    font-size: 12px
    
}
.wzsc3{display: flex;
padding: 1px;
    width: 120px;
    margin-top: 5px;
    color: red;
    font-size: 19px;
       margin-left: 5px;
}
.wzsc1{
        width: 250px;
    margin-top: 10px;
    margin-left: 5px;
    font-size: 17px;
}
.wzsc2{
  padding-top: 6px;
        width: 250px;
margin-left: 10px;
    font-size: 14px;
   padding-bottom: 8px;
    margin-right: 3px;
      color: #7777;
      border-bottom:1px solid#7777 ;
}
img{
    width: 100%;
    height: 100%;
}
.tp{
    width: 110px;
    height: 120px;
}
.tp2{
    width: 250px;
  
 
}
.sp{
    height: 120px;
    background-color: #fff;
    display: flex
}

</style>


