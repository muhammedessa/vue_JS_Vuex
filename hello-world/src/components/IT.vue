<template>
 <div class="IT">
     <h2>IT team</h2>
     <div v-for="(item, index) in IT"  v-bind:key="index" >
         <p v-if="item.department == 'IT'"> {{item.name }} {{item.age }}

               <button v-on:click="deleteIT(item.name)">
               Delete
                </button> 
         </p>
    
    </div>
 </div>
</template>


<script>
export default {
       name:'IT',
       props:['IT'],
     methods:{
          deleteIT(name){
          this.$emit('delete',{name})
           
          }
      }
}
</script>

<style lang="stylus">

</style>