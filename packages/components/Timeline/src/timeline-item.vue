<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { timelineItemProps } from './timeline-item'

defineOptions({
  name: 'ZTimelineItem'
})

const { timestamp } = defineProps(timelineItemProps)

const ns = createNameSpace('timeline-item')
</script>

<template>
  <li :class="ns.b()">
    <div :class="[ns.e('tail')]"></div>
    <div :class="[ns.e('node')]"></div>

    <div>
      <div>
        <slot />
      </div>

      <div>
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<style scoped></style>
