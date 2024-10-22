<template>
    <q-drawer
        v-model="drawerOpen"
        show-if-above
        :width="240"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
          <q-list>

           
          </q-list>
        </q-scroll-area>
    </q-drawer>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const drawerOpen = computed(() => store.state.drawerOpen)
</script>
<style>
.q-drawer {
  height: 100vh;
}
</style>