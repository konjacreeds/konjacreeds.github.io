<script setup lang="ts">
defineProps<{
  src: string
  name: string
  desc: string
}>()
</script>

<template>
  <div itemprop="author" itemscope itemtype="http://schema.org/Person" class="flex flex-col items-center">
    <img :src="src" loading="lazy" decoding="async" class="max-w-[10rem] border border-gray-300 rounded-full p-1 shadow-lg">
    <p itemprop="name" class="mt-1 text-center text-gray-700 font-normal">
      {{ name }}
    </p>
    <div itemprop="description" class="mt-1 text-center text-base text-gray-500">
      {{ desc }}
    </div>
  </div>
</template>

<style>
@keyframes shake {
  0% {
    transform: scale(1);
  }

  10%,
  20% {
    transform: scale(0.9) rotate(3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale(1.1) rotate(-3deg);
  }

  40%,
  60%,
  80% {
    transform: scale(1.1) rotate(3deg);
  }

  100% {
    transform: scale(1);
  }
}

.image:hover {
  animation: shake 0.5s;
}
</style>
