<template>
  <v-alert
    density="compact"
    color="blak"
    variant="outlined"
    class="text-caption"
  >
    <template v-slot:title>
      <span class="text-primaryVerde" >     <slot name="title"></slot></span>
    </template>
    <slot name="content">
      
    </slot>
  </v-alert>
</template>
