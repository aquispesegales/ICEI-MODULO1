<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter()">Agregar</button>
</template>
<script  setup>
import {ref} from 'vue'
const counter = ref(0)
const addCounter = () =>{
    counter.value ++;
}
</script>
<style scoped>
</style>