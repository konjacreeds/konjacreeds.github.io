<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { ref } from 'vue'

const props = defineProps<{
  clickCallback: (state: boolean) => void
}>()

const currentState = ref(false)
const { width } = useWindowSize()

function toggleState() {
  currentState.value = !currentState.value
  props.clickCallback(currentState.value)
}
</script>

<template>
  <div v-if="width <= 991" class="flex flex-col cursor-pointer items-center justify-center" @click="toggleState">
    <div class="box-unset w-5.5 p-5 line-height-0">
      <span class="line" :class="{ 'line-1': currentState }" />
      <span class="line mt-0.75" :class="{ 'line-2': currentState }" />
      <span class="line mt-0.75" :class="{ 'line-3': currentState }" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.line-1 {
  top: 0.3125rem;
  transform: rotate(-45deg);
}

.line-2 {
  opacity: 0;
}

.line-3 {
  top: -0.3125rem;
  transform: rotate(45deg);
  margin-top: 0.1875rem;
}

.line {
  background-color: var(--header-text-color);
  vertical-align: top;
  border-radius: 0.0625rem;
  width: 100%;
  height: 0.125rem;
  transition: all 0.4s;
  display: inline-block;
  position: relative;
  left: 0;
  box-shadow: 0 0 0.5rem #00000080;
}
</style>
