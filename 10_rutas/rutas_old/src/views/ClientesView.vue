<template>
    <header>
        <h3>Listado de Clientes</h3>
    </header>

    <section>
        <div class="contact-card">
            <div class="contact-name">Juan Pérez</div>
            <div class="contact-email">juan.perez@example.com</div>
            <div class="contact-phone">123-456-7890</div>
        </div>

        <div class="contact-card">
            <div class="contact-name">María López</div>
            <div class="contact-email">maria.lopez@example.com</div>
            <div class="contact-phone">987-654-3210</div>
        </div>
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
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.contact-card {
    background-color: #ecf0f1;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.contact-card:hover {
    transform: scale(1.02);
}

.contact-name {
    font-size: 1.2em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 10px;
}

.contact-email {
    color: #7f8c8d;
}

.contact-phone {
    color: #7f8c8d;
}
</style>