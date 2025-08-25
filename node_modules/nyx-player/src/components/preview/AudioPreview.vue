<script setup lang="ts">
import AudioCover from './AudioCover.vue'
import AudioInfo from './AudioInfo.vue'
</script>

<template>
  <div class="preview flex-col items-center pb-0 pl-2.5 pr-2.5 pt-5 md:flex md:flex-row md:pl-5 md:pr-5">
    <AudioCover />
    <AudioInfo />
  </div>
</template>
