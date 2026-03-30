import { defineStore } from "pinia";
import type { TeamMemberResponse } from "../type";
import { ref } from "vue";
import { getTeamMembers } from "~/services/teamService";
export const useTeamStore = defineStore("team", () => {
  // --- State ---
  const teamMembers = ref<TeamMemberResponse[]>([]);
  const isLoading = ref(true);
  const error = ref<Error | null>(null);
  // --- Actions ---
  const fetchTeamMembers = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const data = await getTeamMembers();
      teamMembers.value = data;
    } catch (err) {
      error.value = err as Error;
      console.error("Error fetching team:", err);
    } finally {
      isLoading.value = false;
    }
  };
  // --- Exposed Store ---
  return { teamMembers, isLoading, error, fetchTeamMembers };
});
