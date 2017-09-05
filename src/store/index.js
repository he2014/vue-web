import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './action'
import * as getters from './getters';
Vue.use(Vuex);

const state = {
  device:""
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters

})
