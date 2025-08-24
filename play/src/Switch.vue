<script setup lang="ts">
import { Hide, View } from '@element-plus/icons-vue'
import { ref } from 'vue'
import ComponentLayout from '@/component-layout.vue'

const active = ref(false)
</script>

<template>
  <ComponentLayout>
    <z-switch />
    <z-switch active-text="是" inactive-text="否" />
    <z-switch v-model="active" disabled />
    <z-switch :active-icon="View" :inactive-icon="Hide" />
  </ComponentLayout>
</template>

<style scoped>

</style>
