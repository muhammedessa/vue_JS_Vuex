<template>
    <div>
  <b-nav>
    <b-nav-item active>  <router-link to="/">Home</router-link> |</b-nav-item>
    <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
     <b-nav-item> <a @click="logout()">Logout</a>  </b-nav-item> 
  </b-nav>
</div>
</template>

<script>
export default {
    methods:{
        logout(){
            this.$store.dispatch('logout')
        }
    }
}
</script>

<style scoped>

</style>