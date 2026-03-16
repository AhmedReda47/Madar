<template>
  <button class="rounded-full text-white">
    <slot />
  </button>
</template>
<script setup lang="ts">
</script>
<style scoped>
button {
  transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

button:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-3px);
}
</style>
