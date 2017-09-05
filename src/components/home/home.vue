<template>
  <div id="" class="home">
      <header-content></header-content>
      <popup v-show="isShow"></popup>
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
  data: () => ({
      isShow:"",
  }),
  components: {
    headerContent,
    // container,
    footers,
    popup

  },
  created() {
    //do something after creating vue instance
    this.isShow=this.$store.getters.getShow;
    console.log(this.isShow)
  },
  mounted() {
    //console.log()

    //do something after mounting vue instance

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
