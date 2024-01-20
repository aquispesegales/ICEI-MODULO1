<template>

    <!--bindear clases-->
    <p :class="{'danger':hasError}" >El mensaje se ha enviado correctamente</p>

    <!--bindear estilos-->
    <p :style="{backgroundColor:'#ccc',color:c}" >El mensaje se ha enviado correctamente</p>

    <button @click="handleClick()" >Cambair Color </button>


</template>
<script setup>
import {ref} from 'vue';
let hasError = true;
let c = ref('#fff');
const handleClick = () =>{
    c.value = '#ff0000';
}
</script>
<style scoped>
.danger{
    color: red;
}
</style>