<template>
  <div id="" class="home">
      <header-content></header-content>
      <router-view ></router-view>
      <footers></footers>
  </div>
</template>
<script>
import headerContent from '../header/header'
import container from '../container/indexcontainer'
import footers from '../footer/footer'
export default {
  name: "home",
  data () {
       return{

       }
  },
  components: {
    headerContent,
    // container,
    footers
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
