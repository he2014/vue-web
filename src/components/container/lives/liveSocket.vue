<template>
  <div class="soketMain">
    <ul class="gitMain">
      <transition-group name="gift" tag="li" class="giftLi">
        <div class="giftList" v-for="(item,index) in giftGive " :key="index"  >
          <div class="giftUser">
              <div class="giftHeader">
                <img :src="url+item.info['hp']" @error="setErrorImg"/>
              </div>
              <div class="giftName">
                {{item['info']['nn']}}
              </div>
              <div class="giftPic">
                 <img :src="url+item.info.gpic" />
              </div>

            </div>
              <div class="giftNumber" >
                  <i>x</i>
                  <span>{{item['info']['gnum']}}</span>
              </div>
        </div>
      </transition-group>
    </ul>

  <div class="liveSocket">
    <div class="chatMain" id="chatMain" ref="chatMain">
      <div class="kong">

      </div>
      <div ref="chats" class="chats">
      <div class="chatList" v-for="(elem,index) in chatList" :key="index">
           <div class="chatListLeft">
                <div class="chatTop">
                  <span :class="elem['vl']==0?'username':elem['vl']==1?'usernamevip':'usernamesvip'">{{elem['nn']}}</span>
                  <span class="fans" v-show="elem['fl']!=0"><i>{{elem['fl']}}</i></span>
                  <img class="vipIMG" v-show="elem['vl']==1" src="../../../assets/img/icon_vip.png"/>
                  <img class="svipIMG" v-show="elem['vl']==2" src="../../../assets/img/svipicon.png" />
                  <badge  :badgemsg="badge"></badge>
                </div>
                <!-- <chat-message :chatMessageData="chatmsg"  ></chat-message> -->
                <div class="chatMessage" v-html="elem['msg']">

                </div>
           </div>
           <div class="chatListRight">

           </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>
<script>
import {socket,base} from "@/pubulic/config";
import badge from "@/components/container/badge"
import common from "@/pubulic/common"
import { Communicator} from "@/pubulic/socket";
// import {animate,getStyle} from"@/config/mUtils";

export default {
  props:['roomID'],
  name: "",
  data: () => ({
     chatList:[],//消息
     datasChat:[],
     chatmsg:null,//表情
     badge:null,//徽章
     giftList:[],
     giftGive:[],
     //imgUrl:""


  }),
  components: {
    badge,
    //chatMessage
  },
  created() {
    this.chatList = [];
    let url = base.baseUrl;
  //  this.imgUrl = url+"/resource/"
    let _this = this;
    this.$http.get(url+"/data/static/v4/?face").then(function(data){
      if(data.status>=200&&data.status<300){
        this.chatmsg = data.body.dataInfo.face.d;
      //  this.renderMessage(message)
      }
    }.bind(this))
    this.$http.get(url+"/data/static/v4/?badge").then(function(data){
      if(data.status>=200&&data.status<300){
        this.url = url+"/resource/";
        this.badge = data.body.dataInfo.badge.d;
      }

    }.bind(this));
    this.$http.get(url+"/data/mobile/v3/?gift&requsetType=1").then(function(data){
      if(data.status>=200&&data.status<300){
        this.giftData = data.body.dataInfo.gift.d;
        this.giftResource =[];
        let item = {}
        this.giftData.forEach(function(val,index){
          // console.log(val)
          // console.log(val['id'])

          // this.giftResource.push({
          //   val['id']:val['gp']
          // })
          item[val['id']] = val['gp']

        }.bind(this))
        this.giftResource.push(item)
      //  console.log(this.giftResource)
      }
    }.bind(this))
  },
  mounted() {
    //创建socket实例，并回调消息
    // let promise = new Promise(function(){
    //
    // })
      Communicator.init(this.roomID,this.messages,1,true)

    //s})
    //do something after mounting vue instance

  },
  methods: {
    messages(data) {
      let _this = this;
      if(data){
        switch(data['mid']){
            case socket['chat']:
            //.log(data)
            // _this.$nextTick(()=>{
              data.info.msg=_this.renderMessage(data['info']["ms"])
              _this.chatList.push(data['info']);
              _this.$store.dispatch("setBadgeDate",data.info.bdg);
               // })
            break;
            case socket['gift']:
              _this.renderGit(data)
              _this.giftList.push(data);
              setTimeout(function(){
                if(_this.giftList.length>0){
                  _this.giftList[0]['info']['gpic']=_this.giftResource[0][_this.giftList[0]['info']['gid']]
                  _this.giftGive.push(_this.giftList[0]);
                  _this.giftList.shift();
                }
              },3000)
            break;
            case socket['offLive']:
              this.$router.push("/index?flag=0");
              break;


        }
      }

    },
    setErrorImg(e){
      e.target.setAttribute('src',"static/img/recommend/head.png")
     // console.log()
      //errorImg(e,'static/img/header.png')

    },
    renderGit(data){
      //  console.log(data)


    },
    renderMessage(data) {
      let _this= this;
      let url = base.baseUrl+"/resource/";
      let map ={};
      let message =this.chatmsg
     //console.log(this.faceData)

      message&&message.forEach(function(obj,index){
        obj['fs'].forEach(function(item,i){
            map[item['c']] ={"flag":item['f'],"pic":item['p']};
        })
      })
      //console.log(this.$store.getters.getChatData)g
      //消息中的表情替换
    let str = common.replace_html(data);
    for(let val in map){
      if(val&&map[val]){
        let  reg = val.replace("[","\\[").replace("]","\\]");
        //console.log(url+map[val]["pic"])
        let iSRC = url+map[val]["pic"];
        str = str.replace(new RegExp(reg,"g"),'<img style="with:32px;height:32px;" src="'+iSRC+'" />');

      }
    }
        return  str;
    }

},
  watch:{//监听数据变化，滚动条更新和删除过多节点
    chatList:{
      handler(newval,oldval){
      this.$nextTick(()=>{
            this.$refs.chatMain.scrollTop = this.$refs.chats.scrollHeight;
            if(this.$el.querySelectorAll(".chatList").length>=20){
              this.$el.querySelector(".chatList").remove();
              this.chatList.shift();

            }
      })
    },
    deep:true



  }

  }

}
</script>
<style  scoped>
.gitMain{
  position: absolute;
  top: 490px;
  height: 200px;
  width: 100%;
  z-index: 59z;
  color: #fff;
}
.gitMain li{
  width: 100%;
  height: 200px;
  position: relative;
}
.giftList{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

}
.giftUser{
height: 100%;
width: 400px;
display: flex;
align-items: center;
justify-content: flex-start;
background: #f5a623;
border-radius: 44px;
padding-right: 15px;
font-size: 24px;
position: relative;

}
.giftPic img{
  height: 72px;
  position: absolute;
  top:50%;
  margin-top: -36px;
  right: 20px;
}
.giftName{
  margin: 0 20px;
  overflow: hidden;
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.giftNumber i{
  font-size: 48px;
font-style: italic;
color: #f5a623;
padding-right: 15px;
padding-left: 5px;
line-height: 60px;
text-shadow: 0px 2px 2px rgba(255,255,255,1);
}
.giftNumber span{
  font-size: 68px;
color: #f5a623;
text-shadow: 0px 2px 2px rgba(255,255,255,1);
}
.giftHeader{
  width:88px;
  height: 88px;

}
.giftHeader img{
  width: 88px;
  height: 88px;
  border-radius: 50%;
}
.soketMain{
  width: 100%;
  height: 100%;
  position:absolute;
  left: 0;
  bottom: 0;
}
.chatMessage{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 5px;
  font-size: 24px;
  word-break: keep-all;
}
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
