<script setup lang="ts">
import { Loading, Plus } from '@element-plus/icons-vue'
import ComponentLayout from '@/component-layout.vue'

const handleClick = () => {
  console.log('click')
}
</script>

<template>
  <component-layout>
    <z-icon
      color="#f00"
      size="30"
      a="1"
      style="cursor: pointer"
      @click="handleClick"
    >
      <Plus />
    </z-icon>
    <z-icon>
      <Loading />
    </z-icon>
  </component-layout>
</template>

<style scoped></style>
