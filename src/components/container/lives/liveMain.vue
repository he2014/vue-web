<template>
  <div class="main">
    <new-header></new-header>
    <div class="liveMain">
              <div class="video">
                <div id='player'></div>
              </div>
    </div>
    <recommend></recommend>
    <new-footer></new-footer>
    </div>
</template>
<script>
import newHeader from "@/components/header/newHeader"
import newFooter from "@/components/footer/newFooter"
import recommend from "@/components/container/recommend/recommend"
export default {
  name:"liveMain",
  data: () => ({
      mas:"oweoeoe"
  }),
  components:{
    newHeader,
    newFooter,
    recommend
  },
  created() {
  },
  mounted() {
  },
methods: {

},
}
</script>
<style scoped>
.main{
  width: 100%;
  overflow: hidden;
}
.liveMain{
  width: 100%;
  height: 920px;
}
.IIV::-webkit-media-controls-play-button,
.IIV::-webkit-media-controls-start-playback-button {
            opacity: 0;
            pointer-events: none;
            width: 5px;
}
</style>
