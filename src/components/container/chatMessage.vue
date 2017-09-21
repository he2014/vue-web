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
  props: ['chatMessage','chatMessageData'],
  created(){
    this.renderMessage(this.chatMessageData);
  },
  mounted() {
    //console.log(this.chatMessage)
    //console.log(this.chatMessageData)
    //do something after mounting vue instance

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
      console.log(this.$store.getters.getChatData)
    let str = common.replace_html(this.$store.getters.getChatData);
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

  //  this.$nextTick(()=>{
        _this.messages = str;
  //  })


    }
  },

  watch:{
    'this.$store.getters.getChatData'(){

    }
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
