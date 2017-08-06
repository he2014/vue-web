<template>
  <div class="container">
      {{message}}
  </div>
</template>
<script>
export default {
  name: "container",
  data: () => ({
        message:'container'
  })
}
</script>
<style  scoped>
  .container{
     width:750px;
     height: 1000px;
     background: red;
  }
</style>
