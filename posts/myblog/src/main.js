import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {auth} from './firebase'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false


let app
auth.onAuthStateChanged(user =>{
  if(!app){
app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
  }
  if(user){
    store.dispatch('fetchUserProfile', user)
  }
})


