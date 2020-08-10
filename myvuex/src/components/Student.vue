<template>
    <div id="student">
<h1>student</h1>
<ul>
    <li v-for="(item , index) in newStudent" :key="index">
      <h4>  {{item.name }}   {{item.age }}   {{item.department }}  </h4>
    </li>
</ul>
    </div>
</template>

<script>
export default {
       computed:{
           student(){
               return this.$store.state.names
           },
           newStudent(){
               return this.$store.getters.modifiedInfo
           }
       }
}
</script>
