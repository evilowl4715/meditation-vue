<script lang="ts" setup>
const { size = 111 } = defineProps<{ size: number }>()
</script>

<template>
  <button :style="{ width: `${size}px` }" class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  background: var(--color-green);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  height: 39px;
}
</style>
