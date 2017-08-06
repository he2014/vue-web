<template>
  <div id="footer" class="footer">
      {{message}}
  </div>
</template>
<script>
export default {
  name: "footer",
  data: () => ({
    message:"footer"
  })
}
</script>
<style  scoped>
     .footer{
       width: 750px;
       height: 100px;
       background: #535335;
     }
</style>
