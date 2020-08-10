import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 
export const store = new Vuex.Store({
    state:{
        names:  [
            {name:'Muhammed Essa', age:36, department:'VueJs developer' ,salary:4000},
            {name:'Ahmed Essa', age:30, department:'Python developer' ,salary:3000},
            {name:'Osama Essa', age:39, department:'Java developer' ,salary:6000},
            {name:'Ali Essa', age:41, department:'Laravel developer' ,salary:8000},
          ]
    },
    getters:{
        modifiedInfo:state =>{
            let infoPerson = state.names.map(x =>{
                return{
                    name: 'Name: ' + x.name ,
                    age: 'Age: ' + x.age,
                    department: 'Department: ' + x.department 
                }
            })
            return infoPerson
        },
        modifiedEmployee:state =>{
            let infoPerson = state.names.map(x =>{
                return{
                    name: 'Name: ' + x.name ,
                    salary: 'Salary: ' + x.salary 
                }
            })
            return infoPerson
        }
    },
    mutations:{
        increateSalary:state=>{
            return  state.names.forEach(x=>{
                x.salary += 200;
        })},
        decreateSalary:state=>{
            return  state.names.forEach(x=>{
                x.salary -= 200;
        })},
      
    },
    actions:{
        decreateSalary:context =>{
            setTimeout(function() {
                context.commit('decreateSalary') 
            },3000)
        }
    }
})