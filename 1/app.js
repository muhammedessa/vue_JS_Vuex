new Vue({
    el:'#app',
    data:{
        firstname:'Ahmed ',
        lastname:'Essa',
        age:30,
        salary: 3000,
        classes:['blue' , 'underline'],
        googlewebsite : 'https://www.google.com',
        name:'Omer Ali',
        selected:'',
        type:true,
        type1:'A',
        items:['Muhammed','Ahmed','Osama','Hassan','Falah'],
        students : [
            {name:'Muhammed' , age:22 , department:'IT'},
            {name:'Salah' , age:33 , department:'Java'},
            {name:'Hassan' , age:55 , department:'Python'},
            {name:'Kadhim' , age:66 , department:'VueJS'},
            {name:'Samir' , age:77 , department:'NodeJS'}
        ]
    },
    methods:{
        myName(){
            return 'Muhammed Essa'
        },
        myNextName(){
            return   this.salary
        },
        putYourName(name){
            return  name +  this.salary
        },
        changeSalary(increase){
            this.salary += increase 
        },
        say(message) {
            alert(message)
          },
          messageClick(){
            alert('Hello World') 
          },
          changeType(){
             this.type = !this.type;
          }
    }
})