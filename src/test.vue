<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Получаем duration из query параметров
const durationMin = Number(route.query.duration) || 5; // fallback = 5
const totalTime = durationMin * 60;

const time = ref(totalTime);
const isRunning = ref(false);
let timer: number | null = null;

const formattedTime = computed(() => {
  const min = Math.floor(time.value / 60).toString().padStart(2, '0');
  const sec = (time.value % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
});

function toggle() {
  isRunning.value = !isRunning.value;
  if (isRunning.value) {
    timer = window.setInterval(() => {
      if (time.value > 0) {
        time.value--;
      } else {
        stop();
        // Тут можно показать «медитация завершена» или перейти дальше
      }
    }, 1000);
  } else {
    stop();
  }
}

function stop() {
  isRunning.value = false;
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function reset() {
  stop();
  time.value = totalTime;
}

function restart() {
  time.value = totalTime;
  toggle();
}

onUnmounted(() => {
  stop();
});

onMounted(() => {
  toggle(); // автозапуск
});
</script>
