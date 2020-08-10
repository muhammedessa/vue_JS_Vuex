<template>
  <b-row>
    <b-col cols="12">
      <h2>
       Employees List
        <b-link href="#/add-employee">(Add employee)</b-link>
      </h2>


      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">department</th> 
      <th scope="col">action</th> 
    </tr>
  </thead>
  <tbody  v-for="item in employees" :key="item.message">
        
    <tr> 
      <th scope="row">{{item.key}}</th>
      <td>{{item.name}}</td>
      <td>{{item.department}}</td> 
      <td> <button  type="button" class="btn btn-danger" @click="details(item.key)">info</button></td> 
    </tr>  
      
  </tbody>
</table>

      
    </b-col>
  </b-row>
</template>
 
<script>
 
import firebase from '../Firebase'
import router from '../router'
 
export default {
  name: 'EmployeeList',
  data () {
    return {
      fields: {
        name: { label: 'Name', sortable: true, 'class': 'text-left' },
        department: { label: 'Department', sortable: true, 'class': 'text-left' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      employees: [],
      errors: [],
      ref: firebase.firestore().collection('employees'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.employees = [];
      querySnapshot.forEach((doc) => {
        this.employees.push({
          key: doc.id,
          name: doc.data().name,
          age: doc.data().age,
          department: doc.data().department
        });
      });
    });
  },
  methods: {
    details (employee) {
      router.push({ name: 'ShowEmployee', params: { id: employee  }})
    }
  }
}
</script>
 
<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>