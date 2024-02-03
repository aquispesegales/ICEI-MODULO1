<template>
    <bodySlot>
        <template #title>
            <v-banner lines="one" icon="mdi-account" color="deep-purple-accent-4" class="my-4">
                <v-banner-text>
                    Contactanos
                </v-banner-text>

                <template v-slot:actions>
                <v-btn>Salir</v-btn>
                </template>
            </v-banner>
        </template>
        <template #content>
            <v-card class="mx-auto" max-width="344" title="Contactanos">
                <v-container>
                    <v-text-field v-model="first" color="primary" label="Primer NOmbre" variant="underlined"></v-text-field>

                    <v-text-field v-model="last" color="primary" label="Ap paterno" variant="underlined"></v-text-field>

                    <v-text-field v-model="email" color="primary" label="Correo" variant="underlined"></v-text-field>

                    <v-text-field v-model="password" color="primary" label="Password" placeholder="Enter your password"
                        variant="underlined"></v-text-field>

                    <v-checkbox v-model="terms" color="secondary" label="Acepto q los datos son veridicos"></v-checkbox>
                </v-container>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="success">
                       REGISTRESE
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>

    </bodySlot>
</template>
  
<script setup>
import bodySlot from './Slot.vue'


const desserts = [
    {
        name: 'Frozen Yogurt',
        calories: 159,
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
    },
    {
        name: 'Eclair',
        calories: 262,
    },
    {
        name: 'Cupcake',
        calories: 305,
    },
    {
        name: 'Gingerbread',
        calories: 356,
    },
    {
        name: 'Jelly bean',
        calories: 375,
    },
    {
        name: 'Lollipop',
        calories: 392,
    },
    {
        name: 'Honeycomb',
        calories: 408,
    },
    {
        name: 'Donut',
        calories: 452,
    },
    {
        name: 'KitKat',
        calories: 518,
    },
]



</script>
  