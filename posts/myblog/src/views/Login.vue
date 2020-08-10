<template>
    <div id='login'>
        <div class="container">

         <div class="row">
             <div class="col">
<b-card
    title="login"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
     <div>
         <h1>Login form</h1>
         <b-form @submit.prevent >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="loginForm.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="loginForm.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
 
      <b-button @click="login()" variant="primary">Submit</b-button> 
    </b-form>
     </div> 
</b-card>   
             </div>

              <div class="col">
                 <b-card
    title="Register"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
     <div>
         <h1>Register form</h1>
         <b-form @submit.prevent >

        <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
        description="We'll never share your info with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="signupForm.name"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

        <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
        description="We'll never share your info with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="signupForm.title"
          type="text"
          required
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="signupForm.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="signupForm.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
 
      <b-button @click="signup()" variant="primary">Submit</b-button> 
    </b-form>
     </div> 
</b-card>
             </div>
         </div>
        </div>
 





 
    </div>
</template>
<script>
export default {
  data(){
    return{
      loginForm:{
        email:'',
        password:''
      },
      signupForm:{
        title:'',
        name:'',
          email:'',
        password:''
      }
    }
  },
  methods:{
    login(){
      this.$store.dispatch('login',{
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
      signup(){
      this.$store.dispatch('signup',{
        email: this.signupForm.email,
        password: this.signupForm.password,
          name: this.signupForm.name,
            title: this.signupForm.title
      })
    }
  }
    
}
</script>
<style scoped>
 
</style>