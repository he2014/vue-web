<template>
  <div class="badge">
      <img v-for="elem in badgeList" :key="elem.key" :src="elem" />
  </div>
</template>
<script>
import {base} from "@/pubulic/config";
export default {
  name: "",
  data: () => ({
    badgeList:[]
  }),
  props:['badge','badgeDatas'],
  created(){
  console.log(this.badgeDatas)
    let url = base.baseUrl;
    this.$http.get(url+"/data/static/v4/?badge").then(function(data){
    //  console.log(data)
      if(data.status>=200&&data.status<300){
        this.url = url+"/resource/";
        let badge = data.body.dataInfo.badge.d;
        this.badge&&this.badge.forEach(function(val,i){
            if(badge[val])
            this.badgeList.push(this.url+badge[val]["p"])
        }.bind(this))
      }

    }.bind(this))
    //do something after creating vue instance

  },
  mounted() {
    //do something after mounting vue instance

  }
}
</script>
<style  scoped>
    .badge{
      display: flex;
      justify-content: flex-start;

    }
    img{
      width: 32px;
      height: 32px;
      margin-left: 5px;
      margin-top: 5px;
    }
</style>
