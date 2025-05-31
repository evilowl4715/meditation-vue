<script lang="ts" setup>
import MeditationsList from "@/components/MeditationsList.vue";
import Header from "@/components/Header.vue";
import { useProfileStore } from "@/stores/profile.store";
import { useFeelingStore } from "@/stores/feeling.store";
import { onMounted } from "vue";

const profileStore = useProfileStore();
const feelingStore = useFeelingStore();
onMounted(() => {
  profileStore.fetchProfile();
});
</script>

<template>
  <Header />
  <div class="container">
    <div class="meditation">
      <div class="meditation__row">
        <div class="meditation__left">
          <div class="meditation__avatar">
            <img src="../assets/avatar.png" alt="" />
          </div>
          <div class="meditation__title">
            <h1>Добро пожаловать, {{ profileStore.profile?.username }}!</h1>
            <p>Как вы сегодня себя чувствуете?</p>
          </div>
          <div class="meditation__icons">
            <div
              v-for="feeling in feelingStore.feelings"
              :key="feeling.value"
              @click="feelingStore.sendFeeling(feeling.type, feeling.value)"
              class="meditation__icon"
            >
              <i>
                <component :is="feeling.icon" class="feeling-icon" />
              </i>
              <p>{{ feeling.label }}</p>
            </div>
          </div>
        </div>
        <div class="meditation__right">
          <MeditationsList />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meditation {
  margin-top: 50px;
}

.meditation__row {
  display: flex;
  gap: 100px;
  justify-content: space-between;
}

.meditation__left {
  max-width: 370px;
  width: 100%;
}

.meditation__avatar {
  width: 129px;
  height: 129px;
  border-radius: 100%;
  overflow: hidden;
  margin-bottom: 30px;
}

.meditation__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.meditation__title h1 {
  font-weight: 500;
  font-size: 30px;
  color: #fff;
}

.meditation__title p {
  font-weight: 400;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.7);
}

.meditation__icons {
  margin-top: 40px;
  display: flex;
  gap: 22px;
}

.meditation__icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.meditation__icon i {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  width: 62px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.meditation__icon:last-child svg {
  position: relative;
  top: 15px;
}

.meditation__icon p {
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
}
</style>
