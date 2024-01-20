<template>
  <header>
    <h3>Productos</h3>
  </header>
  <section>
    <button type="submit">Enviar Mensaje</button>
    <table>
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
        <tr>
          <td>1</td>
          <td>LUKATHER</td>
          <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt,
            amet deserunt</td>
          <td>299</td>
          <td> <img class="img-fluid" src="../assets/guitarra_01.jpg" alt="imagen guitarra"></td>
          <td>
            <a>
              Editar
            </a>
            <a>
              Eliminar
            </a>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>LUKATHER</td>
          <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt,
            amet deserunt</td>
          <td>299</td>
          <td> <img class="img-fluid" src="../assets/guitarra_01.jpg" alt="imagen guitarra"></td>
          <td>
            <a>
              Editar
            </a>
            <a>
              Eliminar
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script setup>

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
  }</style>

