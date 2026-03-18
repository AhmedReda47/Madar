<template>
  <div class="flex h-32 md:h-52 w-[300px] transform-gpu flex-col items-center justify-center rounded-[1.25rem] border border-white-10 transition-transform duration-300 ease-out hover:-translate-y-2 hover:border-primary-2">
    <span class="text-3xl md:text-4xl lg:text-5xl">{{ displayedValue }}{{ suffix }}</span>
    <span class="font-medium text-primary-2 mt-2 text-xs md:text-sm lg:text-base">{{ label }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  value: number
  label: string
  suffix?: string
  start?: boolean
}>(), {
  suffix: '+',
  start: false,
})

const displayedValue = ref(0)
let hasAnimated = false

const animateCount = () => {
  const duration = 1200
  const startTime = performance.now()

  const tick = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1)
    displayedValue.value = Math.floor(progress * props.value)

    if (progress < 1) {
      requestAnimationFrame(tick)
      return
    }

    displayedValue.value = props.value
  }

  requestAnimationFrame(tick)
}

watch(
  () => props.start,
  (shouldStart) => {
    if (!shouldStart || hasAnimated || !import.meta.client) return
    hasAnimated = true
    animateCount()
  },
  { immediate: true },
)
</script>
<style scoped>
</style>