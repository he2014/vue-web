<template>
  <div class="reFooter" @click="showpop">
       <img src="../../assets/img/footer-sport.gif">
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
   .reFooter{
     width: 100%;
     height: 200px;
     background: url("../../assets/img/rebottom.png") left center no-repeat;
     background-size: 100%;
     display: flex;
     align-items: center;
     justify-content: flex-start;
   }
    .reFooter img{
      height: 200px;
    }
</style>
