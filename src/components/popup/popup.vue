<template>
  <div class="downloadPop" @click="hidepop">
    <div class="downloadMain" @click.stop>
       <div class="downloadMainTop">
           <img src="../../assets/img/downLOGO.png" alt="">
       </div>
       <div class="downloadMainMiddle" v-if="type">{{nolive}}</div>
       <div class="downloadMainMiddle" v-else>{{message}}</div>
       <div class="downloadMainBottom">
            <div class="androidBtn" v-if="(isDevice=='android')">
                <div class="gooleInstall" @click="androidDown">Goole play</div>
              <div class="webInstall" @click="androidInstall">Install</div>
            </div>
            <div class="iPhoneBtn" v-else  @click="iosDown">Download</div>
       </div>
    </div>
  </div>
</template>
<script>
import common from "@/pubulic/common";
export default {
  name: "",
  data: () => ({
    nolive:"This Broadcaster is not online now, but there is more fun waiting for you. Download the APP now!",
    message:"More Awesomeness is waiting for you, just press the link and download 7nujoom!",
    type:false,
    isDevice:"",
    oHeight:""
  }),
  created() {
    //do something after creating vue instance
    if(common['getUrlParam']()){
      this.type=true;
    }
    this.isDevice = this.$store.getters.getDevice;
  },


  methods: {
    androidDown(){

      common['download'](1);
    },
    iosDown() {
        common['download'](2);
    },

    androidInstall(){
      common['download'](3);
    },
    hidepop(){
      this.$store.dispatch('setShow',false)
    }
  },
  mounted() {
     let winHeight = $(window).height();
     $(".downloadMain").css('marginTop',-winHeight/6);
  },
  updated() {
    //do something after updating vue instance

  }
}
</script>
<style  scoped>
.downloadPop{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
}
.downloadMain{
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left:-270px;
  width: 540px;
  background-color: #fff;
  border-radius: 24px;
}
.downloadMainTop{
  width: 276px;
  margin-top: -116px;
  margin-left: 120px;
}
.downloadMainMiddle{
  width: 480px;
  margin: 0 auto;
  font-family: HelveticaNeue;
font-size: 34px;
text-align: center;
color: rgba(0,0,0,0.54);
line-height: 50px;
padding-bottom: 30px;
}
.iPhoneBtn{
  width: 360px;
  height: 60px;
  margin: 0 auto;
  background-image: linear-gradient(-180deg, #2AF598 0%, #009EFD 100%);
  font-family: HelveticaNeue;
font-size: 34px;
line-height: 60px;
text-align: center;
color: #FFFFFF;
border-radius: 12px;
margin-bottom: 40px;
}
.androidBtn{
   width: 360px;
   height: 140px;
   margin: 0 auto;
   margin-bottom: 40px;
}
.gooleInstall,
 .webInstall{
  height: 60px;
  background-image: linear-gradient(-180deg, #2AF598 0%, #009EFD 100%);
  font-family: HelveticaNeue;
font-size: 34px;
line-height: 60px;
text-align: center;
color: #FFFFFF;
border-radius: 12px;
}
.webInstall{
  margin-top: 20px;
}
</style>
