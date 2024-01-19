<template>
    <div class="post" >
        <h3>{{ props.title }}</h3>
        <p>
            {{ props.content }}
        </p>
        <input type="text" v-model="sms" />
        <!--<img :src="props.link" width="100" height="70" >-->
        <button type="button" @click="mensaje()" >Decir Algo</button>
    </div>
</template>
<script  setup>
import { defineProps,defineEmits,ref } from 'vue';
const emit = defineEmits(['decirAlgo'])
const sms = ref('');
const props = defineProps({
  title: {
    type:String,
    required:true
  },
  content: {
    type:String,
    required:false,
    default:"no hay content"
  },
  link:String
})

const mensaje = () =>{
  emit('decirAlgo',sms.value)
}
</script>
<style scoped>
.post {
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;

    
}
</style>