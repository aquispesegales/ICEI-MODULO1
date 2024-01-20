<template>
<form>
    <input type="text" v-model="nombre" >
    <br>
    <h3>{{ nombre }}</h3>
</form>
</template>
<script setup>
import {ref} from 'vue'
let nombre = ref('Alvaro');
</script>
<style scoped>

</style>