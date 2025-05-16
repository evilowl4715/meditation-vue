<script lang="ts" setup>
import ArrowIcon from '@/Icons/ArrowIcon.vue'
import Button from './Button.vue'
import { useMeditationsStore } from '@/stores/meditations.store'
import { onMounted } from 'vue'

const store = useMeditationsStore()

onMounted(() => {
  store.fetchMeditations()
  console.log('Meditations in component:', store.meditations)
})
</script>

<template>
  <div class="meditations-list">
    <div v-for="meditation in store.meditations" :key="meditation.ID" class="meditation">
      <div class="meditation__name">
        {{ meditation.title }}
      </div>
      <div class="meditation__desc">
        {{ meditation.description }}
      </div>
      <div class="meditation__btn">
        <Button :size="111"> Начать <ArrowIcon /> </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meditations-list {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

.meditation {
  width: calc(50% - 11px);
  box-sizing: border-box;
  background: var(--color-white);
  border-radius: 20px;
  padding: 22px 30px;
  color: var(--color-black);
}

.meditation__name {
  font-weight: 500;
  font-size: 25px;
}

.meditation__desc {
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 15px;
}
</style>
