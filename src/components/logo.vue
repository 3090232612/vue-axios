<template>
  <div class="logo" @click="childClick">
    <!--<img src="../assets/yunshou.png" alt="">-->
    <el-radio-group v-model="isCollapse" style="" background-color="#545c64">
      <el-radio-button :label="!isCollapse" ><i class="iconfont icon-shouqizhankai" :class="{isrotate:!isCollapse}"></i></el-radio-button>
      <!--<el-radio-button :label="true"><i class="iconfont icon-shouqizhankai"></i></el-radio-button>-->
    </el-radio-group>
    <!--<Headers :isCollapse="isCollapse"></Headers>-->
  </div>
</template>
<script>
//  import Headers from './head';
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
  export default {
    //name:'header',
    data: function () {
      return {
        isCollapse: false
      }
    },
    components:{
      Headers
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      childClick(){
           this.$emit('childVu',this.isCollapse)
      }
    }
  }
</script>
<style lang="scss">
  .logo{
    position: fixed;
    /* top: 0; */
    width: 100%;
    /* height: 60px; */
    z-index: 1000;
    .el-radio-group{
      background:#000
    }
  }
</style>
