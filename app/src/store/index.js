import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: JSON.parse(localStorage.getItem('key')||'[]'),
  },
  mutations: {
    add(state, car) {
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
     key(state){
       var a =0;
      state.msg.forEach(res=>{
         a+=res.count
      })
      return a
     }
  }
})
