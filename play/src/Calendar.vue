<script setup lang="ts">
import ComponentLayout from '@/component-layout.vue'

const nowDate = new Date('2025-10-01')
</script>

<template>
  <ComponentLayout>
    <z-calendar v-model="nowDate">
      <template #date-cell="{ date }">
        <div>
          {{ date.day }}
        </div>
      </template>
    </z-calendar>
  </ComponentLayout>
</template>

<style scoped></style>
