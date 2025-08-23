<script setup lang="ts">
import ComponentLayout from '@/component-layout.vue'

const date = new Date('2025-10-01')
</script>

<template>
  <ComponentLayout>
    <z-calendar v-model="date" />
  </ComponentLayout>
</template>

<style scoped></style>
