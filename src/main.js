// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './index'
import {menu} from 'element-ui'
import {Submenu} from 'element-ui'
import {MenuItem} from 'element-ui'
import {MenuItemGroup} from 'element-ui'
import {row} from 'element-ui'
import {col} from 'element-ui'
import {Radio} from 'element-ui'
import {RadioGroup} from 'element-ui'
import {RadioButton} from 'element-ui'
import {Table} from 'element-ui'
import {TableColumn} from 'element-ui'
import './assets/icon/iconfont.css'
import './assets/reset.css'
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.use(menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(row);
Vue.use(col);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Table);
Vue.use(TableColumn);

// Vue.use(Select)
Vue.config.productionTip = false;

/* eslint-disable no-new */
let app=new Vue({
  el: '#app',
  router,
  template: '<App-s/>',
  components: { 'App-s':App }

});

