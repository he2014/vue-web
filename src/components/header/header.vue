
<template>
  <div class="header">
    <div class="headerContaner">
       <img  src="../../assets/img/7nujoom.png"/>
     </div>
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

  },
  methods:{
    showpop() {
      this.$store.dispatch('setShow',true);
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
       width: 100%;
       height: 100%;
       display: flex;
       justify-content: center;
       align-items: flex-end;
     }

</style>
