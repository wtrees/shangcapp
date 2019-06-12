import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
Vue.config.productionTip = false

import axios from "./axios"
import { Cell } from 'mint-ui';
import { Search } from 'mint-ui';
import { Field } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import {Header,Button} from "mint-ui"
import Mint from 'mint-ui';
import { IndexList, IndexSection } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
import { Radio } from 'mint-ui';
import { Checklist } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import 'amfe-flexible'
Vue.component(Checklist.name, Checklist);
Vue.component(Radio.name, Radio);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Cell.name, Cell);
Vue.component(Field.name, Field);
Vue.component(Search.name, Search);
Vue.use(Mint);
Vue.component(Header.name,Header);
Vue.component("mt-button",Button);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
