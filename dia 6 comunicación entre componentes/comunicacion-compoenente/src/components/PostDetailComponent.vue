<template>
    <div class="post" >
        <h3>{{ title }}</h3>
        <p>
           {{ subtitutlo }}
        </p>
        <img :src="link" width="50px" alt=""><br>
        <input type="text" v-model="sms" />
        <button type="button" @click="mensaje()">Decir Algo</button>

        

    </div>
    
</template>
<script  setup>
import {ref} from 'vue'
const sms = ref('');
const props = defineProps({
  title: {
    type:String,
    required:true
  },
  subtitutlo: {
    type:String,
    required:false,
    default:"no hay content"
  },
  link:String
})



const emit = defineEmits(['decirAlgo'])


const mensaje = () =>{
  emit('decirAlgo',sms.value)
}


</script>
<style scoped>
.post {
    width: 300px;
    max-height: 500px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>