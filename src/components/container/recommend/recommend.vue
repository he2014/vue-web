<template>
  <div class="recommend">
      <div class="recomHeader">
        <img src="static/img/recommend/recommend.jpg" alt="">
      </div>
      <div class="recomVideo">
          <div class="recomvideoHeader">
            <div class="recomvideoHeaderLeft">
              <span>Video</span>
            </div>
            <div class="recomvideoHeaderRight">
                <span>more</span>
            </div>
          </div>
          <div class="recomvideoList">
             <p v-for="(item,index) in videourl" :key="index">
               <img :src="item['pic']" alt="">
               <span><i>{{item["number"]}}</i></span>
             </p>
          </div>
      </div>
      <div class="recomLive">
        <div class="recomvideoHeader">
          <div class="recomvideoHeaderLeft">
            <span>Live</span>
          </div>
          <div class="recomvideoHeaderRight">
              <span>more</span>
          </div>
        </div>
        <div class="recomvideoList">
           <p v-for="(item,index) in liveurl" :key="index">
             <img :src="item['pic']" alt="">
             <span><i>{{item["number"]}}</i></span>
           </p>
        </div>
      </div>
      <div class="recomChat"></div>
  </div>
</template>
<script>
import comData from "@/pubulic/recom.json"
import common from "@/pubulic/common";
export default {
  name: "",
  data: () => ({
      dataList:[],
      videourl:[],
      liveurl:[],
      chaturl:[]

  }),
  mounted() {
    let arr = common['myRandom'](10,0,29);
    let _this = this;
     arr.forEach((item,index)=>{
         let num0 = Math.floor(Math.random()*6000)+1000;
          let num1 = Math.floor(Math.random()*4000)+1000;
          let num2 = Math.floor(Math.random()*3000)+1000;
        _this.videourl.push({"pic":comData["video"][item],"number":num0});
        _this.liveurl.push({"pic":comData["live"][item],"number":num1});
        _this.chaturl.push({"pic":comData["chat"][item],"number":num2});
     });
  },
  methods: {
       showpop(){
         this.$store.dispatch("setShow",true);
       },
    }
}
</script>
<style  scoped>
.recommend{
  width: 100%;
overflow: hidden;
}
.recomVideo,.recomLive{
  width: 100%;
  height: 388px;
  overflow: hidden;
}
.recomvideoHeader{
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.recomvideoHeaderLeft{
  height: 60px;
  flex: 1;
  font-size: 24px;
  color: #292929;
  line-height: 60px;
  display: flex;
  align-items: center;
  padding-left: 90px;
  background: url("../../../assets/img/tab_btn_video1@2x.png") 20px center no-repeat;
}
.recomvideoHeaderRight{
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.recomvideoHeaderRight span{
  height: 40px;
  padding-right: 60px;
  font-size: 30px;
  line-height: 40px;
  color: #b2b2b2;
  background:  url("../../../assets/img/more2x.png") 70px center no-repeat;
}
.recomvideoList{
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling:touch;
  overflow-y: hidden;
}
.recomvideoList p{
  margin-left: 2px;
  position: relative;
}
.recomvideoList p:nth-child(1){
  margin: 0;
}
.recomvideoList p img{
  width: 224px;
  height: 300px;
}
.recomvideoList p span{
 position: absolute;
 left: 0;
 bottom: 0;
 width: 100%;
 height: 100px;
 color: #fff;
 background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.3) 100%);
}
.recomvideoList p span i{
  position: absolute;
  bottom: 20px;
  left: 16px;
  font-size: 26px;
  padding-left: 30px;
  background: url("../../../assets/img/huiu@2x.png") left center no-repeat;
}
</style>
