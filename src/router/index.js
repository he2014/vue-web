import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import homeContent from '../components/home/home';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
  {
    path: '/',
    component: homeContent
}

  ]
});
