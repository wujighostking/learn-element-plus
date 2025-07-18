<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { computed } from 'vue'
import { iconProps } from './icon'

defineOptions({
  name: 'ZIcon',
  inheritAttrs: false,
})

const { color, size } = defineProps(iconProps)

const ns = createNameSpace('icon')

const style = computed(() => {
  if (!color && !size)
    return {}

  return {
    fontSize: `${size}px`,
    color,
  }
})

const classNames = computed(() => [ns.b()])
</script>

<template>
  <i :style="style" :class="classNames" v-bind="$attrs">
    <slot />
  </i>
</template>

<style scoped></style>
