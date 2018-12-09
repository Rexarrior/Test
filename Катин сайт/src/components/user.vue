<template>
    <div class="input-group mb-2">
        <div class="usrPic">    
            <img style="width:300px;margin-left: 1em;margin-right: 2em; margin-bottom: 1em;" v-bind:src="data.avatar_url" class="rounded-circle ">
        </div>
        <div>
            <p>Name: {{data.name}}</p>
            <p>Location: {{data.location}}</p>
            <p>Followers: {{data.followers}}</p>
            <p>Following: {{data.following}}</p>
        </div>                        
    </div>
</template>
<script>
export default {
    name:'user',
    props:{data:Object},
}
</script>

<style scoped>

</style>


