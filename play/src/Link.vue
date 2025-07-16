<script setup lang="ts">
import ComponentLayout from '@/component-layout.vue'
import { Plus } from '@element-plus/icons-vue'
</script>

<template>
  <component-layout>
    <z-link type="default" href="#default">Default</z-link>
    <z-link type="primary" disabled href="#primary">Primary</z-link>
    <z-link type="success" :icon="Plus">Success</z-link>
    <z-link type="info">Info</z-link>
    <z-link type="warning">Warning</z-link>
    <z-link type="danger">Danger</z-link>
  </component-layout>
</template>

<style scoped></style>
