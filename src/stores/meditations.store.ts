import { API_ROUTES, http } from '@/api'
import type { Meditation } from '@/interfaces/meditation.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([])

  async function fetchMeditations() {
    const response = await http.get(API_ROUTES.meditations)
    meditations.value = response.data.data.meditations
  }

  return {
    meditations,
    fetchMeditations,
  }
})
