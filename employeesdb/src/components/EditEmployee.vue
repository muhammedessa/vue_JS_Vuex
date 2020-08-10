<template>



<div class="container">
  <div class="row">
    <div class="col-sm">
      <h2>
        <h2>
        Edit Employee
        <router-link :to="{ name: 'ShowEmployee', params: { id: key } }">(Show Employee)</router-link>
      </h2>
      </h2>
    </div>
    <div class="col-sm">
     <form  @submit="onSubmit">
  <div class="form-group">
    <label for="">name </label>
    <input type="text"  v-model.trim="employee.name"  >
  </div>
    <div class="form-group">
    <label for="">department </label>
    <input type="text"   v-model="employee.department"  >
  </div>  

      <div class="form-group">
    <label for="">age </label>
    <input type="text"   v-model="employee.age"  >
  </div>
   
 
  <button type="submit" class="btn btn-primary">update</button>
 </form>

    </div>
   
  </div>
</div>

 
</template>
 
<script>
 
import firebase from '../Firebase'
import router from '../router'
 
export default {
  name: 'EditEmployee',
  data () {
    return {
      key: this.$route.params.id,
      employee: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('employees').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.employee = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('employees').doc(this.$route.params.id);
      updateRef.set(this.employee).then(() => {
        this.key = ''
        this.employee.title = ''
        this.employee.description = ''
        this.employee.author = ''
        router.push({ name: 'ShowEmployee', params: { id: this.$route.params.id }})
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>
 
<style>
  .jumbotron {
    padding: 2rem;
  }
</style>