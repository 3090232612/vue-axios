import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld';
import home from '@/page/home';
import task from '@/page/task';
import account from '@/page/account';
import index from '@/components/index';

Vue.use(Router);

export default new Router({
  mode:'history',//去掉地址栏中的#号
  routes: [

    {
      path: '/',
      //name: 'h',
      component: home
    },
    {
      path: '/home',
      //name: 'h',
      component: home
    },
    {
      path: '/task',
      //name: 'h',
      component: task
    },
    {
      path: '/account',
      //name: 'h',
      component: account
    },
    {
      path: '/HelloWorld',
      //name: 'h',
      component: HelloWorld
    }

  ]
})
