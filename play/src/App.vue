<script setup lang="ts">
import { Plus, Loading } from '@element-plus/icons-vue'

const handleClick = () => {
  console.log('click')
}
</script>

<template>
  <div>
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

    <z-button>none</z-button>
  </div>
</template>

<style scoped></style>
