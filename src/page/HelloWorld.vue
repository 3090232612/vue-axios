<template>
<div>
  <Headers></Headers>
 <div>
   <p>我是内容{{$data.msg}}</p>
   <p v-bind:title="title">hover</p>
   <p>{{getMovie()}}</p>
   <p class="box" id="box" v-on:click="getMove('box')"></p>
 </div>
</div>
</template>

<script>
  import Headers from '@/components/head';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'dd',
      title:'复仇者联盟',
      date:'2018',
      x:0,
      y:0
    }
  },
  components:{
    Headers
  },
  methods:{
    getMovie(){
      //console.log(this);
      //console.log(typeof this.date);
      return(this.date>2017?'new':'old')
    },
    getClick(ele){
      var oDiv=document.getElementById(ele);
      // console.log(oDiv);
      var x=this.x;
      var y=this.y;
      oDiv.onmousedown=function(e){
        // console.log(e)
        x=e.clientX-this.offsetLeft;
        y=e.clientY-this.offsetTop;
        console.log(x);
        console.log(y);
        //console.log(e.clientX - e.offsetX + 'px');
        // onmousmove(e)
      }
      this.x=x;
      this.y=y;

    },
    getMove(ele){
      let oDiv=document.getElementById(ele);
      // console.log(oDiv);
      console.log('鼠标按下');

      let x=this.x;
      let y=this.y;
      var isDown=false;
        oDiv.onmousedown = function (e) {
          // console.log(e)
           isDown=true;
          x = e.clientX - this.offsetLeft;
          y = e.clientY - this.offsetTop;
        };


      document.onmousemove=function(e){
        console.log('拖动了');
        if(isDown) {
        oDiv.style.left=e.clientX-x+'px';
        oDiv.style.top=e.clientY-y+'px';
        }
      };

      //document.onmouseup=null;
      document.onmouseup=function(e){
        isDown=false;
        console.log('鼠标抬起');
        document.onmouseup=null;
        document.onmousemove=null;
      }
    }


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .box{
    width: 100px;
    height: 100px;
    border:1px solid red;
    position:absolute;
    top:200px;
    left:0;
  }
</style>
