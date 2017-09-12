import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import homeContent from '../components/home/home';
import liveMain from "@/components/container/lives/liveMain";
import indexcontainer from "@/components/container/indexcontainer";
import videoMain from "@/components/container/video/video";
import chatMain from "@/components/container/chat/chat";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
  {
    path: '/',
    component: homeContent,
    children:[
      {
        path:'/index',
        component:indexcontainer,

      },
      {
        path: '',
        component:indexcontainer,
        redirect:"/index"
      },{
        path:"/live",
        component:liveMain
      },{
        path:"/video",
        component:videoMain
      },{
        path:"/chat",
        component:chatMain
      }


    ]


},

  ]
});
