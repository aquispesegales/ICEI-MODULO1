<template>
         <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                <div class="col-4">
                    
                    <img class="img-fluid" :src="'/img/'+guitarra.imagen+'.jpg'"  alt="imagen guitarra">
                    
                </div>
                <div class="col-8">
                    <h3 class="text-black fs-4 fw-bold text-uppercase">{{ guitarra.nombre }}</h3>
                    <p>{{ guitarra.descripcion }}</p>
                    <p class="fw-black text-primary fs-3">${{ guitarra.precio }}</p>
                    <button 
                        type="button"
                        class="btn btn-dark w-100 "
                    >Agregar al Carrito</button>
                </div>
            </div><!-- FIN GUITARRA -->



</template>
<script setup lang="ts">
interface Guitarra {
  id: number,
  nombre: string,
  imagen: string,
  descripcion: string,
  precio: number,

}
const props = defineProps<{
    guitarra:{
        type:Guitarra,
        required:true
    }
}>()



</script>