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
    <div class="video">
          <div class="video-title">
            <div class="video-titleLeft">
               <img src="../../assets/img/tab_btn_video1@2x.png"/>
               <span>Video</span>
            </div>
            <div class="video-titleRight">
              <span>more</span>
              <img src="../../assets/img/more2x.png"/>
            </div>
          </div>
          <ul>
              <li v-for="(item,index) in videoList" :key='index'>
                  <img v-bind:src="item['pic']"/>
              </li>
          </ul>
    </div>
    <div class="chat">
          <div class="chat-title">
            <div class="chat-titleLeft">
               <img src="../../assets/img/tab_btn_video1@2x.png"/>
               <span>Chat</span>
            </div>
            <div class="chat-titleRight">
              <span>more</span>
              <img src="../../assets/img/more2x.png"/>
            </div>
          </div>
          <ul>
              <li v-for="(item,index) in chatList" :key='index'>
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
        videoList:[],
        chatList:[],
        state:null
  }),
mounted() {
  var promise = new Promise(function(resolve,reject){
      this.$http.get("/news/index").then(function(res){
        let data = res['body'];
        if(data['code']==0)
         this.list = data['dataInfo'];
         resolve();
      }.bind(this))
  }.bind(this)).then(function(resolve,reject){
     this.$http.get("/video/index").then(function(data){
         let list = data['body'];
         if(list['code']==0){
           this.videoList = list['dataInfo'];
           console.log(promise)
           resolve();
         }
     }.bind(this))
  }.bind(this)).then(function(resolve,reject){
    this.$http.get("/chat/index").then(function(data){
      let list = data['body'];
      if(list['code']==0){
        this.chaList = list['dataInfo'];
        //resolve()
        //console.log(this.videoList)
      }
    }.bind(this))
  }.bind(this))
  //do something after mounting vue instance

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
  .live .live-title,
  .video .video-title,
  .chat .chat-title{
      width: 750px;
      height: 88px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #F7F7F8 ;
  }
  .live .live-titleLeft,
  .live .live-titleRight,
  .video .video-titleLeft,
  .video .video-titleRight,
  .chat .chat-titleLeft,
  .chat .chat-titleRight{
     height: 88px;
     display: flex;
     flex: 1 1 auto;
  }
  .live .live-titleLeft,
  .video .video-titleLeft,
    .chat .chat-titleLeft{
    justify-content: flex-start;
    align-items: center;
      font-size: 34px;
      color: #292929;
  }
  .live .live-titleLeft img,
  .video .video-titleLeft img,
  .chat .chat-titleLeft img{
    margin: 0 10px 0 20px;
  }
    .live .live-titleRight,
    .video .video-titleRight,
    .chat .chat-titleRight{
      justify-content: flex-end;
      align-items: center;
      padding-right: 32px;
      font-size: 30px;
      color: #B2B2B2;
    }
  .live ul,
  .video ul{
    width: 750px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .live ul li{
    width: 374px;
    height: 375px;
  }
  .live ul li:nth-child(2n){
    width: 375px;
  }
  .live ul img,.video ul img{
    width: 100%;
    height: 100%;
  }
  .live ul li{
    margin-bottom: 1px;
  }

.video{
  width: 750px;
  height: 689px;
  overflow: hidden;
}
.video ul li {
  width: 249px;
  height: 300px;
  margin-bottom: 1px;
  margin-right: 1px;
}
.video ul li:nth-child(3n){
  margin:0;
  width: 250px;
}

</style>
