<template>
  <section class="lg:px-16 px-5 sm:px-8 mt-28 overflow-x-hidden">
    <SectionHeader class="[&_span]:bg-primary" label="OUR TOOLS" title="TECHNOLOGY STACK" />

    <div class="orbits mt-8">
      <div
        v-for="ring in rings"
        :key="`ring-${ring}`"
        class="orbit-ring"
        :style="{ width: `${ring}%`, height: `${ring}%` }"
      ></div>

      <div
        v-for="tool in tools"
        :key="tool.name"
        class="orbit-item"
        :style="{
          '--orbit-size': `${tool.orbit}%`,
          '--duration': `${tool.duration}s`,
          '--delay': `${tool.delay}s`,
          '--start': `${tool.start}deg`,
          '--badge-size': `${tool.size}px`,
          '--badge-color': tool.color,
        }"
      >
        <div class="orbit-path">
          <div class="tool-badge">
            <span class="tool-inner">
              <img :src="tool.icon" :alt="tool.name" class="tool-icon" width="36" height="36" loading="lazy" decoding="async" />
            </span>
          </div>
        </div>
      </div>

      <div class="center-logo">
        <NuxtImg
          src="/images/MadarLogo.png"
          alt="Madar company logo"
          class="h-auto w-[9.5rem] object-contain sm:w-[12rem] lg:w-[14rem]"
          loading="lazy"
          decoding="async"
          format="webp"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import cppIcon from '~/assets/icons/C++.svg'
import figmaIcon from '~/assets/icons/Figma.svg'
import flutterIcon from '~/assets/icons/Flutter.svg'
import kotlinIcon from '~/assets/icons/Kotlin.svg'
import lightningBoltIcon from '~/assets/icons/LightningBolt.svg'
import pythonIcon from '~/assets/icons/Python.svg'
import reactIcon from '~/assets/icons/React.svg'
import reduxIcon from '~/assets/icons/Redux.svg'
import SectionHeader from '../ui/SectionHeader.vue'
import vueIcon from '~/assets/icons/Vue.svg'

const rings = [26, 38, 50, 62, 74, 86]  

const tools = [
  { name: 'React', icon: reactIcon, orbit: 86, start: 10, duration: 20, delay: 0, size: 56, color: '#61DAFB' },
  { name: 'Python', icon: pythonIcon, orbit: 82, start: 90, duration: 24, delay: -2, size: 60, color: '#F7D046' },
  { name: 'C++', icon: cppIcon, orbit: 80, start: 150, duration: 22, delay: -1, size: 52, color: '#4F8DD6' },
  { name: 'Redux', icon: reduxIcon, orbit: 58, start: 220, duration: 16, delay: -3, size: 52, color: '#764ABC' },
  { name: 'Figma', icon: figmaIcon, orbit: 54, start: 280, duration: 14, delay: -4, size: 48, color: '#A259FF' },
  { name: 'Vue', icon: vueIcon, orbit: 48, start: 330, duration: 13, delay: -2, size: 48, color: '#42B883' },
  { name: 'Flutter', icon: flutterIcon, orbit: 66, start: 45, duration: 18, delay: -3, size: 54, color: '#46D1FD' },
  { name: 'Kotlin', icon: kotlinIcon, orbit: 42, start: 185, duration: 12, delay: -1, size: 44, color: '#7F52FF' },
  { name: 'Lightning Bolt', icon: lightningBoltIcon, orbit: 72, start: 255, duration: 19, delay: -2, size: 58, color: '#32D2C4' },
]
</script>
<style scoped>
.orbits {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: min(100%, 1140px);
  max-width: calc(100vw - 2rem);
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.orbit-ring {
  position: absolute;
  border-radius: 9999px;
  border: 2px solid #ffffff18;
}

.orbit-item {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.orbit-path {
  position: relative;
  width: var(--orbit-size);
  height: var(--orbit-size);
  border-radius: 9999px;
  animation: orbit-spin var(--duration) linear infinite;
  animation-delay: var(--delay);
}

.tool-badge {
  position: absolute;
  top: 0;
  left: 50%;
  width: var(--badge-size);
  height: var(--badge-size);
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.06) 45%, rgba(255, 255, 255, 0.02));
  /* box-shadow: 0 0 22px color-mix(in srgb, var(--badge-color) 55%, transparent); */
}

.tool-inner {
  width: calc(var(--badge-size) - 10px);
  height: calc(var(--badge-size) - 10px);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: var(--badge-color);
  animation: orbit-counter var(--duration) linear infinite;
  animation-delay: var(--delay);
}

.tool-icon {
  width: 64%;
  height: 64%;
  object-fit: contain;
}

.center-logo {
  width: 38%;
  aspect-ratio: 1 / 1;
  border-radius: 9999px;
  display: grid;
  place-items: center;
}

@media (max-width: 640px) {
  .orbits {
    width: min(100%, 330px);
  }

  .tool-badge {
    width: calc(var(--badge-size) * 0.7);
    height: calc(var(--badge-size) * 0.7);
  }

  .tool-inner {
    width: calc((var(--badge-size) * 0.7) - 8px);
    height: calc((var(--badge-size) * 0.7) - 8px);
    font-size: 0.8rem;
  }

  .center-logo {
    width: 48%;
  }
}

@media (max-width: 390px) {
  .orbits {
    width: min(100%, 300px);
  }

  .center-logo {
    width: 52%;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .orbits {
    width: min(100%, 920px);
  }
}

@keyframes orbit-spin {
  from {
    transform: rotate(var(--start));
  }
  to {
    transform: rotate(calc(var(--start) + 360deg));
  }
}

@keyframes orbit-counter {
  from {
    transform: rotate(calc(var(--start) * -1));
  }
  to {
    transform: rotate(calc((var(--start) * -1) - 360deg));
  }
}
</style>