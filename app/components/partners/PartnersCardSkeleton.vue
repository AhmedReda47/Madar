<template>
  <div
    class="partners-card-skeleton mt-10 flex justify-center gap-3 overflow-hidden pb-1 sm:gap-4"
    role="status"
    aria-label="Loading partner cards"
  >
    <div
      v-for="n in count"
      :key="n"
      class="w-full max-w-[194.5px] h-[172px] rounded-2xl border-[1.15px] border-[#0083c933] bg-white/5 animate-pulse flex flex-col items-center justify-center gap-1.5"
    >
      <Skeleton :pulse="false" class="h-14 w-24 bg-gray-400/30 rounded-md" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from "../ui/Skeleton.vue";
withDefaults(defineProps<{ count?: number }>(), { count: 3 });
</script>
