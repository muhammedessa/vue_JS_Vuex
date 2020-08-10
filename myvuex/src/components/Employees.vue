<template>
    <div id="employees">
<h1>employees</h1>
<ul>
    <li v-for="(item , index) in newEmployees" :key="index">
      <h4>  {{item.name }}   {{item.age }}   {{item.department }}   {{item.salary }}  </h4>
    </li>
</ul>
<button v-on:click="addToSalary"> add</button> | 
<button v-on:click="subFromSalary"> Sub</button>
    </div>
</template>

<script>
export default {
     computed:{
           employees(){
               return this.$store.state.names
           },
           newEmployees(){
                 return this.$store.getters.modifiedEmployee
           }
       },
       methods:{
           addToSalary(){
                this.$store.commit('increateSalary') 
           },
           subFromSalary(){
                this.$store.dispatch('decreateSalary') 
           }
       }
}
</script>
