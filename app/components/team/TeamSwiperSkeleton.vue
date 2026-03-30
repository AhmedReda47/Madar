<template>
  <div
    class="team-swiper-skeleton mt-10 flex justify-center gap-3 overflow-hidden pb-1 sm:gap-4"
    role="status"
    aria-label="Loading team members"
  >
    <div
      v-for="n in count"
      :key="n"
      class="h-[22rem] w-full max-w-[15rem] shrink-0 animate-pulse overflow-hidden rounded-2xl bg-gray-400/20 sm:h-[24rem] sm:max-w-[16.5rem] lg:h-[25rem] lg:max-w-[17.5rem]"
    >
      <div class="flex h-full flex-col justify-end gap-3 p-5">
        <Skeleton :pulse="false" class="h-4 w-3/4 bg-gray-400/20" />
        <Skeleton :pulse="false" class="h-2 w-1/2 bg-gray-400/20" />
        <div class="mt-2 flex gap-4">
          <Skeleton
            :pulse="false"
            class="h-3 w-3 shrink-0 rounded-md bg-gray-400/20"
          />
          <Skeleton
            :pulse="false"
            class="hidden h-3 w-3 shrink-0 rounded-md bg-gray-400/20 sm:block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from "~/components/ui/Skeleton.vue";

withDefaults(defineProps<{ count?: number }>(), { count: 3 });
</script>
