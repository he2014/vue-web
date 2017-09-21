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
  props:['badgemsg'],
  created(){
  //  console.log(this.badge)

  },
  mounted() {
    let badge = this.$store.getters.getBageData;
    this.url = base.baseUrl+"/resource/";
    badge&&badge.forEach(function(val,i){
        if(this.badgemsg[val])
        this.badgeList.push(this.url+this.badgemsg[val]["p"])
    }.bind(this))
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
