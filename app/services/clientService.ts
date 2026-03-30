import type { ApiResponse } from "~/types/api";
import { useApi } from "./api";
import type { ClientsResponse } from "~/components/clients/types";

export const getClients = async (): Promise<ClientsResponse[]> => {
    const api = useApi()
    const res = await api<ApiResponse<ClientsResponse[]>>('/accounts/01KMRXTYRJPSSSGNKXS1J83Y4Q/clients')
    if(!res.success){
        throw new Error(res.message || 'Failed to Fetch clients')
    }
    if(!Array.isArray(res.data)){
        throw new Error('Invalid clients data format')
    }
    return res.data
}