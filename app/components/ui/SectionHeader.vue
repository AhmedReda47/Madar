<template>
  <div :class="containerClass">
    <p :class="labelClass">
      <span class="blink-dot inline-block h-3 w-3 rounded "></span>{{ label }}
    </p>
    <h2 class="text-white text-2xl leading-tight sm:text-4xl md:text-[2rem] lg:text-[2.5rem] mt-3">{{ title }}</h2>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    title?: string
    align?: 'center' | 'left'
  }>(),
  {
    align: 'center',
  },
)

const containerClass = computed(() =>
  props.align === 'left' ? 'text-left' : 'text-center',
)

const labelClass = computed(() =>
  props.align === 'left'
    ? 'font-medium text-primary-2 flex items-center justify-start gap-3'
    : 'font-medium text-primary-2 flex items-center justify-center gap-3',
)
</script>
<style scoped>
.blink-dot {
  animation: dot-blink 1.3s steps(1, end) infinite;
}

@keyframes dot-blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}
</style>