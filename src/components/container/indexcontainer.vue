<template>
  <div class="container">
      <div class="live-title">
        <div class="live-titleLeft">
           <img v-bind:scr="../../../static/img/tab_live_btn_pres.png"/>
           <span>Live</span>
        </div>
        <div class="live-titleRight">
          <span>more</span>
          <img v-bind:src="../../../static/img/moreIcon.png"/>
        </div>
      </div>
      <ul>
          <li v-for="(item,index) in list" key={{index}}>
              <img v-bind:src="{{item['pic']}}"/>
          </li>
      </ul>
  </div>
</template>
<script>

export default {
  name: "container",
  data: () => ({
        message:'container',
        list:[]
  }),
mounted() {
  //do something after mounting vue instance
  this.$http.get("/news/index").then(function(res){
    let data = res['body'];
    if(data['code']==0)
     this.list = data['dataInfo'];
  }.bind(this))
}

}
</script>
<style scoped>

  .container{
     width:750px;
     overflow: hidden;
     flex: 1;
  }
</style>
