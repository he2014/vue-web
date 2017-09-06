<template>
    <div class="reheader" >
        <div class="reheaderLeft">
          <img src="../../assets/img/logo@2x.png" />
          <img src="../../assets/img/7nujoom@2x.png"/>
        </div>
        <div class="reheaderRight" @click="showpop">
          <img src="../../assets/img/down@2x.png" />
        </div>
        </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  methods:{
    showpop() {
      this.$store.dispatch('setShow',true);
    }
  }
}
</script>
<style  scoped>
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
