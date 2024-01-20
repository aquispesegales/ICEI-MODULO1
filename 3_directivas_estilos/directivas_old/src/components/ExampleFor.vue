<template>
    <ul>
        <li v-for="pais in paises" :key="pais.code">{{ pais.name }}</li>
    </ul>
</template>
<script  setup>
import {ref} from 'vue'
let paises = ref([
    {
        code:"es",
        name:"España"
    },
    {
        code:"en",
        name:"UK"
    },
    {
        code:"fr",
        name:"Francia"
    },
    {
        code:"it",
        name:"Italia"
    },
    {
        code:"pt",
        name:"Portugal"
    }
]);
</script>
<style scoped>
</style>