<template>
  <div id="">
      <header-content></header-content>
      <container></container>
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
    container,
    footers
  }

}
</script>
<style scoped>
</style>
