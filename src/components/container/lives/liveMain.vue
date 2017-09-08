<template>
  <div class="main">
    <new-header></new-header>
    <div class="liveMain">
              <div class="video">
                <div class="roomMain">
                <div id='player' class="player"></div>
                <div>
                  <div class="posterFlow">
                     <div class="hotMessage">
                       <div class="posterHotMessage">
                           <div class="poterHotName">{{mas['name']}}</div>
                           <div class="posterHotNum">{{mas['num']}}</div>
                       </div>
                       <div class="posterHotHerader">
                           <img :src="mas['pics']">
                       </div>
                     </div>
                  </div>
                  <div class="accept">
                    <div class="acceptText">{{message}}</div>
                    <a href="javascript::" @click="showpop">{{accept}}</a>
                  </div>
                  <div class="posterGift roomPosterGift">
                    <img @click="showpop" class="posterSpeak" src="../../../assets/img/room_btn_messege@2x.png">
                    <img @click="showpop" class="posterGiveGift" src="../../../assets/img/btn_gift_2@2x.png">
                  </div>
                </div>
                </div>
                <div id="livePoster" class="livePoster">
                     <div class="posterFlow">
                        <div class="hotMessage">
                          <div class="posterHotMessage">
                              <div class="poterHotName">{{mas['name']}}</div>
                              <div class="posterHotNum">{{mas['num']}}</div>
                          </div>
                          <div class="posterHotHerader">
                              <img :src="mas['pics']">
                          </div>
                        </div>
                     </div>
                     <div class="posterImg">
                       <img class="playBut" @click="videoPlay" src="../../../assets/img/playBut.png">
                       <img class="posterHotImg" :src="mas['pic']">
                     </div>
                     <div class="posterGift">
                       <img @click="showpop" class="posterSpeak" src="../../../assets/img/room_btn_messege@2x.png">
                       <img @click="showpop" class="posterGiveGift" src="../../../assets/img/btn_gift_2@2x.png">
                     </div>
                </div>
              </div>
    </div>
    <recommend></recommend>
    <new-footer></new-footer>
    </div>
</template>
<script>
import newHeader from "@/components/header/newHeader"
import newFooter from "@/components/footer/newFooter"
import recommend from "@/components/container/recommend/recommend"
import common from "@/pubulic/common"
export default {
  name:"liveMain",
  data: () => ({
      mas:"",
      video:'',
      message:"This Broadcaster is inviting you to chat! Download 7Nujoom to follow her!",
      accept:"Accept"
  }),
  components:{
    newHeader,
    newFooter,
    recommend
  },
  created() {
  },
  mounted() {
    let _this = this;
    this.$http.get("/live/room").then(function(data){
      let roomData = data['body'];
      if(roomData['code']==0){
          _this.mas = roomData['dataInfo'];
          _this.videoRender();
      }

    })
  },
methods: {
  videoRender(){
    let _this =this;
    let  palyInfo ={
              "controls":false,
              "mute":"",
              "stretching":"exactfit",
              "preload":"none",
              "modes":[{"type":"html5"}],
              "autostart":"false",
              "file":"http://streamerhls.7nujoom.com/live/stream_6357377/playlist.m3u8",
              "height":"100%",
              "width":"100%",
              "volume":100,
              "events":{
                    onComplete: function() {
                    _this.$router.push("/index?flag=0")
    				      },
    				      onVolume: function() {
                    console.log("声音大小改变!!!");
    				      },
									onError:function(){
                    //_this.$router.push("/index?flag=0")
									},
    				      onReady: function() {
    					       var that = this;
    					       var video = document.querySelector('video');
            					video.attr({
            						"x5-video-player-type": "h5",
            						"x5-video-player-fullscreen": "true",
            						'airplay':"airplay",
            						"x-webkit-airplay":"true",
            					});
                      enableInlineVideo(video);
            				},
            				onPlay: function() {
            					console.log("开始播放!!!");
            				},
            				onPause: function() {
            					console.log("暂停!");
            				},
            				onSetupError: function() {

            				}
              }
          }
      let player=this.video = jwplayer("player").setup(palyInfo);
  },
  videoPlay(){
    this.video.play();
    $("#livePoster ").hide();
    $('.liveMain').css('height', $(window).height());
  },
  showpop(){
    this.$store.dispatch('setShow',true);
  }
},
}
</script>
<style scoped>
.accept{
  width: 734px;
  height: 56px;
  position: absolute;
  left: 0;
  bottom: 104px;
  background: rgba(255,255,255,0.80);
border: 2px solid #fff;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-around;
padding: 12px  6px 12px 10px;
}
.accept a{
  width: 140px;
  height: 68px;
  background: #0BC2C6;
border-radius: 10px;
text-align: center;
line-height: 68px;
font-size: 34px;
color:#fff;

}
.acceptText{
  width: 565px;
  font-size: 30px;
  color: #292929;
}
.roomMain{
  position: absolute;
  width: 100%;
  height: 100%;
}
.main{
  width: 100%;
  overflow: hidden;
}
.liveMain{
  width: 100%;
  height: 920px;
}

.video{
 width: 100%;
 height: 100%;
 position: relative;

}
.posterFlow{
  position: absolute;
  left: 0;
  top: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 76px;
  z-index: 98;
}
.hotMessage{
  /*width: 220px;*/
  height: 76px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 38px;
  padding-left: 28px;
}
.livePoster,.posterImg,.posterHotImg{
  position: absolute;
  width: 100%;
  height: 100%;
}
.posterHotHerader{
  width: 68px;
  height: 68px;
  margin-right: 5px;
}
.posterHotHerader img{
  border-radius: 50%;

}
.posterHotMessage{
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.poterHotName{
max-width: 140px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-size: 24px;
color: #fff;
letter-spacing: 0;
line-height: 34px;
}
.posterHotNum{
font-size: 20px;
color: #fff;
letter-spacing: 0;
text-shadow: 0 1px 0 rgba(0,0,0,0.50);
text-align: right;
line-height: 28px;
height: 24px;
padding-right: 20px;
min-width: 60px;
background:url("../../../assets/img/huiu@2x.png") 40px center no-repeat;
}
.playBut{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -70px;
  margin-top: -70px;
      z-index: 98;
}
.roomPosterGift{
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
}
.posterGift{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.posterGiveGift{
  margin-right: 40px;
}
.posterSpeak{
  margin-left: 40px;
}



</style>
