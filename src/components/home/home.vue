<template>
  <div id="" class="home">
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
<style >
html, body, div, span, applet, object, iframe, h1, h2, h3,
h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address,
big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, table, caption, tbody, tfoot,
thead, tr, th, td ,i,span,img{
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  direction: inherit;
  font-weight: inherit;
  font-style: normal;
  font-size: 100%;
  font-family: HelveticaNeue !important;
  vertical-align: baseline;
}
.home{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
