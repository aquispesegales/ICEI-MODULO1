<template>
  <HeaderComponent></HeaderComponent>
  <main class="container-xl mt-5">
    <h2 class="text-center">Nuestra GUITARRAS</h2>
    <div class="row mt-5">
      <GuitarraComponent :guitarra="guitarras" v-for="guitarras in lstGuitarras"></GuitarraComponent>
    </div>

  </main>
  <FooterComponent></FooterComponent>
</template>





<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import GuitarraComponent from './components/GuitarraComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

interface Guitarra {
  id: number,
  nombre: string,
  imagen: string,
  descripcion: string,
  precio: number,

}
const lstGuitarras: Guitarra[] = [
  {
    id: 1,
    nombre: 'Lukather',
    imagen: 'guitarra_01',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 299,
  },
  {
    id: 2,
    nombre: 'SRV',
    imagen: 'guitarra_02',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 349,
  },
  {
    id: 3,
    nombre: 'Borland',
    imagen: 'guitarra_03',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 329,
  },
  {
    id: 4,
    nombre: 'VAI',
    imagen: 'guitarra_04',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 299,
  },
  {
    id: 5,
    nombre: 'Thompson',
    imagen: 'guitarra_05',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 399,
  },
  {
    id: 6,
    nombre: 'White',
    imagen: 'guitarra_06',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 329,
  },
  {
    id: 7,
    nombre: 'Cobain',
    imagen: 'guitarra_07',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 349,
  },
  {
    id: 8,
    nombre: 'Dale',
    imagen: 'guitarra_08',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 379,
  },
  {
    id: 9,
    nombre: 'Krieger',
    imagen: 'guitarra_09',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 289,
  },
  {
    id: 10,
    nombre: 'Campbell',
    imagen: 'guitarra_10',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 349,
  },
  {
    id: 11,
    nombre: 'Reed',
    imagen: 'guitarra_11',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 399,
  },
  {
    id: 12,
    nombre: 'Hazel',
    imagen: 'guitarra_12',
    descripcion: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    precio: 379,
  },
]

</script>

<style scoped></style>
