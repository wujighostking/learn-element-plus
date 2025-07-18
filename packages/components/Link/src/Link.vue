<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { computed } from 'vue'
import { linkProps } from './link'

defineOptions({
  name: 'ZLink',
})

const { type, underline, disabled, href, target, icon } = defineProps(linkProps)

const emits = defineEmits(['click'])

const ns = createNameSpace('link')

const classNames = computed(() => [
  ns.b(),
  ns.b(type),
  ns.is('disabled', disabled),
  !disabled && ns.bm(type, underline),
])

function handleClick(e: MouseEvent) {
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
        <component :is="icon" />
      </z-icon>
    </template>
    <slot />
  </a>
</template>

<style scoped></style>
