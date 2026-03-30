<template>
  <section id="testimonials" class="lg:px-16 px-5 sm:px-8 mt-28">
    <SectionHeader
      class="[&_span]:bg-primary"
      label="TESTIMONIALS"
      title="Built on Trust. Proven by Results."
    />
    <p class="text-center text-text-primary mt-4 max-w-2xl mx-auto">
      Customer satisfaction is our major goal. See what our customers are saying
      about us.
    </p>

    <!-- Loading -->
    <TestimonialSkeleton v-if="isLoading" />

    <!-- Error -->
    <div v-else-if="error" class="mt-10 text-center text-red-500">
      {{ error }}
    </div>

    <!-- Empty -->
    <div v-else-if="!reviews.length" class="mt-10 text-center text-gray-500">
      No testimonials available
    </div>

    <!-- Success -->
    <div v-else class="mt-16">
      <article class="testimonial-card" v-for="review in reviews" :key="review.id">
        <blockquote class="testimonial-text">"{{ review.review }}"</blockquote>

        <div class="testimonial-author">
          <NuxtImg
            :src="review.image.url"
            :alt="review.name"
            class="author-avatar"
            width="72"
            height="72"
            loading="lazy"
            decoding="async"
            format="webp"
          />

          <div>
            <h4 class="author-name">{{ review.name }}</h4>
            <p class="author-title">{{ review.position }}</p>
          </div>
        </div>
      </article>

      <!-- Multiple testimonials tabs -->
      <div
        v-if="reviews.length > 1"
        class="mt-12 flex items-center justify-center gap-2"
      >
        <button
          v-for="(_, index) in reviews"
          :key="`testimonial-dot-${index}`"
          type="button"
          class="testimonial-dot"
          :class="{ 'testimonial-dot-active': activeDot === index }"
          :aria-label="`View testimonial ${index + 1}`"
          @click="selectReview(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import SectionHeader from "../ui/SectionHeader.vue";
import TestimonialSkeleton from "./TestimonialSkeleton.vue";
import { useTestimonialStore } from "./store/testimonialStore";

const testimonialStore = useTestimonialStore();
const { reviews, isLoading, error } = storeToRefs(testimonialStore);

const activeDot = ref(0);

const selectReview = (index: number) => {
  activeDot.value = index;
};

onMounted(() => {
  testimonialStore.fetchReviews();
  if (error.value) {
    console.error("Error fetching testimonials:", error.value);
  }
});
</script>

<style scoped>
.testimonial-card {
  background: #ffffff05;
  border: 1.15px solid #0083c933;
  border-radius: 2rem;
  padding: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all 0.3s ease;
  min-height: 320px;
}

.testimonial-card:hover {
  background: #ffffff08;
  border-color: #0083c955;
  box-shadow: 0 4px 20px rgba(0, 131, 201, 0.1);
}

.testimonial-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #7a8fa6;
  font-family: inter;
  font-weight: 400;
  flex: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.author-avatar {
  width: 72px;
  height: 72px;
  border-radius: 999px;
  object-fit: cover;
  flex-shrink: 0;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  font-family: inter;
  margin-bottom: 0.25rem;
}

.author-title {
  font-size: 0.95rem;
  color: #7a8fa6;
  font-family: inter;
  font-weight: 400;
}

.testimonial-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: #cbd5e1;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.testimonial-dot:hover {
  background: #94a3b8;
  transform: scale(1.1);
}

.testimonial-dot-active {
  background: #0083c9;
  width: 30px;
  border-radius: 999px;
}
</style>
