<template>
 <div class="HR">
     <h2>HR team</h2>
      <div v-for="(item, index) in HR"  v-bind:key="index" >
         <p  v-if="item.department == 'HR'"> 
             {{item.name }}
             {{item.age }}
    
             <button v-on:click="deleteHR(item.name)">
               Delete
                </button> 
         </p>
     </div>
 </div>
</template>


<script>
export default {
    name:'HR',
      props:['HR'],
      methods:{
          deleteHR(name){
          this.$emit('delete',{name})
           
          }
      }
}
</script>

<style lang="stylus">

</style>