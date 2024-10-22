<template>
    <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
      <q-toolbar>
        <q-btn flat @click="toggleNavDrawer" round dense icon="menu" />
        <q-toolbar-title>Header</q-toolbar-title>
      </q-toolbar>
    </q-header>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();
const toggleNavDrawer = () => {
    store.dispatch('toggleNavDrawer')
}
</script>