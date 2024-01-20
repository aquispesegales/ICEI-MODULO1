<template>
  <div style="text-align: center;">
    <button class="btnMostrar" @click="mostrarComponente = !mostrarComponente">{{ mostrarComponente?'Ocultar Componente':'Mostrar Componente' }}</button><br>

  </div>
  <br>
  
  <div class="div-comp">
    <PruebaCicloVidaComonent v-if="mostrarComponente"></PruebaCicloVidaComonent>
    <h4 v-else>No se ha mostrado componente</h4>
  </div>

</template>
<script setup>

import {ref} from 'vue'
const mostrarComponente = ref(false);

import PruebaCicloVidaComonent from '../src/components/PruebaCicloVidaComonent.vue'



</script>
<style scoped>
.div-comp {
  text-align: center;
  width: 500px;
  padding: 10px;
  
  margin-top: 20px;
  border:  solid red 1px;
}
.btnMostrar {
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
