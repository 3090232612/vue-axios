<template>

    <div class="sidebar fl">


      <el-menu default-active="1-4-1" class="el-menu-vertical-demo fl" @open="handleOpen" @close="handleClose" :collapse="!isCollapse"  background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item index="1">
          <!--<template slot="title">-->
          <i class="el-icon-location"></i>
          <span slot="">
            <router-link to="/home">home</router-link>
          </span>
          <!--</template>-->
          <!--<el-menu-item-group>-->
          <!--<span slot="title">分组一</span>-->
          <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
          <!--</el-menu-item-group>-->
          <!--<el-menu-item-group title="分组2">-->
          <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
          <!--</el-menu-item-group>-->
          <!--<el-submenu index="1-4">-->
          <!--<span slot="title">选项4</span>-->
          <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
          <!--</el-submenu>-->
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="">
            <router-link to="/HelloWorld">module</router-link>
          </span>
        </el-menu-item>
        <el-menu-item index="3" >
          <i class="el-icon-document"></i>
          <span slot="">
             <router-link to="/task">task</router-link>
          </span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="">
             <router-link to="/account">account</router-link>
          </span>
        </el-menu-item>
      </el-menu>
    </div>




</template>


<script>
//  import Vue from 'vue'
//  import {menu} from 'element-ui'
//  import {Submenu} from 'element-ui'
//  import {MenuItem} from 'element-ui'
//  import {MenuItemGroup} from 'element-ui'
//  // import 'element-ui/lib/theme-chalk/index.css';
//  Vue.use(menu)
//  Vue.use(Submenu)
//  Vue.use(MenuItem)
//  Vue.use(MenuItemGroup)
import Logo from './logo';
  export default {
    //name:'header',
    props:['isCollapse'],
    data: function () {

      return {
        message: ['首页', '任务列表', '任务申请列表', '创建攻击任务', '配置标准攻击类型', '分配账户', '报表查询']
      }
    },
    components:{
      Logo
    },
    methods: {
      yy(){

      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        console.log(this.message)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
//      computed: {
//        isCollapse () {
//          this.isCollapse=!this.isCollapse
////          if(this.isCollapse == 'true'){
////            return true
////          } else {
////            return false
////          }
//        }
//      }
//      childByVue:function(a){
//         this.isCollapse=a
//      }
    }
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .fl{
    float:left;
  }
  .isrotate{
    transform:rotate(180deg);
    -ms-transform:rotate(180deg); 	/* IE 9 */
    -moz-transform:rotate(180deg); 	/* Firefox */
    -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
    -o-transform:rotate(180deg);
    display: inherit;
  }
  .isZoom{
    font-size:30px;
  }
  .logo img{
    width: 40px;
    vertical-align: bottom;
  }
  .logo{
    background: rgb(84, 92, 100);
    height: 60px;
    line-height: 60px;
  }
  .el-radio-button__inner{
    background: transparent;
    border: none;
    color: #fff;
    border-left: none!important;
  }
</style>
