<template>
  <div class="header">
    <div class="headerContaner">
       {{msg}}
     </div>
  </div>
</template>
<script>
export default {
  name: "header",
  data (){
    return{
      msg:"header"
    }

  }
}
</script>
<style  scoped>
     .header{
       width: 750px;
       height: 100px;
       display: flex;
       justify-content: center;
       align-items: center;
       text-align: center;
       font-size: 68px;
       background: rgba(0, 0, 0, 0.5);
     }
</style>
