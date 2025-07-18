<script setup lang="ts">
import ComponentLayout from '@/component-layout.vue'

const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]
</script>

<template>
  <ComponentLayout>
    <z-timeline>
      <z-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </z-timeline-item>
    </z-timeline>
  </ComponentLayout>
</template>

<style scoped></style>
