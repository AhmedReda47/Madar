import { defineStore } from "pinia";
import { ref } from "vue";
import { getClients } from "~/services/clientService";
import type { ClientsResponse } from "../types";
export const useClientsStore = defineStore("clients",()=> {
    // --- State ---
    const clients = ref<ClientsResponse[]>([])
    const isLoading = ref(false);
    const error = ref<string | null>(null)
    // --- Actions ---
    const fetchClients = async () => {
        isLoading.value = true;
        error.value = null;
        try {
            const data = await getClients();
            clients.value = Array.isArray(data) ? data : [];
        }
        catch (err){
            error.value = (err as Error).message;
            console.error("Error fetching clients:", err)
        }
        finally {
            isLoading.value = false;
        }
    }
    // --- Exposed Store ---
    return { clients, isLoading, error, fetchClients }
})