<template>
  <div class="portfolio-skeleton" role="status" aria-label="Loading portfolio">
    <article class="portfolio-card">
      <div class="project-image-wrap">
        <Skeleton
          :pulse="true"
          class="w-full min-h-[280px] rounded-[1.25rem] lg:min-h-[470px]"
        />
      </div>

      <div class="project-content">
        <Skeleton :pulse="false" class="h-6 w-32 rounded bg-gray-400/30" />

        <Skeleton :pulse="false" class="h-10 w-3/4 rounded bg-gray-400/30" />

        <Skeleton :pulse="false" class="h-5 w-full rounded bg-gray-400/30" />
        <Skeleton :pulse="false" class="h-5 w-5/6 rounded bg-gray-400/30" />
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import Skeleton from "../ui/Skeleton.vue";
</script>

<style scoped>
.portfolio-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: center;
}

.project-image-wrap {
  border-radius: 1.25rem;
  overflow: hidden;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .portfolio-card {
    grid-template-columns: minmax(0, 46%) minmax(0, 54%);
    gap: 2.8rem;
  }
}
</style>
