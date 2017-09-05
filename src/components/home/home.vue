<template>
  <div id="" class="home">
      <header-content ></header-content>
      <popup v-show="showpop"></popup>
      <router-view ></router-view>
      <footers></footers>

  </div>
</template>
<script>
import headerContent from '../header/header'
import container from '../container/indexcontainer'
import footers from '../footer/footer'
import popup from "@/components/popup/popup";
export default {
  name: "home",
  data(){
    return {
      isShow:"",
    }
  },
  components: {
    headerContent,
    footers,
    popup

  },

  computed:{
    showpop(){
      return this.$store.getters.getShow;
    }
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
