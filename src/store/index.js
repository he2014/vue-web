import Vue from 'vue'
import Vuex from 'vuex'
import  mutations from './mutations'
import * as actions from './action'
import * as getters from './getters';
Vue.use(Vuex);

const state = {
  device:"",
	isShow:'false'
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters

})
