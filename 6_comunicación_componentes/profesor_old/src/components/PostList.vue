<template>
    <div class="container">
        <PostDetail v-for="obj in frutas" :key="obj" :title="obj.title" :content="obj.content" 
        :link="obj.link"  @decirAlgo="mostrarMensaje"></PostDetail>
    </div>
</template>
<script setup>
import PostDetail from './PostDetail.vue';
let frutas = [
    {
        title: "El PLatano",
        content: "El plátano es ideal para la recuperación muscular y se recomienda su consumo antes, durante o después del ejercicio ",
        link:"https://s2.ppllstatics.com/diariovasco/www/multimedia/202106/04/media/cortadas/platano-kUyC-RCIEbjdcaFn9Yc7KKpofzYN-1248x770@Diario%20Vasco-DiarioVasco.jpg"
    },
    {
        title: "Manzana",
        content: "La manzana es una fruta pomácea con propiedades astringentes, que tiene un sabor dulce y ácido. Es producida por manzanos, estos son árboles del género Malus",
        link:"https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834"
    },
    {
        title: "Piñas",
        content: "Reconocida como una de las frutas ideales del verano, la deliciosa y versátil piña tiene un sitial de honor entre los superalimentos gracias a sus notables atributos nutricionales que proporcionan ingentes beneficios a la salud corporal",
        link:"https://portal.andina.pe/EDPfotografia3/Thumbnail/2022/12/23/000921088W.jpg"
    },
    {
        title: "La Uva",
        content: "uvasLa uva constituye uno de los tres pilares de la tríada mediterránea y, por lo tanto, es un alimento básico de la dieta mediterránea conjuntamente con el trigo y el aceite de oliva. Y es que su cultivo se remonta a la antigüedad, unos tres mil años antes de Cristo",
        link:"https://fundaciondelcorazon.com/images/stories/corazon-facil/impulso-vital/uvas.jpg"
    },
]
const mostrarMensaje = (sms) =>{
    alert(sms);
}
</script>
<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>