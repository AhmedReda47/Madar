<template>
  <section class="lg:px-16 px-5 sm:px-8 mt-28">
    <SectionHeader
      class="[&_span]:bg-primary"
      label="Our Partners"
      title="Trusted by Global Leaders"
    />
    <!-- Loading -->
    <PartnersCardSkeleton v-if="isLoading" :count="3" />
    <Swiper
      class="partners-swiper mt-10 pb-14"
      :modules="[Autoplay, Pagination]"
      :loop="true"
      :centered-slides="true"
      :grab-cursor="true"
      :autoplay="{
        delay: 1800,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
      }"
      :speed="650"
      :slides-per-view="2.2"
      :space-between="8"
      :breakpoints="swiperBreakpoints"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="partner in partners" :key="partner.id">
        <NuxtLink
          v-if="partner.link"
          :href="partner.link"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <article class="partner-card">
            <NuxtImg
              :src="partner.image.url"
              :alt="`${partner.name} logo`"
              class="h-14 w-full object-contain"
              loading="lazy"
              decoding="async"
              format="webp"
            />
          </article>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper/types";
import SectionHeader from "../ui/SectionHeader.vue";
import PartnersCardSkeleton from "./PartnersCardSkeleton.vue";
import { usePartnersStore } from "./store/partnersStore";
import { storeToRefs } from "pinia";
import "swiper/css";
import "swiper/css/pagination";

const partnerStore = usePartnersStore();
const { partners, error, isLoading } = storeToRefs(partnerStore);

onMounted(async () => {
  await partnerStore.fetchPartners();
  if (error.value) {
    console.error("Error fetching partners:", error.value);
  }
});

const swiperBreakpoints = {
  360: { slidesPerView: 2, spaceBetween: 8 },
  390: { slidesPerView: 2.5, spaceBetween: 8 },
  640: { slidesPerView: 3, spaceBetween: 10 },
  768: { slidesPerView: 3.5, spaceBetween: 12 },
  1024: { slidesPerView: 5, spaceBetween: 10 },
  1280: { slidesPerView: 7, spaceBetween: 14 }
};

const swiperInstance = ref<SwiperType | null>(null);
const activeDot = ref(0);

const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper;
  activeDot.value = swiper.realIndex ?? 0;
};

const onSlideChange = (swiper: SwiperType) => {
  activeDot.value = swiper.realIndex ?? 0;
};

const goToSlide = (index: number) => {
  swiperInstance.value?.slideToLoop(index);
};
</script>
<style scoped>
.partner-card {
  width: 100%;
  max-width: 194.5px;
  height: 172px;
  margin: 0 auto;
  border-radius: 24px;
  border: 1.15px solid #0083c933;
  background: #ffffff05;
  color: rgba(255, 255, 255, 0.58);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.3s ease;
}

@media (max-width: 390px) {
  .partner-card {
    max-width: 172px;
    height: 156px;
  }
}

.partner-mark {
  font-size: 18px;
  line-height: 1;
}

.partner-name {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.partners-swiper :deep(.swiper-slide) {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.partners-swiper :deep(.swiper-slide-active) {
  opacity: 1;
}

.partners-swiper :deep(.swiper-slide-active .partner-card) {
  border-color: #0083c9;
  color: #fff;
  box-shadow: 0 0 35px #0083c973;
}

.partner-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: var(--color-text-primary);
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.partner-dot:hover {
  background: rgba(255, 255, 255, 0.7);
}

.partner-dot-active {
  background: #0083c9;
  transform: scale(1.05);
  width: 20px;
}
</style>
