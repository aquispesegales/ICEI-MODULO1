<template>
    <h3>{{ contador }}</h3>
    <button type="button" @click="click()">AUmentar Contador</button>
  </template>


  <script setup>
  import {onBeforeMount,  onMounted, onBeforeUpdate,onUpdated,  onBeforeUnmount, onUnmounted, onActivated, onDeactivated,ref} from 'vue'

  const contador = ref(0);
  
  const click = () =>{
    contador.value++;
  }
  // Before Created y Created
  console.log("Se ejecuta en el momento de la ccreacion del componente")
  

  // para montado componente
  onBeforeMount(()=>{
    console.log("antes de montar el componente ")
  })
  
  onMounted(()=>{
    console.log("montado del componente")
  });

// modificaion en compoennte
  onBeforeUpdate(()=>{
    console.log("antes de actualizar el componente")
  })
  
  onUpdated(() => {
    console.log("cuando el componente de se actualiza")
  });
  


  // destruir el compomente
  onBeforeUnmount(()=>{
    console.log("antes de desmontar el componente")
  })
  onUnmounted(() => {
    console.log("desmontar el componente")
  });
  




  // funciona con componentes DInamicaos se va ver mas adelante 
  onActivated(()=>{
    console.log("Activated")
  })
  onDeactivated(()=>{
    console.log("Deactivated")
  })
  // =================================

  
  </script>






  <style scoped>
  </style>
  