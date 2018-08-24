<template>
  <div class="container">
    <Logo :collapse="isCollapse" @childVue="childByVue"></Logo>
    <Headers :isCollapse="isCollapse"></Headers>
    <div class="content">
      我是账号列表。。。。。。。
    </div>

  </div>
</template>

<script>
  import Headers from '@/components/head';
  import Table from '../components/table';
  import Logo from '@/components/logo';

  export default{
    data(){
      return {
        isCollapse:true
      }
    },
    components:{
      Headers,Table,Logo
    },
    methods:{
      childByVue:function(a){
        this.isCollapse=a
      }
    }
  }

</script>
<style>
  .content{
    padding:40px;
  }
</style>
