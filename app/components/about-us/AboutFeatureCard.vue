<template>
  <article class="mx-auto h-[11.25rem] w-full lg:max-w-[19.875rem] rounded-2xl border border-white-10 bg-white-5 p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white-10">
    <h3 class="text-lg font-semibold text-white font-inter">{{ title }}</h3>
    <p class="mt-2 text-sm text-text-secondary-gray font-normal font-inter">{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
