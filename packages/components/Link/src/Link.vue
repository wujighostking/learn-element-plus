<script setup lang="ts">
import { linkProps } from './link'
import { computed } from 'vue'
import { createNameSpace } from '@learn-element-plus/utils'

defineOptions({
  name: 'ZLink'
})

const emits = defineEmits(['click'])

const ns = createNameSpace('link')

const { type, underline, disabled, href, target, icon } = defineProps(linkProps)
const classNames = computed(() => [
  ns.b(),
  ns.b(type),
  ns.is('disabled', disabled),
  !disabled && ns.bm(type, underline)
])

const handleClick = (e: MouseEvent) => {
  if (disabled) {
    e.preventDefault()
    return
  }

  emits('click', e)
}
</script>

<template>
  <a
    :class="classNames"
    :href="disabled || !href ? undefined : href"
    :target="disabled || !href ? undefined : target"
    @click="handleClick"
  >
    <template v-if="icon">
      <z-icon>
        <component :is="icon"></component>
      </z-icon>
    </template>
    <slot></slot>
  </a>
</template>

<style scoped></style>
