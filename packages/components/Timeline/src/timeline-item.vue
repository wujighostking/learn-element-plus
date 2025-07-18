<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { timelineItemProps } from './timeline-item'

defineOptions({
  name: 'ZTimelineItem',
})

// eslint-disable-next-line style/operator-linebreak
const { timestamp, hideTimestamp, placement, type, size, hollow } =
  defineProps(timelineItemProps)

const ns = createNameSpace('timeline-item')
</script>

<template>
  <li :class="ns.b()">
    <div :class="[ns.e('tail')]" />
    <div
      v-if="!$slots.dot"
      :class="[ns.em('node', size), ns.m(type), ns.is('hollow', hollow)]"
    >
      <div :class="ns.em('hollow', size)" />
    </div>

    <div v-if="$slots.dot" :class="[ns.em('node', size), ns.m(type)]">
      <slot name="dot" />
    </div>

    <div>
      <div v-if="!hideTimestamp && placement === 'top'">
        {{ timestamp }}
      </div>

      <div>
        <slot />
      </div>

      <div v-if="!hideTimestamp && placement === 'bottom'">
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<style scoped></style>
