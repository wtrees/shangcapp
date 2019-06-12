<template>
    <div class="page-tabbar">
      <div class="page-wrap">

      <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="message">
       <titlebar></titlebar> 
        </mt-tab-container-item>   
        <mt-tab-container-item id="me">
                <yh></yh>
        </mt-tab-container-item>   
        <mt-tab-container-item id="contact">
           <sc></sc>
        </mt-tab-container-item>  
         <mt-tab-container-item id="find">
<gwc></gwc>
                     </mt-tab-container-item>  
      </mt-tab-container>

      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="message" @click.native="changeState(0)">
         <tabbaricon
          :selectedImage="require('./img/d1.png')"
          :normalImage="require('./img/d2.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
        主页   
        </mt-tab-item>
        <mt-tab-item id="contact" @click.native="changeState(1)">
         <tabbaricon
         :normalImage="require('./img/d3.png')"
         :selectedImage="require('./img/d4.png')"
         :focused="currentIndex[1].isSelect">
         </tabbaricon>
    商城
        </mt-tab-item>
        <mt-tab-item id="find" @click.native="changeState(2)">
          <tabbaricon
          :normalImage="require('./img/d5.png')"
          :selectedImage="require('./img/d6.png')"
          :focused="currentIndex[2].isSelect">
          </tabbaricon>
         购物车
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon
           :normalImage="require('./img/d7.png')"
           :selectedImage="require('./img/d8.png')"
           :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          我的
        </mt-tab-item>
      </mt-tabbar>
   </div>
   </div>
</template>
<script>
import sc from "./tabbar/shangc.vue"
import TitleBar from "./tabbar/Login.vue"
import TabBarIcon from "./tabbar/TabBarIcon.vue"
import yh from  "./tabbar/yonghu.vue"
import gwc from  "./tabbar/gwc.vue"
export default {
  data(){
    return {
      //面板中显示子组件id
      active:"message",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
    created() {
     this.kle();
  },
  
  methods: {
    kle(){
            var udd=this.$route.query.lidd;
            console.log(udd)
            if(udd!=null){
                this.active=udd;
            }
        
         
      
    },
    mysearch(){console.log("搜索");},
    myadd(){console.log("+")},
    changeState(n){
      for(var i=0;i<this.currentIndex.length;i++){
       if(n==i){
        this.currentIndex[i].isSelect=true;
       }else{
        this.currentIndex[i].isSelect=false;
       }
       
      }

    }
  },
  components:{
    "titlebar":TitleBar,
     "tabbaricon":TabBarIcon,
     "yh":yh,
     "sc":sc,
         "gwc":gwc
  }
}
</script>
<style  scoped>
/*最外层父元素Home.vue*/
.page-tabbar{
  overflow: hidden;/*溢出隐藏*/
}
/*修改 tabbar 默认文字颜色*/
.mint-tabbar>.mint-tab-item{
  color:#999999;
}
/*修改默认tab选中文字样式*/
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#333333;
}

.page-wrap{
  overflow:auto;
  padding-bottom:10px ;
}
</style>


