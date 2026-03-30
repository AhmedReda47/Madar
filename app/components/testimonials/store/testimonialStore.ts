import { defineStore } from "pinia";
import { ref } from "vue";
import { getCustomerReviews } from "~/services/customerReviewService";
import type { CustomerReview } from "../type";

export const useTestimonialStore = defineStore("testimonial", () => {
  const reviews = ref<CustomerReview[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  const fetchReviews = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const data = await getCustomerReviews();
      reviews.value = Array.isArray(data) ? data : [];
    } catch (err) {
      error.value = (err as Error).message;
      console.error("Error fetching reviews:", err);
    } finally {
      isLoading.value = false;
    }
  };

  return { reviews, isLoading, error, fetchReviews };
});
