<template>
  <div class="home"> 

<div class="row">
  <div class="col">
    <div class="container">
  <b-card 
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >

  <form @submit.prevent>
 <b-card-text>
      <h1>{{userProfile.name}} - {{userProfile.title}}</h1>
     <textarea name="" id="" cols="30" rows="10" v-model.trim="post.content" ></textarea>
    </b-card-text>

    <b-button href="#" variant="primary" @click="createPost"
    :disabled="post.content===''">Create</b-button>
  </form>
   
  </b-card>
</div>
  </div>
    <div class="col">
    
<div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <div v-if="posts.length">
<div v-for="post in posts" :key="post.id"> 
  <b-card-text>
    <h5>{{post.userName}} </h5>
     <h6>{{post.createOn | formatDate  }}</h6>
     <p>{{post.content | trimLength}}</p>
    </b-card-text>
     <hr>
</div>
  </div>
   
  </b-card>
</div>



  </div>
</div>





  </div>
</template>

<script>
 import moment  from 'moment';
import {mapState} from 'vuex'
export default {
  data(){
    return{
      post:{
        content:''
      }
    }
  },
  computed:{
    ...mapState(['userProfile' , 'posts']) 
  },
  methods:{
    createPost(){
      this.$store.dispatch('createPost' , {content: this.post.content})
      this.post.content = ''
    }
  },
  filters:{
    formatDate(val){
      if (!val) {
        return 'no date'
      }
      let date = val.toDate()
      return moment(date).fromNow()
    },
    trimLength(val){
      if (val.length < 50) {
        return val
      }
      return `${val.substring(0,50)}...`

    }
  }
}
</script>
