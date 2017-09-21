<template>
  <div class="chatMessage" v-html="messages">

      <!-- <img v-for="elem in arrs" :key="elem.key" :src="elem" /> -->
  </div>
</template>
<script>
import {base} from "@/pubulic/config";
import common from "@/pubulic/common"
export default {
  name: "",
  data: () => ({
    messages:"",
    arrs:[]
  }),
  props: ['chatMessage','chatMAIN','chats'],
  created(){
      let url = base.baseUrl;
      let _this = this;
      this.$http.get(url+"/data/static/v4/?face").then(function(data){
        if(data.status>=200&&data.status<300){
          let message = data.body.dataInfo.face.d;
          this.renderMessage(message)
        }
      }.bind(this))
  },
  methods: {
    renderMessage(message) {
      var _this= this;
      let url = base.baseUrl+"/resource/";
      let map ={};
     //console.log(this.faceData)
      message&&message.forEach(function(obj,index){
        obj['fs'].forEach(function(item,i){
            map[item['c']] ={"flag":item['f'],"pic":item['p']};
        })
      })

    let str = common.replace_html(this.chatMessage);
    //console.log(str)
    for(let val in map){
      if(val&&map[val]){
        let  reg = val.replace("[","\\[").replace("]","\\]");
        //console.log(url+map[val]["pic"])
        var iSRC = url+map[val]["pic"];
//var r = new RegExp(reg,"g");
        //_this.arrs.push(str.match(r))
        str = str.replace(new RegExp(reg,"g"),'<img style="with:32px;height:32px;" src="'+iSRC+'" />');

      }

    }
    this.$nextTick(()=>{
        _this.messages = str;
    })


    }
  },

  watch:{
    // messages:{
    //   handler(){
    //   this.$nextTick(()=>{
    //     console.log(this.chatMain);
    //
    //         this.chatMain.scrollTop = this.chats.scrollHeight;
    //   })
    // },
    // deep:true


  //},

  }
}
</script>
<style  scoped>
.chatMessage{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 5px;
  font-size: 24px;
  word-break: keep-all;
}
.chatMessage img{
  width: 32px;
  height: 32px;
}
</style>
