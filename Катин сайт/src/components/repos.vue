<template>
    <div role="tablist">
        <div v-for="(rep, i) in repos" :key=i>
            <b-card class="mb-1">
                <b-card-header v-b-toggle="'id-repos-accordion-' + i">
                    <b-btn block href="#"  variant="info">{{rep.name}}</b-btn>
                </b-card-header>
                <b-collapse :id="'id-repos-accordion-' + i">
                    <b-card-body>
                        <p class="card-text">
                            {{rep.name}}
                        </p>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name:'repos',
    props:{repos:Array},
}
</script>

<style scoped>

</style>