<template>
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'Muhammed'}">Muhammed</router-link> | 
       <router-link :to="{name: 'Profile'}">Profile</router-link> | 
 
    </div>
</template>

<script>
export default {
 
    
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>