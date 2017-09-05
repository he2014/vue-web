<template>
  <div class="header">
    <div class="headerContaner">
       <img v-show="headerShow" src="../../assets/img/7nujoom.png"/>
       <div class="reheader" v-show="!headerShow">
           <div class="reheaderLeft">
             <img src="../../assets/img/logo@2x.png" />
             <img src="../../assets/img/7nujoom@2x.png"/>
           </div>
           <div class="reheaderRight" @click="showpop">
             <img src="../../assets/img/down@2x.png" />
           </div>
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
  computed:{
    headerShow(){
      return this.$store.getters.getHeader;
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
     .reheader{
       position: fixed;
       top: 0;
       left: 0;
       width: 750px;
       height: 100px;
       background: rgba(0,0,0,.65);
       display: flex;
       justify-content: space-between;
       align-items: center;
     }
     .reheaderLeft{
       padding-left: 20px;
     }
      .reheaderLeft img:nth-child(1){
        margin-right: 4px;
      }
     .reheaderRight{
       padding-right: 32px;
     }
</style>
