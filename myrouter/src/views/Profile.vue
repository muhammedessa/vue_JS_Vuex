 <template>
    
    <div class="profile">
        <h1>Profile</h1>
        <h1>{{userid}}</h1>
    </div>
</template>

<script>
export default {
    data (){
        return{
            userid:this.$route.params.userid
        }
    },
    methods:{
         checkID(){
             this.userid = this.$route.params.userid 
         }
    },
    watch:{
         $route : 'checkID'
    }
}
</script>


<style>

</style>