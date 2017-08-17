<template>

  <div id="footer" class="footerOut">
      <div class="footer">
          <div class="footerLeft">
            <img src="../../assets/img/logo@2x.png" />
            <img src="../../assets/img/7nujoom@2x.png"/>
          </div>
          <div class="footerRight">
            <img src="../../assets/img/down@2x.png" />
          </div>
      </div>
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
     .footerOut{
       height: 100px;
     }
     .footer{
       position: fixed;
       bottom: 0;
       left: 0;
       width: 750px;
       height: 100px;
       background: rgba(0,0,0,.65);
       display: flex;
       justify-content: space-between;
       align-items: center;
     }
     .footerLeft{
       padding-left: 20px;
     }
      .footerLeft img:nth-child(1){
        margin-right: 4px;
      }
     .footerRight{
       padding-right: 32px;
     }
</style>
