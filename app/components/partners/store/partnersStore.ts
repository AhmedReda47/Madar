import { defineStore } from "pinia";
import { ref } from "vue";
import { getPartners } from "~/services/partnerService";
import type { PartnersResponse } from "../type";
export const usePartnersStore = defineStore("partners", () => {
  // --- State ---
  const partners = ref<PartnersResponse[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);
  // --- Actions ---
  const fetchPartners = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const data = await getPartners();
      partners.value = Array.isArray(data) ? data : [];
    } catch (err) {
      error.value = (err as Error).message;
      console.error("Error fetching partners:", err);
    } finally {
      isLoading.value = false;
    }
  };
  // --- Exposed Store ---
  return { partners, isLoading, error, fetchPartners };
});
