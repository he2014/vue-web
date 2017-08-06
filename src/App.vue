<template>
  <div id="myApp">
      <header-content></header-content>
  </div>
</template>

<script>

import headerContent from './components/header/header';
export default {
  name:'app',
   components:{
     headerContent
   }
}
</script>

<style>
#myApp {
  width: 750px;
  overflow:hidden;
}
html,body{
  margin: 0;
  padding: 0;
}
</style>
