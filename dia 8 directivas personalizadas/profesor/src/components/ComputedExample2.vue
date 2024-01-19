<template>
    <div>
        <label v-custom-font-modifier.xxl.red>Total</label><br>
        <label v-custom-size-case.lg>Total</label>
        <input type="number" v-model="subtotal" />
        <h3>Total Impuestos por pagar: {{ totalVat }}</h3> <!-- paso por valor -->
    </div>
</template>
<script  setup>
import {ref,computed} from 'vue'
const vat = 13;
let subtotal = ref(0);
const totalVat = computed(()=>{
    return (vat * subtotal.value)/100
})
</script>
<style scoped>
</style>