import type { ApiResponse } from "~/types/api";
import { useApi } from "./api";
import type { TeamMemberResponse } from "@/components/team/type";
export const getTeamMembers = async (): Promise<TeamMemberResponse[]> => {
  const api = useApi();
  const res = await api<ApiResponse<TeamMemberResponse[]>>(
    "/accounts/01KMRXTYRJPSSSGNKXS1J83Y4Q/teams"
  );
  if (!res.success) {
    throw new Error(res.message || "Failed to fetch team members");
  }
  if (!Array.isArray(res.data)) {
    throw new Error("Invalid team data format");
  }
  return res.data;
};
