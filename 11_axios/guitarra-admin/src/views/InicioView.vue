<template>
  <header>
    <h1>Bienvenido a Nuestra Página</h1>
    <p>Explora nuestro contenido y descubre <a href="#">más detalles</a> sobre lo que ofrecemos.</p>
  </header>
  <div id="seccion-quienes-somos" class="quienes-somos">
    <div class="mensaje-principal">

      <div class="descripcion-quienes-somos">
        <p class="descripcion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
header {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/banner.jpg');
  background-size: cover;
  color: #fff;
  text-align: center;
  padding: 150px 0;
}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  color: #ddd;
}

a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

.quienes-somos {
  background: #f5f5f5;
  padding: 39px 29px 4px 29px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 100%;
  height: 1083px;
  min-width: 360px;
  position: relative;
  overflow: hidden;
}

.mensaje-principal {
  padding: 0px 0px 63px 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 1509px;
  height: 330px;
  min-width: 360px;
  position: relative;
  overflow: hidden;
}


.descripcion-quienes-somos {
  margin: 0 0 0 -11px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.descripcion {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 400;
  position: relative;
  width: 790px;
  height: 231px;
  display: flex;
  align-items: center;
  justify-content: center;
}</style>