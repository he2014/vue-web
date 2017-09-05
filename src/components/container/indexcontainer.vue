<template>
  <div class="container">
    <div class="live">
          <div class="live-title">
            <div class="live-titleLeft">
               <img src="../../assets/img/tab_live_btn_pressed@2x.png"/>
               <span>Live</span>
            </div>
            <div class="live-titleRight">
              <span @click="showPop">more</span>
              <img src="../../assets/img/more2x.png"/>
            </div>
          </div>
          <div class="ul">
              <router-link tag="p" :to="{path:'live',query:{ sf:item['roomID']}}" v-for="(item,index) in list" :key='index'>
                  <img class="poster" v-bind:src="item['pic']"/>
                  <span class="isOnline" v-if="item['isOnline']">
                       <em class="onLive" v-if="item['isHot']">
                          <i><img src="../../assets/img/live.gif" /></i>
                          <b><span>{{item['num']}}</span></b>
                       </em>
                       <i class="onLive" v-else>
                         <em><img src="../../assets/img/live.gif" /></em>
                         <b><span>{{item['num']}}</span></b>
                       </i>
            </span>
              </router-link>
          </div>
    </div>
    <div class="video">
          <div class="video-title">
            <div class="video-titleLeft">
               <img src="../../assets/img/tab_btn_video1@2x.png"/>
               <span>Video</span>
            </div>
            <div class="video-titleRight">
              <span @click="showPop">more</span>
              <img src="../../assets/img/more2x.png"/>
            </div>
          </div>
          <div class="ul">
              <p v-for="(item,index) in videoList" :key='index'>
                  <img v-bind:src="item['pic']"/>
                  <span class="online">
                     <i>{{item["num"]}}</i>
                  </span>
              </p>
          </div>
    </div>
    <div class="chat">
          <div class="chat-title">
            <div class="chat-titleLeft">
               <img src="../../assets/img/tab_btn_video1@2x.png"/>
               <span>Chat</span>
            </div>
            <div class="chat-titleRight">
              <span @click="showPop">more</span>
              <img src="../../assets/img/more2x.png"/>
            </div>
          </div>
          <div class="ul">
              <p v-for="(item,index) in chatList" :key='index'>
                <span class="chatContent">
                  <img v-bind:src="item['pic']"/>
                </span>
                  <b class="num">
                    <span>{{item['name']}}</span>
                    <em>
                      <img src="../../assets/img/icon_usercount_02@2x.png" />
                      <i>{{item['num']}}</i>
                    </em>
                  </b>
              </p>
          </div>
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
      this.$http.get("/news/index").then(function(res){
        let data = res['body'];
        if(data['code']==0)
         this.list = data['dataInfo'];
      }.bind(this))
     this.$http.get("/video/index").then(function(data){
         let list = data['body'];
         if(list['code']==0){
           this.videoList = list['dataInfo'];
         }
     }.bind(this))

    this.$http.get("/chat/index").then(function(data){
      let list = data['body'];
      if(list['code']==0){
        this.chatList = list['dataInfo'];
      }
    }.bind(this))

//   //do something after mounting vue instance
//
 },
 methods:{
   showPop(){
     this.$store.dispatch("setShow",true);
   }
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
  .live .ul,
  .video .ul{
    width: 750px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .live .ul p{
    position: relative;
    width: 374px;
    height: 375px;
  }
  .live .ul p:nth-child(2n){
    width: 375px;
  }
  .live .ul .poster,.video .ul img{
    width: 100%;
    height: 100%;
  }
  .live .ul p{
    margin-bottom: 1px;
  }
.live .isOnline{
  position: absolute;
  top:40px;
  left: 12px;
}
.live .isOnline .onLive{
  position: absolute;
  display: flex;
  justify-content: space-between;
}
.live .isOnline .onLive em,
.live .isOnline .onLive i{
  width: 106px;
  height: 52px;
}
.live .isOnline .onLive em{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: url("../../assets/img/LIVE_small2x.png") left -12px no-repeat;
}
.live .isOnline .onLive i{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: url("../../assets/img/HOT_small2x.png") left center no-repeat;
}
.live .isOnline .onLive em img,
.live .isOnline .onLive i img{
  width: 30px;
  margin:0 0 5px 15px;
}
.live .isOnline .onLive i img{
  margin-top: 27px;
}
.live .isOnline em.onLive b{
  position: relative;
  top:15px;
  left: -8px;
}
.live .isOnline .onLive b{
  position: relative;
  top:3px;
  left: -8px;
  min-width: 63px;
  height: 34px;
  line-height: 34px;
  text-align: right;
  margin-top:11px;
  background: url("../../assets/img/Rectangle@2x.png") left center no-repeat;
  background-size: 100%;

  font-family: DINCondensed-Bold;
font-size: 26px;
color: #fff;
  padding-right: 15px;
  border-radius: 0 10px 10px 0;
}
.live .isOnline .onLive b span{
  padding-left: 50px;
  background: url('../../assets/img/huiu@2x.png') 20px center no-repeat;
}
.video{
  width: 750px;
  height: 689px;
  overflow: hidden;
}
.video .ul p {
  position: relative;
  width: 249px;
  height: 300px;
  margin-bottom: 1px;
  margin-right: 1px;
}
.video .ul p:nth-child(3n){
  margin:0;
  width: 250px;
}
.video .ul p .online{
  position: absolute;
  bottom: 10px;
  left:16px;
  font-size: 26px;
  color:white;
  padding-left: 30px;
  background: url("../../assets/img/huiu@2x.png") left center no-repeat;
}
.chat .ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.chat .ul p{
  width: 750px;
  height: 140px;
  display: flex;
  justify-content: space-between;
}
.chat .ul p .chatContent img{
  width: 120px;
  height: 120px;

}
.chat .chatContent {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
}
.chat .num{
  width: 590px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  color: #292929;
  border-bottom: 2px solid #eee;
}
.chat .num em{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 26px;
  color: #999999

}
.chat .num em i{
  padding: 0 20px 0 0;

}

</style>
