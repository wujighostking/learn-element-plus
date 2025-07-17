<script setup lang="ts">
import ComponentLayout from '@/component-layout.vue'
import { ref } from 'vue'
import type { TimelineProps } from '@learn-element-plus/components'

const timelineItems = ref<TimelineProps[]>([
  {
    timestamp: '2021-01-01',
    hideTimestamp: true,
    center: true,
    content: 'Update Github template'
  },
  {
    timestamp: '2021-02-01',
    type: 'primary',
    content: 'Update Github template'
  }
])
</script>

<template>
  <component-layout>
    <div
      style="display: flex; justify-content: flex-start; flex-direction: column"
    >
      <template v-for="(item, index) in timelineItems" :key="index">
        <Z-timeline
          :timestamp="item.timestamp"
          :hide-timestamp="item.hideTimestamp"
          :center="item.center"
          :type="item.type"
        >
          {{ item.content }}
        </Z-timeline>
      </template>
    </div>
  </component-layout>
</template>

<style scoped></style>
