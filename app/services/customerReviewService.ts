import type { ApiResponse } from "~/types/api";
import { useApi } from "./api";
import type { CustomerReview } from "~/components/testimonials/type";
export const getCustomerReviews = async (): Promise<CustomerReview[]> => {
    const api = useApi()
    const res =  await api<ApiResponse<CustomerReview[]>>('/accounts/01KMRXTYRJPSSSGNKXS1J83Y4Q/customer-reviews')
    if (!res.success) {
        throw new Error(res.message || 'Failed to fetch customer reviews')
    }
    if (!Array.isArray(res.data)) {
        throw new Error('Invalid customer reviews data format')
    }
    return res.data
}