<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { computed, ref } from 'vue'
import { Close } from '@element-plus/icons-vue'
import { alertProps, iconMap } from './alert'

defineOptions({
  name: 'ZAlert'
})

const _rootRef = ref<HTMLDivElement>()

const ns = createNameSpace('alert')

const { title, type, description, closeable, center, closeText, showIcon } =
  defineProps(alertProps)

const classNames = computed(() => [
  ns.b(),
  ns.b(type),
  ns.is('close', closeable),
  ns.is('center', center)
])

const handleClose = () => {
  _rootRef.value?.parentElement?.remove()
}
</script>

<template>
  <div :class="classNames" ref="_rootRef">
    <z-icon :class="ns.be(type, 'icon')">
      <Component :is="iconMap[type]"></Component>
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
        <slot name="icon" v-if="$slots.icon"></slot>
        <Close v-else />
      </z-icon>
    </template>
  </div>
</template>

<style scoped></style>
