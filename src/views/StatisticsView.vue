<script lang="ts" setup>
import Cloud from "@/icons/Cloud.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <div class="container">
    <div class="statistics">
      <div class="statistic mint">
        <div class="statistic__value">500</div>
        <div class="statistic__name">Минут медитации</div>
        <Cloud :width="'100%'" :height="'98'" :color="'#2B5B54'" />
      </div>
      <div class="statistic green">
        <div class="statistic__value">10</div>
        <div class="statistic__name">Спокойных дней</div>
        <Cloud :width="'100%'" :height="'98'" :color="'#2B5B33'" />
      </div>
      <div class="statistic blue">
        <div class="statistic__value">500</div>
        <div class="statistic__name">Расслабленных дней</div>
        <Cloud :width="'100%'" :height="'98'" :color="'#2B505B'" />
      </div>
      <div class="statistic yellow">
        <div class="statistic__value">500</div>
        <div class="statistic__name">Фокусированных дней</div>
        <Cloud :width="'100%'" :height="'98'" :color="'#595B2B'" />
      </div>
      <div class="statistic red">
        <div class="statistic__value">500</div>
        <div class="statistic__name">Тревожных дней</div>
        <Cloud :width="'100%'" :height="'98'" :color="'#5B2B2C'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.statistics {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
}

.statistic {
  width: calc(33.333% - 34px);
  box-sizing: border-box;
  height: 200px;
  padding: 10px 20px 40px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.statistic__value {
  margin-left: auto;
  font-weight: 700;
  font-size: 80px;
  text-align: right;
}

.statistic__name {
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  position: relative;
  z-index: 2;
}

.statistics svg {
  position: absolute;
  bottom: -2px;
  left: 0;
  object-fit: cover;
}

.mint {
  background: #69b09c;
}

.green {
  background: #69b069;
}

.blue {
  background: #69a1b0;
}

.yellow {
  background: #9cb069;
}

.red {
  background: #b0696a;
}
</style>
