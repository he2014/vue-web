<template>
  <div id="myApp">
    <router-view></router-view>
  </div>
</template>

<script>

import headerContent from './components/header/header';
export default {
  name:'app',
   components:{
    //  headerContent
   }
}
</script>

<style scoped>
#myApp {
  width: 750px;
  overflow:hidden;
}

</style>
