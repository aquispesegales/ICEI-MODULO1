<template>
    <header>
    <h3>Contacto</h3>
  </header>

  <section>
    <form action="#" method="post">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required>

      <label for="correo">Correo Electrónico:</label>
      <input type="email" id="correo" name="correo" required>

      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

      <button type="submit">Enviar Mensaje</button>
    </form>
  </section>
</template>
<style scoped>
header {
    background-color: #fff;
    color: #1f4680;
    text-align: center;
 
    font-size: 2em;
}

section {
  max-width: 700px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

form {
  display: grid;
  grid-gap: 15px;
  padding: 10px;
}

label {
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

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
</style>