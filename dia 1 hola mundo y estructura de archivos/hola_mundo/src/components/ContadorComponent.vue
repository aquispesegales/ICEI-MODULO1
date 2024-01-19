<template>
    <h3>{{ contador }}</h3>
    <button @click="aumentar()">Aumentar</button>
</template>
<script setup>

import { ref } from 'vue'

let contador = ref(0);

const aumentar = () => {
    contador.value = contador.value + 1;
}
</script>
<style scoped>
h3 {
    color: red;
    font-size: 50px;
}
</style>