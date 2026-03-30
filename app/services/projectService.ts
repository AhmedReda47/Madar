import type { ApiResponse } from "./../types/api";
import { useApi } from "./api";
import type { ProjectsResponse } from "~/components/portfolio/types";

export const getProjects = async (): Promise<ProjectsResponse[]> => {
  const api = useApi();
  const res = await api<ApiResponse<ProjectsResponse[]>>("/accounts/01KMRXTYRJPSSSGNKXS1J83Y4Q/projects");
  if (!res.success) {
    throw new Error(res.message || "Failed to fetch projects");
  }
  if (!Array.isArray(res.data)) {
    throw new Error("Invalid projects data formate");
  }
  return res.data;
};
