<template>
  <section id="clients" class="lg:px-16 px-5 sm:px-8 mt-28">
    <div class="rounded-[1.875rem] border border-white-10 py-10">
      <SectionHeader
        class="[&_span]:bg-primary"
        label="OUR CLIENTS"
        title="Madar Clients"
      />

      <div
        class="mt-10 grid grid-cols-3 place-items-center gap-x-4 gap-y-6 md:grid-cols-6"
      >
        <div
          v-for="client in clients"
          :key="client.id"
          class="group flex md:h-[90px] md:w-[140px] h-[50px] w-[100px] items-center justify-center rounded-xl border border-transparent transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03]"
        >
          <NuxtLink
            :href="client.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NuxtImg
              :src="client.image.url"
              :alt="`${client.name} logo`"
              class="h-[90px] w-[90px] object-contain opacity-50 transition-opacity duration-300 group-hover:opacity-100"
              width="120"
              height="56"
              loading="lazy"
              decoding="async"
              format="webp"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import SectionHeader from "../ui/SectionHeader.vue";
import { useClientsStore } from "./store/clientsStore";
import { storeToRefs } from "pinia";

const clientsStore = useClientsStore();
const { clients, error, isLoading } = storeToRefs(clientsStore);
const clientItems = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1
}));

onMounted(async () => {
  await clientsStore.fetchClients();
  if (error.value) {
    console.error("Error fetching clients:", error.value);
  }
});
</script>
<style scoped></style>
