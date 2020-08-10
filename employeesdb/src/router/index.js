import VueRouter from 'vue-router'
import EmployeeList from '@/components/EmployeeList'
import ShowEmployee from '@/components/ShowEmployee'
import AddEmployee from '@/components/AddEmployee'
import EditEmployee from '@/components/EditEmployee' 


export default new VueRouter({
    routes: [
      {
        path: '/',
        name: 'EmployeeList',
        component: EmployeeList
      },
      {
        path: '/show-employee/:id',
        name: 'ShowEmployee',
        component: ShowEmployee
      },
      {
        path: '/add-employee',
        name: 'AddEmployee',
        component: AddEmployee
      },
      {
        path: '/edit-employee/:id',
        name: 'EditEmployee',
        component: EditEmployee
      }
    ]
  })