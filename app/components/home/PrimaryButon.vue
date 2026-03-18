<template>
  <button class="rounded-full text-white hover:border-transparent transition-all duration-200 ease-in-out">
    <slot />
  </button>
</template>
<script setup lang="ts">
</script>
<style scoped>
button {
  transition: all 0.25s ease-in-out;
}

button:hover {
  background-color: var(--color-primary-dark) !important;
  transform: translateY(-3px) !important;
}
</style>
