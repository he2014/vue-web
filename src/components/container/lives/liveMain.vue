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

methods: {
  add(evebt) {
      console.log(event)
  }
}
}
</script>
<style scoped>
</style>
