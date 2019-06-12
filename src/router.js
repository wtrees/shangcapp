import Vue from 'vue'
import Router from 'vue-router'
import index from "./components/index.vue"
import List from "./components/List.vue"
import Login from "./components/tabbar/Login.vue"
import yh from "./components/tabbar/yonghu.vue"
import lg from "./components/tabbar/lg.vue"
import sc from "./components/tabbar/shangc.vue"
import gr from "./components/tabbar/gr.vue"
import gwc from "./components/tabbar/gwc.vue"
import spxq from "./components/tabbar/spxq.vue"
import djs from "./components/tabbar/djs.vue"
import fq from "./components/tabbar/fq.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Login',component:Login},
    {path:'/h',component:index},
    {path:'/List',component:List},
    {path:'/yh',component:yh},
    {path:'/lg',component:lg},
    {path:'/sc',component:sc},
    {path:'/gr',component:gr},
    {path:'/gwc',component:gwc},
    {path:'/spxq',component:spxq},
    {path:'/fq',component:fq},
    {path:'/djs',component:djs},
  ]
})
