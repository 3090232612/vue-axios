<template>
  <div>
    <Header></Header>
    <div>
      我是首页
    </div>
  </div>
</template>

<script>

  import Header from './head';
  export default{
    //name:index,
//    computed:{
//        username(){
//          return this.$route.params.username
//          console.log(this.$route.params.username);
//        }
//    },
//    methods:{
//      goBack(){
//        window.history.length>1?this.$route.go(-1):this.$route.go('/')
//      }
//    },
    components:{
      Header
    }
  }
</script>
