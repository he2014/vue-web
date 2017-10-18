<template>
  <div id="myApp">
    <router-view></router-view>
  </div>
</template>

<script>
import common from "@/pubulic/common";
import headerContent from './components/header/header';
export default {
  name:'app',
   components:{
    //  headerContent
  },
  beforeCreate() {
    //do something before creating vue instance
  },
  created() {
      this.$store.dispatch("setDevice",common['device']());
    //do something after creating vue instance
  }


}
</script>

<style>
@@font-face {
   font-family: "HelveticaNeue";
   src:url("/src/assets/font/HelveticaNeue.dfont");
}
html, body, div, span, applet, object, iframe, h1, h2, h3,
h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address,
big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, table, caption, tbody, tfoot,
thead, tr, th, td ,i,span,img,b{
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  direction: inherit;
  font-weight: inherit;
  font-style: normal;
  font-size: 100%;
  font-family: HelveticaNeue;
  vertical-align: baseline;
  list-style: none;
  text-decoration:none;
}
#player{
  position: absolute;
}
#myApp {
  width: 750px;
  overflow:hidden;
}
.IIV::-webkit-media-controls-play-button,
.IIV::-webkit-media-controls-start-playback-button {
            opacity: 0;
            pointer-events: none;
            width: 5px;
}

</style>
