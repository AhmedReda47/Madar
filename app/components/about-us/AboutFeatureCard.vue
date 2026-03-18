<template>
  <article class="mx-auto h-[7.5rem] w-full sm:h-[10.25rem] lg:h-[11.25rem] lg:max-w-[19.875rem] rounded-2xl border border-white-10 bg-white-5 p-4 sm:p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white-10">
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
