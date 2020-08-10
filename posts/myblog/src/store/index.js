import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router  from '../router/index'
Vue.use(Vuex)

fb.postsCollection.orderBy('createOn' ,'desc')
.onSnapshot(snapshot=>{
  let postArray = []
  snapshot.forEach(doc => {
    let post = doc.data()
    post.id = doc.id
    postArray.push(post)
    
  })
  console.log(postArray)
  store.commit('setPosts' , postArray)
})

const store =  new Vuex.Store({
  state: {
    userProfile: {},
    posts:[]
  },
  mutations: {
    setUserProfile(state , val){
      state.userProfile = val
    },
    setPosts(state , val){
      state.posts = val
    }
  },
  actions: {
   async login({dispatch} , form){
      const { user } = await fb.auth
      .signInWithEmailAndPassword(form.email,form.password )
      dispatch('fetchUserProfile', user)  
    },
   async signup({dispatch} , form){
      const { user } = await fb.auth
      .createUserWithEmailAndPassword(form.email,form.password )
  
      await fb.userCollection.doc(user.uid).set({
        name: form.name,
        title: form.title
      })

      dispatch('fetchUserProfile', user)  

    },
    async fetchUserProfile({commit}, user){
      const userProfile = await fb.userCollection
      .doc(user.uid).get()
      commit('setUserProfile', userProfile.data())  
      if (router.currentRoute.path === '/login') {
        router.push('/')
      }

    },

    async logout({commit}){
      await fb.auth.signOut()
      commit('setUserProfile',{})
      router.push('/login')
    },

    async createPost({state} ,post){

      fb.postsCollection.add({
        createOn: new Date(),
        content: post.content,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.name
      })
    }
  },
  modules: {
  }
})

export default store