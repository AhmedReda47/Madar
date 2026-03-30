<template>
  <div
    class="testimonial-skeleton mt-16"
    role="status"
    aria-label="Loading testimonials"
  >
    <div class="testimonial-card-skeleton">
      <Skeleton :pulse="false" class="h-8 w-full mb-6 bg-gray-400/30 rounded" />
      <Skeleton :pulse="false" class="h-8 w-4/5 mb-12 bg-gray-400/30 rounded" />

      <div class="flex items-center gap-5">
        <Skeleton
          :pulse="false"
          class="h-18 w-18 rounded-full bg-gray-400/30 shrink-0"
        />
        <div class="flex-1">
          <Skeleton
            :pulse="false"
            class="h-6 w-40 mb-2 bg-gray-400/30 rounded"
          />
          <Skeleton :pulse="false" class="h-5 w-48 bg-gray-400/30 rounded" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from "../ui/Skeleton.vue";
</script>

<style scoped>
.testimonial-card-skeleton {
  background: #ffffff05;
  border: 1.15px solid #0083c933;
  border-radius: 2rem;
  padding: 3rem;
  max-width: 900px;
  margin: 0 auto;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
