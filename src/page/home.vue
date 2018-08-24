<template>
  <div class="container">
    <Logo :collapse="isCollapse" @childVu="childByVue"></Logo>
    <Headers :isCollapse="isCollapse"></Headers>
    <div class="content" v-bind:class="{'content-collapse':isCollapse}">
      <Table :data_="data"/>
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
         isCollapse:true,
         data:1
       }
     },
     created(){
       console.log(1);
       this.$axios.get('/gp').then(function(res){
         console.log(res);
       })
     },
     components:{
       Headers,Table,Logo
     },
     methods:{
       childByVue:function(a){
         this.isCollapse=a

         //console.log(a);
       }
     }
   }

</script>
<style>
  .content{

    padding:40px;
    padding-top:100px;
    margin-left: 65px;
    overflow-y: scroll;
    background: #f0f0f0;
  }
  .content-collapse{
    margin-left:201px;
  }
</style>
