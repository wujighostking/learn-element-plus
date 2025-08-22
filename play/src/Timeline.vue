<script setup lang="ts">
import type { TimelineItemProps } from '@learn-element-plus/components'
import type { Component } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import ComponentLayout from '@/component-layout.vue'

interface IItem extends TimelineItemProps {
  content?: string
  icon?: Component
}

const activities: IItem[] = [
  {
    content: '隐藏时间戳',
    timestamp: '2018-04-15',
    hideTimestamp: true,
  },
  {
    content: '基础设置',
    timestamp: '2018-04-13',
    placement: 'top',
  },
  {
    content: 'size设置为small',
    timestamp: '2018-04-11',
    type: 'primary',
    size: 'small',
  },
  {
    content: '自定义icon',
    timestamp: '2018-04-11',
    icon: Plus,
  },
  {
    content: '空心点',
    timestamp: '2018-04-11',
    hollow: true,
    type: 'primary',
  },
  {
    content: 'small hollow',
    timestamp: '2018-04-11',
    hollow: true,
    size: 'small',
    type: 'primary',
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
        :hide-timestamp="activity.hideTimestamp"
        :placement="activity.placement"
        :type="activity.type"
        :size="activity.size"
        :hollow="activity.hollow"
      >
        {{ activity.content }}
        <template v-if="activity.icon" #dot>
          <Plus />
        </template>
      </z-timeline-item>
    </z-timeline>
  </ComponentLayout>
</template>

<style scoped></style>
