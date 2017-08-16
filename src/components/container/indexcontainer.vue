<template>
  <div class="container">
    <div class="live">
          <div class="live-title">
            <div class="live-titleLeft">
               <img src="../../assets/img/tab_live_btn_pressed@2x.png"/>
               <span>Live</span>
            </div>
            <div class="live-titleRight">
              <span>more</span>
              <img src="../../assets/img/more2x.png"/>
            </div>
          </div>
          <ul>
              <li v-for="(item,index) in list" :key='index'>
                  <img v-bind:src="item['pic']"/>
              </li>
          </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: "container",
  data: () => ({
        message:'container',
        list:[],
        videoList:[]
  }),
mounted() {
  //do something after mounting vue instance
  this.$http.get("/news/index").then(function(res){
    let data = res['body'];
    if(data['code']==0)
     this.list = data['dataInfo'];
  }.bind(this))
}

}
</script>
<style scoped>

  .container{
     width:750px;
     overflow: hidden;
     flex: 1;
  }
  .live{
    width: 750px;
    height: 837px;
overflow: hidden;
    /*display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;*/

  }
  .live .live-title{
      width: 750px;
      height: 88px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #F7F7F8 ;
  }
  .live .live-titleLeft,
  .live .live-titleRight{
     height: 88px;
     display: flex;
     flex: 1 1 auto;
  }
  .live .live-titleLeft{
    justify-content: flex-start;
    align-items: center;
      font-size: 34px;
      color: #292929;
  }
  .live .live-titleLeft img{
    margin: 0 10px 0 20px;
  }
    .live .live-titleRight{
      justify-content: flex-end;
      align-items: center;
      padding-right: 32px;
      font-size: 30px;
      color: #B2B2B2;
    }
  .live ul{
    width: 750px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .live ul li{
    width: 374px;
    height: 375px;
  }
  .live ul li:nth-child(2n){
    width: 375px;
  }
  .live ul img{
    width: 100%;
    height: 100%;
  }
  .live ul li{
    margin-bottom: 1px;
  }


</style>
