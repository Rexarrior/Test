<template>
    <div>
        <div class="split"></div>
            <div id="user">
                <div class="container">
                    <div class="input-group mb-2">
                        <input v-model="name" class="form-control" placeholder="Введите имя">
                        <div class="input-group-append">
                            <button v-on:click="findUser" type="button" class="btn btn-outline-secondary">
                                Найти
                            </button>
                        </div>
                    </div>

                    <hr>

                    <div class="input-group mb-2">
                        <user :data="usrInf.data" v-if="usrInf"/>
                    </div>
            
                    <div>
                        <repos :repos="reposInf" v-if="reposInf"/>
                    </div>

                    
                </div>
            </div> 
    </div>
</template>

<script>
import axios from "axios";
import user from "./user.vue";
import repos from "./repos.vue";
export default {
        data: function() {
            return{
                name: '',
                usrInf: null,
                reposInf:null
            };
        },
        methods: {
            findUser: function() {
                if (this.name !== '') {
                    axios.get('https://api.github.com/users/'+this.name)
                        .then(resp=> {(this.usrInf = resp) })
                    axios.get('https://api.github.com/users/'+this.name+'/repos')
                         .then(resp=> { (this.reposInf = resp.data) })
                     this.name = '';
                }
            }
        },
        components:{
            user,
            repos
        }
}
</script>

<!-- Add "scoped" attribute to limity CSS to this component only -->
<style scoped>
.split {
    margin-top: 1em;
}
</style>
