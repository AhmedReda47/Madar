<template>
  <section id="team" ref="sectionRef" class="lg:px-16 px-5 sm:px-8">
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <div v-for="item in stats" :key="item.label" class="flex justify-center">
        <TeamCard :value="item.value" :label="item.label" :start="startCount" />
      </div>
    </div>
    <SectionHeader
      class="[&_span]:bg-primary mt-28"
      label="OUR GLOBAL TEAM"
      title="We have a distinguished team for all services"
    />

    <!-- Loading -->
    <TeamSwiperSkeleton v-if="isLoading" :count="3" />

    <!-- Error -->
    <div v-else-if="error" class="mt-10 text-center text-red-500">
      {{ error.message || "Failed to load team" }}
    </div>

    <!-- Empty -->
    <div v-else-if="!teamMembers.length" class="mt-10 text-center">
      No team members found
    </div>

    <!-- Success -->
    <Swiper
      v-else
      class="team-swiper mt-10"
      :modules="[Autoplay]"
      :centered-slides="true"
      :loop="true"
      :grab-cursor="true"
      :autoplay="{
        delay: 2200,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
      }"
      :speed="650"
      :slides-per-view="1.2"
      :space-between="14"
      :breakpoints="swiperBreakpoints"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="member in teamMembers" :key="member.id">
        <article
          class="team-member-card relative mx-auto h-[22rem] w-full max-w-[15rem] overflow-hidden rounded-2xl sm:h-[24rem] sm:max-w-[16.5rem] lg:h-[25rem] lg:max-w-[17.5rem]"
        >
          <NuxtImg
            :src="member.image"
            :alt="`Team member ${member.name}, ${member.role}`"
            class="h-full w-full object-cover"
            width="280"
            height="400"
            loading="lazy"
            decoding="async"
            format="webp"
          />
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80"
          ></div>
          <div
            class="team-card-gradient absolute bottom-0 left-0 z-[1] h-[15.99rem] w-full"
          ></div>
          <div class="absolute bottom-5 left-5 z-10">
            <h3 class="text-3xl font-medium text-white">{{ member.name }}</h3>
            <p class="font-normal text-text-primary mt-1">{{ member.role }}</p>
            <div class="team-socials mt-3 flex items-center gap-4">
              <NuxtLink
                :href="member.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="team-social-link"
                aria-label="LinkedIn"
              >
                <NuxtImg
                  :src="LinkedinPrimary"
                  alt=""
                  class="h-6 w-6 object-contain"
                  width="24"
                  height="24"
                  loading="lazy"
                  decoding="async"
                />
              </NuxtLink>
              <a
                v-if="isUiUxRole(member.role)"
                :href="member.behance || '#'"
                target="_blank"
                rel="noopener noreferrer"
                class="team-social-link team-social-behance"
                aria-label="Behance"
              >
                Be
              </a>
            </div>
          </div>
        </article>
      </SwiperSlide>
    </Swiper>

    <div
      v-if="!isLoading && !error && teamMembers.length"
      class="mt-4 flex items-center justify-center gap-2"
    >
      <button
        v-for="(_, index) in teamMembers"
        :key="`team-dot-${index}`"
        type="button"
        class="team-dot"
        :class="{ 'team-dot-active': activeDot === index }"
        :aria-label="`Go to team member ${index + 1}`"
        @click="goToSlide(index)"
      ></button>
    </div>
  </section>
</template>
<script setup lang="ts">
import LinkedinPrimary from "~/assets/icons/linkedin-primary.svg";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper/types";
import TeamCard from "./TeamCard.vue";
import SectionHeader from "../ui/SectionHeader.vue";
import TeamSwiperSkeleton from "./TeamSwiperSkeleton.vue";
import "swiper/css";
import { useTeamStore } from "./store/TeamStore";
import type { TeamSocialLinkResponse } from "./type";

const teamStore = useTeamStore();
const {
  teamMembers: apiTeamMembers,
  error,
  isLoading
} = storeToRefs(teamStore);
const { fetchTeamMembers } = teamStore;

const stats = [
  { value: 50, label: "Complete website" },
  { value: 24, label: "Satisfied customer" },
  { value: 15, label: "Mobile application" },
  { value: 80, label: "Complete project" }
];

function getSocialLink(
  links: TeamSocialLinkResponse[] | null | undefined,
  type: string
): string | undefined {
  if (!links) return undefined;
  return links.find((s) => s.type.toLowerCase() === type.toLowerCase())?.link;
}

const teamMembers = computed(() =>
  apiTeamMembers.value.map((m) => ({
    id: m.id,
    name: m.name,
    role: m.job_title,
    image: m.image?.url || "/images/Video.png",
    linkedin: getSocialLink(m.social_links, "linkedin") || "#",
    behance: getSocialLink(m.social_links, "behance") || undefined
  }))
);

const isUiUxRole = (role: string) => role.toLowerCase().includes("ui/ux");

const swiperBreakpoints = {
  360: { slidesPerView: 1.5, spaceBetween: 2 },
  390: { slidesPerView: 1.5, spaceBetween: 2 },
  640: { slidesPerView: 2.5, spaceBetween: 4 },
  768: { slidesPerView: 3, spaceBetween: 6 },
  1024: { slidesPerView: 3.5, spaceBetween: 6 },
  1280: { slidesPerView: 5, spaceBetween: 2 }
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

const sectionRef = ref<HTMLElement | null>(null);
const startCount = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(async () => {
  await teamStore.fetchTeamMembers();
  if (error.value) {
    console.error("Error fetching team members:", error.value.message);
  }

  if (!import.meta.client || !sectionRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry) return;
      if (!entry.isIntersecting) return;
      startCount.value = true;
      observer?.disconnect();
      observer = null;
    },
    { threshold: 0.35 }
  );

  observer.observe(sectionRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
<style scoped>
.team-swiper :deep(.swiper-slide) {
  opacity: 0.65;
  transition: opacity 0.35s ease;
}

.team-swiper :deep(.swiper-slide .team-member-card) {
  transform: scale(0.66);
  transform-origin: center center;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.team-swiper :deep(.swiper-slide-prev .team-member-card),
.team-swiper :deep(.swiper-slide-next .team-member-card) {
  transform: scale(0.82);
}

.team-swiper :deep(.swiper-slide-active) {
  opacity: 1;
  z-index: 3;
}

.team-swiper :deep(.swiper-slide-active .team-member-card) {
  transform: scale(1);
  box-shadow: 0 0 28px rgba(0, 131, 201, 0.24);
}

.team-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.team-socials {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(6px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s ease;
}

.team-swiper :deep(.swiper-slide-active .team-socials) {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
}

.team-social-link:hover {
  transform: translateY(-2px);
  opacity: 0.85;
}

.team-social-behance {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1;
}

.team-card-gradient {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 100%
  );
}

.team-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: var(--color-text-primary);
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.team-dot:hover {
  background: rgba(255, 255, 255, 0.7);
}

.team-dot-active {
  background: #0083c9;
  transform: scale(1.05);
  width: 30px;
}
</style>
