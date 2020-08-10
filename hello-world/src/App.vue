<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld  />
    <MuhammedComp/>
     <HRdep  :HR="employees" @delete="deleteEmployee"  />
      <ITdep  :IT="employees"  @delete="deleteEmployee" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MuhammedComp from './components/Muhammed.vue'

import HRdep from './components/HR.vue'

import ITdep from './components/IT.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MuhammedComp,
    HRdep,
    ITdep
  },
    data(){
        return{
            employees:[
                {name:'Muhammed Essa' ,age:33 , department:'HR'},
                {name:'Ahmed Essa' ,age:44 , department:'HR'},
                {name:'Osama Essa' ,age:55 , department:'HR'},
                {name:'Ali Essa' ,age:66 , department:'IT'},
                {name:'Hassan Essa' ,age:77 , department:'IT'},
                {name:'Mustafa Essa' ,age:88 , department:'IT'},
            ]
        }
    },
    methods:{
      deleteEmployee(name){
        this.employees = this.employees.filter(employee =>{
          return employee.name != name.name
        })
      }
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
