<template>
    <header>
        <h1 class="nombre-sitio">Tienda <span>Muebles</span></h1>
    </header>
    <div class="contenedor-navegacion">
        <nav class=" nav-principal contenedor">
            <a href="index.html" @click="ir('')">Productos</a>
            <a href="nosotros.html">Clientes</a>
            <a href="tienda.html">Tienda</a>
            <a href="blog.html">Blog</a>
            <a href="galeria.html">Galeria</a>
            <a href="contacto.html">Contacto</a>
        </nav>
    </div>
    <RouterView />
</template>
<script setup >
const ir =(url) =>{
    
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #fff;
}
a:hover {
    text-decoration: none;
    color: #7db5db;
}
h1,
h2,
h3 {
    margin: 0 0 5rem 0;
}
h1 {
    font-size: 5rem;
}
h2 {
    font-size: 4rem;
}

h3 {
    font-size: 3rem;
}

/** Header y Navegacion **/
.contenedor {
    max-width: 120rem;
    margin: 0 auto;


}

img {
    max-width: 100%;
    display: block;
}

.nombre-sitio {
    margin-top: 5rem;
    text-align: center;
}

.nombre-sitio span {
    color: #037bc0;
}

.contenedor-navegacion {

    background-color: #037bc0;
    height: 60px;
}

.nav-principal {
    padding: 1rem 0;
    
    display: flex;
    justify-content: space-between;
    width: 1000px;
}

.hero {
    background-image: url('../img/principal.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 55rem;
}

.categorias {
    padding-top: 5rem;
}

.categorias h2 {
    text-align: center;
}

.categoria a {
    text-align: center;
    display: block;
    padding: 2rem;
    font-size: 2rem;
}

.categoria a:hover {
    background-color: #037bc0;
    color: #FFF;
    border-bottom-right-radius: 1rem;
}

.listado-categorias {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

/** Bloque Nosotros **/
.sobre-nosotros {
    background-image: linear-gradient(to right, transparent 50%, #037bc0 50%),
        url('../img/nosotros.jpg');
    background-position: left center;
    padding: 10rem 0;
    background-repeat: no-repeat;
    background-size: 100%, 120rem;
}
</style>
