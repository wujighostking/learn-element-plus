<script setup lang="ts">
import { computed } from 'vue'
import { createNameSpace } from '@learn-element-plus/utils'
import { iconProps } from './icon'

defineOptions({
  name: 'ZIcon'
})

const ns = createNameSpace('icon')

const { color, size } = defineProps(iconProps)

const style = computed(() => {
  if (!color && !size) return {}

  return {
    fontSize: size + 'px',
    color: color
  }
})

const classNames = computed(() => [ns.b()])
</script>

<template>
  <i :style="style" :class="classNames">
    <slot />
  </i>
</template>

<style scoped></style>
