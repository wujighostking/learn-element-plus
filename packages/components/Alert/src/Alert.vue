<script setup lang="ts">
import { Close } from '@element-plus/icons-vue'
import { createNameSpace } from '@learn-element-plus/utils'
import { computed, ref } from 'vue'
import { alertProps, iconMap } from './alert'

defineOptions({
  name: 'ZAlert',
})

const { title, type, description, closeable, center, closeText, showIcon }
  = defineProps(alertProps)

const _rootRef = ref<HTMLDivElement>()

const ns = createNameSpace('alert')

const classNames = computed(() => [
  ns.b(),
  ns.b(type),
  ns.is('close', closeable),
  ns.is('center', center),
])

function handleClose() {
  _rootRef.value?.parentElement?.remove()
}
</script>

<template>
  <div ref="_rootRef" :class="classNames">
    <z-icon :class="ns.be(type, 'icon')">
      <Component :is="iconMap[type]" />
    </z-icon>

    <div :class="ns.e('content')">
      <div>{{ title }}</div>
      <div v-if="description" :class="ns.em('content', 'description')">
        {{ description }}
      </div>
    </div>

    <span v-if="closeText" :class="ns.e('close')" @click="handleClose">
      {{ closeText }}
    </span>
    <template v-else-if="showIcon">
      <z-icon :class="ns.e('close')" @click="handleClose">
        <slot v-if="$slots.icon" name="icon" />
        <Close v-else />
      </z-icon>
    </template>
  </div>
</template>

<style scoped></style>
