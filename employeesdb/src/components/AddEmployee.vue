 <template>

 <div class="container">
  <div class="row">
    <div class="col-sm">
      <h2>
        Add Employee
        <b-link href="#/">(Employees List)</b-link>
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
   
 
  <button type="submit" class="btn btn-primary">Submit</button>
 </form>

    </div>
   
  </div>
</div>
 
    
</template>
 
<script>
 
import firebase from '../Firebase'
import router from '../router'
 
export default {
  name: 'AddEmployee',
  data () {
    return {
      ref: firebase.firestore().collection('employees'),
      employee: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
 
      this.ref.add(this.employee).then(() => {
        this.employee.name = ''
        this.employee.department = ''
        this.employee.age = ''
        router.push({
          name: 'EmployeeList'
        })
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