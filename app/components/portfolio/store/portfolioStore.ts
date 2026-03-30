import { defineStore } from "pinia";
import { ref } from "vue";
import { getProjects } from "~/services/projectService";
import type { ProjectsResponse } from "../types";
export const usePortfolioStore = defineStore("portfolio", () => {
  // --- State ---
  const projects = ref<ProjectsResponse[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);
  // --- Actions ---
  const fetchProjects = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const data = await getProjects();
      projects.value = Array.isArray(data) ? data : [];
    } catch (err) {
      error.value = (err as Error).message;
      console.error("Error fetching projects:", err);
    } finally {
      isLoading.value = false;
    }
  };
  // --- Exposed Store ---
  return { projects, isLoading, error, fetchProjects };
});
