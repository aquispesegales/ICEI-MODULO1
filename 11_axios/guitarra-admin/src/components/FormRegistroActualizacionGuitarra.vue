<template>
    
    <button @click="volver()">
        Volver
    </button>
    <div>

        <span>Nombre</span>
        <input type="text" v-model="objProducto.nombre"><br>
        <span>Descripcion</span>
        <input type="text" v-model="objProducto.descripcion"><br>
        <span>Costo</span>
        <input type="text" v-model="objProducto.costo">
    </div>
    <button @click="instertOrUpdate()">{{ nombreBoton }}</button>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const emit = defineEmits(['cerrar'])
const nombreBoton = ref('');
/*const props = defineProps({
  objProducto: {
    type:{},
    required:false,
    default:{}
  },
})*/
let obj = ref({
    guitarraId:null,
    nombre: '',
    descripcion: '',
    costo: ''
});
const props = defineProps(["objProducto"]);
onMounted(() => {
    obj.value = props.objProducto;
    nombreBoton.value = obj.value.guitarraId?"Actualizar":"Registrar"
})

const instertOrUpdate = () => {
    if(obj.value.guitarraId){
        //actualizar
        const res = axios.put(`https://quickpay.com.bo:9080/api/prueba-guitarra/modificar`, obj.value);
    }else{
        // insertar
        const res = axios.post(`https://quickpay.com.bo:9080/api/prueba-guitarra/registrar`, obj.value);
    }
    alert('Registro Exitoso');
    volver();

}
const volver = () => {
    emit('cerrar');
}




</script>
<style scoped>
input {
    margin: 3px;


}
</style>