import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    msg: [],
  },
  mutations: {
    add(state, car) {
      state.msg=JSON.parse(localStorage.getItem('key')||'[]')
       var a =true
      state.msg.some(res => {
        if (res.id == car.id) {
          state.msg[0].count+=car.count
          a =false
          console.log(state.msg);
        }
      })
      if(a){
        console.log(state.msg);
        state.msg.push(car)
      }
      localStorage.setItem('key',JSON.stringify(state.msg))
    }
  },
  getters:{
    
  }
})
