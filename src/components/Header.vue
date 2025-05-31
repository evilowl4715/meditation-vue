<script lang="ts" setup>
import LogoIcon from '@/icons/LogoIcon.vue'
import PlayIcon from '@/icons/PlayIcon.vue'
import StatisticIcon from '@/icons/StatisticIcon.vue'
import ExitIcon from '@/icons/ExitIcon.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <div class="header__logo">
          <LogoIcon />
        </div>
        <div class="header__menu">
          <ul>
            <li>
              <RouterLink active-class="active-link" to="/meditation">
                <i>
                  <PlayIcon />
                </i>
                Медитация
              </RouterLink>
            </li>
            <li>
              <RouterLink active-class="active-link" to="/statistics">
                <i>
                  <StatisticIcon />
                </i>
                Статистика
              </RouterLink>
            </li>
            <li>
              <RouterLink active-class="active-link" to="/auth">
                <i><ExitIcon /></i>
                Выход
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  margin: 40px 0;
}

.header__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__menu ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.header__menu ul li {
  padding: 20px 55px;
  box-sizing: border-box;
  border-right: 3px solid #3a5051;
}

.header__menu ul li:last-child {
  border: none;
}

.header__menu ul li a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  font-weight: 400;
  font-size: 22px;
  opacity: 0.2;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.header__menu ul li a:hover {
  opacity: 1;
}

.header__menu ul li a i {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__menu ul li .active-link {
  opacity: 1;
}
</style>
