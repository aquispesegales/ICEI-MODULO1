<template>
  <header>
    <h3>Productos</h3>
  </header>

  <section>
    <button type="submit" @click="nuevo()">REGISTRAR</button>

    <table v-if="!registroNuevo">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in lstProductos">
          <td>{{ item.guitarraId }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ item.costo }}</td>
          <td> <img class="img-fluid" src="../assets/guitarra_01.jpg" alt="imagen guitarra"></td>
          <td>
            <button @click="editar(item)">Editar</button>
            <button @click="eliminar(item.guitarraId)">Eliminar</button>
           
          </td>
        </tr>
      </tbody>
    </table>
    <FormRegistroActualizacionGuitarra :objProducto="objProducto" v-else @cerrar="cerarFormulario" ></FormRegistroActualizacionGuitarra>
  </section>
</template>
<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue';
const registroNuevo = ref(false);
import FormRegistroActualizacionGuitarra from '../components/FormRegistroActualizacionGuitarra.vue'
const lstProductos = ref([]);
let objProducto = ref({});
const editar=(item:any)=>{
  objProducto.value = item;
  abrirFormulario();
}
const nuevo = ()=>{
  objProducto.value = {};
  abrirFormulario();
}
const abrirFormulario = () => {
  registroNuevo.value = true;
}
const cerarFormulario = () => {
  registroNuevo.value = false;
}
onMounted(async () => {
  cargarProducto();
});

const eliminar = async (guitarraId:any) =>{
  await axios.delete(`https://quickpay.com.bo:9080/api/prueba-guitarra/eliminar/${guitarraId}`);
  cargarProducto();
}

const cargarProducto = async () =>{
  const res: any = await axios.get(`https://quickpay.com.bo:9080/api/prueba-guitarra/obtener-todos`);
  lstProductos.value = res.data.result;
}
</script>
<style scoped >  

button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #2980b9;
  }

  img {
    width: 50px;
  }

  header {
    background-color: #fff;
    color: #1f4680;
    text-align: center;

    font-size: 2em;
  }

  section {
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th,
  td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #3469fd;
  }

  th {
    background-color: #3498db;
    color: #fff;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
</style>

