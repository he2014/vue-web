<template>
  <div id="" class="home">
      <popup v-show="showpop" ></popup>
      <router-view ></router-view>
  </div>
</template>
<script>

import container from '../container/indexcontainer'
import popup from "@/components/popup/popup";
export default {
  name: "home",
  data(){
    return {
      isShow:"",
      // show:false
    }
  },
  components: {
    popup
  },
  mounted() {
    //do something after mounting vue instance
    //console.log(this.$route)

  },
  computed:{

    showpop(){
      return this.$store.getters.getShow;
    }
  },
  watch:{

  }
}
</script>
<style scoped >
.home{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
