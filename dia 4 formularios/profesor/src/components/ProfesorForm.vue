<template>
 <div>
        <h1>Datos Personas</h1>
        <div> <label>Nombre:</label> <input type="tex" v-model="objDatosPersonas.nombres" />  </div>
        <div> <label>Apellidos:</label>  <input type="tex" v-model="objDatosPersonas.apellidos"/> </div>
        <div> <label>CI:</label> <input type="tex" v-model="objDatosPersonas.ci"/> </div>
        <div> <label>Expedición:</label>
            <select v-model="objDatosPersonas.expedicion">
                <option v-for="depto in departamento" :value="depto.id">{{ depto.descripcion }}</option>
            </select>
        </div>
        <input type="checkbox" v-model="objDatosPersonas.datoVeridico" /> Declaro que los datos son veridicos?
        <div>  <button type="button" @click="clickAgregarDatosPersona()" >Agregar </button> </div>
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
            <tr v-for="datoPersona in lstDatosPersonas" >
                <td>{{ datoPersona.nombres }}</td>
                <td>{{ datoPersona.apellidos }}</td>
                <td>{{ datoPersona.ci }}</td>
                <td>{{ datoPersona.expedicion }}</td>
                <td>{{datoPersona.datoVeridico}}</td>
                <td></td>
            </tr>
        </table>
    </div>
</template>
<script  setup>
import { ref } from 'vue';
let departamento = ref([
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
let objDatosPersonas = ref({
    nombres:"",
    apellidos:"",
    ci:"",
    expedicion:"",
    datoVeridico:false
});

let lstDatosPersonas = ref([]);

const clickAgregarDatosPersona = () =>{
    const copy =  Object.assign({}, objDatosPersonas.value);  // como clonar enjava script https://laracasts.com/discuss/channels/vue/creating-non-reactive-copies-of-vue-data
    lstDatosPersonas.value.push(copy);
    limpiarDatoPersona();
}
const limpiarDatoPersona = () =>{
    objDatosPersonas.value.nombres = "";
    objDatosPersonas.value.apellidos = "";
    objDatosPersonas.value.ci = "";
    objDatosPersonas.value.expedicion = "";
    objDatosPersonas.value.datoVeridico = false;
}
</script>
<style scoped>
table {
  border-collapse: collapse;
}
table, th, td {
  border: 1px solid;
}
</style>