import { API_ROUTES, client } from "@/api";
import type { Profile } from "@/interfaces/profile.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProfileStore = defineStore("profile", () => {
  const profile = ref<Profile | null>(null);

  async function fetchProfile() {
    const response = await client().get(API_ROUTES.profile);

    profile.value = response.data.data.user
  }

  return {
    profile,
    fetchProfile
  }
});
