<script lang="ts" setup>
import MeditationsList from '@/components/MeditationsList.vue'
import Relaxed from '@/Icons/Relaxed.vue'
import Focused from '@/Icons/Focused.vue'
import YinYang from '@/Icons/YinYang.vue'
import Alarming from '@/Icons/Alarming.vue'
</script>

<template>
  <div class="meditation">
    <div class="meditation__row">
      <div class="meditation__left">
        <div class="meditation__avatar">
          <img src="../assets/avatar.png" alt="" />
        </div>
        <div class="meditation__title">
          <h1>Добро пожаловать, Наталья!</h1>
          <p>Как вы сегодня себя чувствуете?</p>
        </div>
        <div class="meditation__icons">
          <div class="meditation__icon">
            <i><YinYang /></i>
            <p>Спокойно</p>
          </div>
          <div class="meditation__icon">
            <i><Relaxed /></i>
            <p>Расслабленно</p>
          </div>
          <div class="meditation__icon">
            <i><Focused /></i>
            <p>Фокусировано</p>
          </div>
          <div class="meditation__icon">
            <i><Alarming /></i>
            <p>Тревожно</p>
          </div>
        </div>
      </div>
      <div class="meditation__right">
        <MeditationsList />
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
