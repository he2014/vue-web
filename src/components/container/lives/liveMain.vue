<template>
  <div  @click='add()'>
{{mas}}
  </div>
</template>
<script>
export default {
  name:"liveMain",
  data: () => ({
      mas:"oweoeoe"
  }),
  created() {
    //do something after creating vue instance
    this.$store.dispatch("setHeader",false);
  },
methods: {
  add(evebt) {
      console.log(event)
  }
},
}
</script>
<style scoped>
</style>
