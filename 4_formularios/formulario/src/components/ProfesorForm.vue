<template>
    <div>
        {{ objDatosPersonas }}
        <h1>Datos Personas</h1>
        <div> <label>Nombre:</label> <input type="tex"  v-model="objDatosPersonas.nombres" /> </div>
        <div> <label>Apellidos:</label> <input type="tex" v-model="objDatosPersonas.apellidos" /> </div>
        <div> <label>CI:</label> <input type="tex" v-model="objDatosPersonas.ci" /> </div>
        <div> <label>Expedición:</label>
            <select v-model="objDatosPersonas.expedicion">
                <option v-for="depto in  departamento" :value="depto.id" >{{ depto.descripcion }}</option>
            </select>
        </div>
        <input type="checkbox" v-model="objDatosPersonas.datoVeridico" /> Declaro que los datos son veridicos?
        <div> <button type="button" @click="clickAgregarDatosPersona()"  >Agregar </button> </div>
    </div>
    <br>
    <p>&nbsp;</p>
    <br>
    <div>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>CI</th>
                <th>Expedición</th>
                <th>Declaro los datos veridicos?</th>
                <th>Acción</th>
            </tr>
            <tr v-for="datosPersona in  lstDatosPersonas">
                <td>{{ datosPersona.nombres }}</td>
                <td>{{ datosPersona.apellidos }}</td>
                <td>{{ datosPersona.ci }}</td>
                <td>{{ datosPersona.expedicion }}</td>
                <td>{{ datosPersona.datoVeridico }}</td>
                <td></td>
            </tr>
        </table>
    </div>
</template>
<script setup>
import {reactive,ref} from 'vue'
let departamento = ([
    {
        id: "SC",
        descripcion: "Santa Cruz"
    },
    {
        id: "LP",
        descripcion: "La Paz"
    },
    {
        id: "CB",
        descripcion: "Cochabamba"
    },
    {
        id: "OR",
        descripcion: "Oruro"
    }
]);
let lstDatosPersonas = ref([]);
let objDatosPersonas = reactive({
    nombres:"",
    apellidos:"",
    ci:"",
    expedicion:"",
    datoVeridico:false
});

const clickAgregarDatosPersona = () =>{

    

    let datosPersona = {};
    datosPersona =  Object.assign({}, objDatosPersonas);  // como clonar enjava script https://laracasts.com/discuss/channels/vue/creating-non-reactive-copies-of-vue-data

    if(!datosPersona.nombres || !datosPersona.ci){
        alert('Nombre y CI debe ser Obligatorio')
        return;
    }

    lstDatosPersonas.value.push(datosPersona);
    limpiarDatoPersona();



}
const limpiarDatoPersona = () =>{
    objDatosPersonas.nombres = "";
    objDatosPersonas.apellidos = "";
    objDatosPersonas.ci = "";
    objDatosPersonas.expedicion = "";
    objDatosPersonas.datoVeridico = false;
}

</script>
<style scoped>
table {
    border-collapse: collapse;
}

table,
th,
td {
    border: 1px solid;
}</style>