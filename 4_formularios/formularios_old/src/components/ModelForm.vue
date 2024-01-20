<template>
    <form>
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="agree"/>Acepto las condiciones
        <select v-model="pais" >
            <!--  si no se esecifica el value pues toma del label  -->
            <option value="spain" >Spain</option>
            <option value="uk" >UK</option>
            <option value="france" >France</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>
<script  setup>
import {ref} from 'vue'
let inputText = ref('');
let agree = ref(true);
let pais = ref('spain')
</script>
<style scoped>
</style>