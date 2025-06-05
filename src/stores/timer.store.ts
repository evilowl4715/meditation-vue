import { API_ROUTES, client } from "@/api";
import { defineStore } from "pinia";

export const useTimerStore = defineStore("timer", () => {

  async function sendTimer(type: string, value: number) {
    await client().post(API_ROUTES.stats, {
      type,
      value,
    });
  }

  return { sendTimer };
});
