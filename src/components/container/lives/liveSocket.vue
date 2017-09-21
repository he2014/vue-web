<template>
  <div class="liveSocket">
    <div class="chatMain" id="chatMain" ref="chatMain">
      <div class="kong">

      </div>
      <div ref="chats" class="chats">
      <div class="chatList" v-show="chatList.length!=0" v-for="elem in chatList" :key="elem.key">
           <div class="chatListLeft">
                <div class="chatTop">
                  <span :class="elem['vl']==0?'username':elem['vl']==1?'usernamevip':'usernamesvip'">{{elem['nn']}}</span>
                  <span class="fans" v-show="elem['fl']!=0"><i>{{elem['fl']}}</i></span>
                  <img class="vipIMG" v-show="elem['vl']==1" src="../../../assets/img/icon_vip.png"/>
                  <img class="svipIMG" v-show="elem['vl']==2" src="../../../assets/img/svipicon.png" />
                  <badge v-show="elem['bdg']" :badge="elem['bdg']"></badge>
                </div>
                <chat-message :chatMessage="elem['ms']"></chat-message>
           </div>
           <div class="chatListRight">

           </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import {socket} from "@/pubulic/config";
import badge from "@/components/container/badge"
import chatMessage from "@/components/container/chatMessage"
// import {animate,getStyle} from"@/config/mUtils";

export default {
  props:['roomID'],
  name: "",
  data: () => ({
     chatList:[],
     datasChat:[]

  }),
  components: {
    badge,
    chatMessage
  },
  created() {
    //do something after creating vue instance

  },
  mounted() {

    Communicator.init(this.roomID,this.messages,1)
    //do something after mounting vue instance

  },
  methods: {
    messages(data) {
      let _this = this;
      if(data){
        switch(data['mid']){

            case socket['chat']:


            _this.$nextTick(()=>{
              _this.chatList.push(data['info']);
              //_this.datasChat.push(data.info.ms);
              // if(_this.datasChat.length>1){
              //   _this.datasChat.shift();
              // }
              if(_this.chatList.length>20){
                _this.chatList.shift();

              }
            })

            //console.log(this.chatList.length)
            // _this.$nextTick(()=>{
            //   _this.chatAnimate();
            // })

            break;
            case socket['gift']:
            // console.log("gift"+data);
            break;
        }
      }

    },

},
  watch:{
    chatList:{
      handler(){
      this.$nextTick(()=>{
          //console.log(this.$el.querySelector(".chatMain"))
            this.$refs.chatMain.scrollTop = this.$refs.chats.scrollHeight;
            //console.log(this.chatList)
      })
    },
    deep:true


  },

  }

}
</script>
<style  scoped>
.vipIMG,.svipIMG{
  width: 32px;
  height: 32px;
}
.liveSocket,.chatMain{
  position: absolute;
  left: 0;
  bottom: 208px;
  width: 404px;
  height: 284px;


}
.liveSocket{

}
.chatMain{
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

}
.kong{
  flex: 1;
}
.liveSocket{
  overflow: hidden;
}

.chatMain{
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling:touch;
  color: #fff;
  bottom: 0;
  padding-right: 20px;
}
.chatList{
  width: 404px;
  padding: 10px;
  padding-left: 0;
  display: flex;
  justify-content: flex-start;
}
.chatListRight{
  flex: 1;
}
.username,.usernamevip,.usernamesvip{
  line-height: 44px;
  font-size: 28px;
}
.username{
  color: #7f7b77;
}
.usernamevip{
  color: #c5381d;
}
.usernamesvip{
  color:#f6a623;
}
.chatMessage{
  padding-top: 5px;
  font-size: 24px;
}
.chatTop{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

}
.chatTop span:nth-child(1){
  white-space: nowrap;

}
.fans{
  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin: 0 10px 0 18px;
    width: 60px;
    height: 32px;
    color: #fff;
    background: #0bc2c6 url("../../../assets/img/fansicon.png") no-repeat 10px center;
    border-radius: 15px;
    margin-top: 3px;
}
.fans i{
  line-height: 32px;
    padding-right: 10px;
    font-size: 28px;
}
.chatListLeft{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0 20px 20px 0;
  padding: 0 10px 10px 10px;
}
</style>
