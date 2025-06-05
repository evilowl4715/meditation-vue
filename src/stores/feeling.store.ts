import { API_ROUTES, client } from "@/api";
import { defineStore } from "pinia";
import { ref } from "vue";
import Relaxed from "@/icons/Relaxed.vue";
import Focused from "@/icons/Focused.vue";
import YinYang from "@/icons/YinYang.vue";
import Alarming from "@/icons/Alarming.vue";

export const useFeelingStore = defineStore("feeling", () => {
  const feeling = ref<string>();
  const feelings = [
    {
      label: "Спокойно",
      type: "feeling_calm",
      icon: YinYang,
      value: 1,
    },
    {
      label: "Расслабленно",
      type: "feeling_relax",
      icon: Relaxed,
      value: 2,
    },
    {
      label: "Фокусировано",
      type: "feeling_focus",
      icon: Focused,
      value: 3,
    },
    {
      label: "Тревожно",
      type: "feeling_anxiety",
      icon: Alarming,
      value: 4,
    },
  ];

  async function sendFeeling(type: string, value: number) {
    await client().post(API_ROUTES.stats, {
      type,
      value,
    });
  }

  return { feeling, sendFeeling, feelings };
});
