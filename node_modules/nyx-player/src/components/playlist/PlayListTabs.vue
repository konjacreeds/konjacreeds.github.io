<script setup lang="ts">
import ListTab from './ListTab.vue'
</script>

<template>
  <div class="playlist">
    <ListTab />
  </div>
</template>

<style scoped>
.playlist {
  border-top: 0.125rem solid var(--playlist-line);
}
</style>
