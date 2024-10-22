<template>
  <q-layout container style="min-height: 100vh;">
    <LayoutHeader />
    

    <q-page-container style="height: 100vh">
      <q-page padding>
        <RouterView></RouterView>   
      </q-page> 
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
import LayoutHeader from './layout/Header.vue';
//import NavDrawer from './layout/NavDrawer.vue';
</script>