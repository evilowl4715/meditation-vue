<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth.store";
import { watch } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import BigLogo from "@/icons/BigLogo.vue";

const form = ref<{ username?: string; password?: string; email?: string }>({});

const mode = ref<"login" | "register">("login");

const authStore = useAuthStore();
const router = useRouter();

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: "meditation" });
    }
  },
);

async function onSubmit() {
  if (
    !form.value.username ||
    !form.value.password ||
    (mode.value === "register" && !form.value.email)
  ) {
    return;
  }

  try {
    if (mode.value === "register") {
      await authStore.register(form.value.username, form.value.password, form.value.email);

      await authStore.login(form.value.username, form.value.password);
    } else {
      await authStore.login(form.value.username, form.value.password);
    }
    form.value = {};
    router.push({ name: "meditation" });
  } catch (error) {
    console.error("Ошибка:", error);
    alert("Ошибка авторизации или регистрации");
  }
}

function toggleMode() {
  mode.value = mode.value === "login" ? "register" : "login";
}
</script>

<template>
  <div class="auth">
    <div class="auth__logo">
      <BigLogo />
    </div>
    <form @submit.prevent="onSubmit">
      <input v-model="form.username" type="text" placeholder="Логин" required />
      <input v-model="form.password" type="password" placeholder="Пароль" required />
      <input
        v-if="mode === 'register'"
        v-model="form.email"
        type="email"
        placeholder="Email"
        required
      />
      <button>
        {{ mode === "login" ? "Войти" : "Создать аккаунт" }}
      </button>
      <p>
        {{ mode === "login" ? "Нет аккаунта?" : "Уже есть аккаунт?" }}
        <a href="#" @click.prevent="toggleMode">
          {{ mode === "login" ? "Создать аккаунт" : "Войти" }}
        </a>
      </p>
    </form>
  </div>
</template>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(../assets/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.auth form {
  max-width: 320px;
  width: 100%;
}

.auth input {
  border: none;
  background: none;
  box-sizing: border-box;
  padding-left: 10px;
  padding-bottom: 10px;
  outline: none;
  border-bottom: 1px solid #fff;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  margin-bottom: 40px;
  display: block;
  width: 100%;
  max-width: 100%;
}

.auth input::placeholder {
  font-weight: 400;
  font-size: 18px;
  color: #bec2c2;
}

.auth button {
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
  margin-top:15px;
}

.auth button:hover {
  background: var(--color-green);
}

.auth p {
  margin-top: 20px;
  text-align: center;
}

.auth p a {
  color: var(--color-white);
}

.auth p a:hover {
  color: var(--color-green);
}
</style>
