<script setup lang="ts">
import BackBtn from './BackBtn.vue'
import ForwardBtn from './ForwardBtn.vue'
import OrderBtn from './OrderBtn.vue'
import PlayBtn from './PlayBtn.vue'
import VolumeBtn from './VolumeBtn.vue'
</script>

<template>
  <div class="controller flex cursor-pointer items-center justify-around text-align-center text-sm">
    <OrderBtn />
    <BackBtn />
    <PlayBtn />
    <ForwardBtn />
    <VolumeBtn />
  </div>
</template>

<style lang="css">
.controller div {
  color: var(--primary-text);
  width: 18%;
}

.controller div:hover {
  color: var(--hover-btn);
}
</style>
