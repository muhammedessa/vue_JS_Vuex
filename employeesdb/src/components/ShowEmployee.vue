 <template>

 <div class="container">
  <div class="row">
    <div class="col-sm">
      <h2>
          Edit Employee
        <b-link href="#/">(Employees List)</b-link>
      </h2>
    </div>
    <div class="col-sm">
     
  <div class="form-group">
    <label for="">name </label>
    {{employee.name}}
  </div>
    <div class="form-group">
    <label for="">department </label>
    {{employee.department}}
  </div>  

      <div class="form-group">
    <label for="">age </label>
    {{employee.age}}
  </div>

        <div class="form-group">
    <label for="">age </label>
    {{employee.age}}
  </div> 
<button  type="button" class="btn btn-success" @click="editemployee(key)">Edit</button> | 
<button  type="button" class="btn btn-danger" @click="deleteemployee(key)">Delete</button>
    </div>
   
  </div>
</div>

 
</template>
 
<script>
 
import firebase from '../Firebase'
import router from '../router'
 
export default {
  name: 'ShowEmployee',
  data () {
    return {
      key: '',
      employee: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('employees').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.employee = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    editemployee (id) {
      router.push({
        name: 'EditEmployee',
        params: { id: id }
      })
    },
    deleteemployee (id) {
      firebase.firestore().collection('employees').doc(id).delete().then(() => {
        router.push({
          name: 'EmployeeList'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}
</script>
 
<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>