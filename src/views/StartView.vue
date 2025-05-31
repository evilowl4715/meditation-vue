<script lang="ts" setup>
import BigLogo from "@/icons/BigLogo.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function toLogin() {
  router.push("/auth");
}
</script>

<template>
  <Header />
  <div class="start-view">
    <div class="start-view__logo">
      <BigLogo />
    </div>
    <div class="start-view__title">
      <h1>Добро пожаловать!</h1>
      <p>
        Медитируй и оставайся в фокусе, <br />
        чтобы быть счастливым.
      </p>
      <button @click="toLogin" class="start-view__btn">Войти в приложение</button>
    </div>
  </div>
</template>

<style scoped>
.start-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(../assets/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.start-view__title {
  text-align: center;
}

.start-view__title h1 {
  font-weight: 700;
  font-size: 34px;
  text-align: center;
  color: var(--color-white);
}

.start-view__title p {
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: var(--color-white);
}

.start-view__btn {
  background: var(--color-light-green);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  max-width: 321px;
  width: 100%;
  height: 61px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 25px;
  color: var(--color-white);
  border: none;
  cursor: pointer;
  margin-top: 65px;
}

.start-view__btn:hover {
  background: var(--color-green);
}

.start-view__title {
  margin-top: 40px;
  margin-bottom: 65px;
}
</style>
