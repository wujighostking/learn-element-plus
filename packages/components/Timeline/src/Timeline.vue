<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { computed, onMounted, useTemplateRef } from 'vue'
import { timelineProps } from './timeline'

defineOptions({
  name: 'ZTimeline'
})

const {
  timestamp,
  hideTimestamp,
  // center,
  // placement,
  type
  // color,
  // size,
  // icon,
  // hollow
} = defineProps(timelineProps)

const ns = createNameSpace('timeline')
const classNames = computed(() => [ns.b()])

const _rootRef = useTemplateRef<HTMLDivElement>('_rootRef')
const _lineRef = useTemplateRef<HTMLDivElement>('_lineRef')
const _infoRef = useTemplateRef<HTMLDivElement>('_infoRef')

onMounted(() => {
  const _maxHeight = Math.max(
    _lineRef.value?.getBoundingClientRect?.().height ?? 0,
    _infoRef.value?.getBoundingClientRect?.().height ?? 0
  )

  document.documentElement.style.setProperty(
    '--timeline-content-height',
    _maxHeight + 'px'
  )
})
</script>

<template>
  <div :class="classNames" ref="_rootRef">
    <div :class="ns.e('line')" ref="_lineRef">
      <span :class="ns.bm(type, 'dot')"></span>
      <span :class="ns.m('separator')"></span>
    </div>

    <div :class="ns.b('info')" ref="_infoRef">
      <div :class="[ns.m('time')]" v-if="!hideTimestamp">
        {{ timestamp }}
      </div>
      <div
        v-if="$slots.default"
        :class="[ns.m('content'), ns.is('hide-timestamp', hideTimestamp)]"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
