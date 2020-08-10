<template>
    <div>
        <h1>{{message}}</h1>
         <h1>{{message2}}</h1>
         <button @click="changeTitle">Change title</button>

         <input type="text" v-model="searchData">

         <div class="post" v-for="(post,id) in findData" :key="id" >
             <h3> {{ post.title}}</h3>
             <p>{{post.body}}</p>
         </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name:'Muhammed',

    data (){
        return{
             message: 'Hello from muhammed component',
               message2: 'Hi everyone',
               posts:[],
               searchData:''
        }
    },
        computed:{
            findData(){
                return this.posts.filter(post =>{
                    return post.title.match(this.searchData)
                })
            }
    },
    methods:{
changeTitle(){
    this.message2 = "Hi Osama"
}
    },
    created(){
        //    alert('created')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.posts = res.data
           // console.log(res.data);
        }).catch(e=>{
            console.log(e);
        })
    },
    beforeCreate(){
alert('beforeCreate')
    },
    // beforeUpdate(){
    //     alert('beforeUpdate')
    // }
}
</script>

<style>

</style>