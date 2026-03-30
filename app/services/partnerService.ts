import type { PartnersResponse } from "~/components/partners/type";
import { useApi } from "./api";
import type { ApiResponse } from "~/types/api";

export const getPartners = async (): Promise<PartnersResponse[]> => {
    const api = useApi()
    const res = await api<ApiResponse<PartnersResponse[]>>('/accounts/01KMRXTYRJPSSSGNKXS1J83Y4Q/partners')
    if(!res.success){
        throw new Error(res.message || 'Failed to fetch partners')
    }
    if(!Array.isArray(res.data)){
        throw new Error('Invalid partners data format')
    }
    return res.data
}