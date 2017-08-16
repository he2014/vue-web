<template>
  <div class="header">
    <div class="headerContaner">
       <img src="../../assets/img/7nujoom.png"/>
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
       height: 88px;
       display: flex;
       justify-content: center;
       align-items: center;
       text-align: center;
       font-size: 68px;
     }
     .headerContaner{
       display: flex;
       justify-content: center;
       align-items: flex-end;
     }
</style>
