<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

<employees :employees="names"  ></employees>
 <student  :student="names"  >  </student> 

  </div>
</template>

<script>
import Employees from './components/Employees.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',

data(){
  return{

  }
},


  components: {
    Employees,
    Student
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
