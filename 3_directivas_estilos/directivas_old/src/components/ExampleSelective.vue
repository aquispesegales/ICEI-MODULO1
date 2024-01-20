<template>
    
    <!-- este no se muestra e el dom-->
    <!--<h1 v-if="edad<18">Eres menor de edad</h1>
    <h1 v-else >Eres mayor de edad</h1>-->

    <!-- este no tiene el v-else   se muestra en dom pero no s eve por q dienes un css que no le deja-->
    <h1 v-show="edad<18">Eres menor de edad</h1>
    <h1 v-show="edad>=18" >Eres mayor de edad</h1>


</template>
<script  setup>
let edad = 18
</script>
<style scoped>
</style>