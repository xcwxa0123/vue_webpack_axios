import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isManager: false,
    countdownValue: 30
  },
  getters: {
    isManager: state => state.isManager,
    countdownValue: state => state.countdownValue + 1
  },
  mutations: {
    isManagerFn(state, flag) {
      state.isManager = flag;
    },
    countdownValueFn(state, value) {
      state.countdownValue = value;
    }
  },
  actions: {
    countdownValueAsync({commit},{value}){
      setTimeout(() => {
        console.log('commit',commit);
        console.log('value',value);
        commit('countdownValueFn',value);
        console.log('提交力');
        console.log("state.countdownValue", store.state.countdownValue);
      }, 1000);
      // let i = 1;
      // setInterval(() => {
      //   commit('countdownValueFn');
      //   console.log('提交力', i++);
      // }, 2000);
    }
  }
});
export default store;
