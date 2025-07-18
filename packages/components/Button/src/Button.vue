<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { computed } from 'vue'
import { buttonProps } from './button'

defineOptions({
  name: 'ZButton',
})

const {
  type,
  size,
  disabled,
  round,
  icon,
  circle,
  link,
  loading,
  loadingIcon,
} = defineProps(buttonProps)

const emits = defineEmits(['click'])

function handleClick(e: MouseEvent) {
  if (disabled || loading) {
    e.preventDefault()
    return
  }

  emits('click', e)
}

const ns = createNameSpace('button')

// const classNames = computed(() => [ns.b(), ns.b(type)])
const classNames = computed(() => [
  ns.b(),
  ns.b(size),
  ns.e(type),
  ns.is('disabled', disabled),
  ns.is('round', round),
  ns.is('circle', circle),
  ns.is('loading', loading),
  ns.is('link', link),
])
</script>

<template>
  <button :class="classNames" @click="handleClick">
    <template v-if="loading">
      <z-icon>
        <component :is="loadingIcon" />
      </z-icon>
    </template>
    <template v-else-if="icon">
      <z-icon>
        <component :is="icon" />
      </z-icon>
    </template>
    <slot />
  </button>
</template>

<style scoped></style>
