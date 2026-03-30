<template>
  <div
    :class="['rounded-md bg-white/10', pulse && 'animate-pulse']"
    aria-hidden="true"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    /** Set false when an ancestor already uses `animate-pulse` */
    pulse?: boolean
  }>(),
  { pulse: true },
)
</script>
