<script setup lang="ts">
import { Close } from '@element-plus/icons-vue'
import { createNameSpace, isString, LOOP } from '@learn-element-plus/utils'
import { computed, h, useSlots } from 'vue'
import { dialogProps } from './dialog'

defineOptions({
  name: 'ZDialog',
})

const { title, width, fullscreen, modal, center } = defineProps(dialogProps)

const modelValue = defineModel()

const titleComponent = computed(() => isString(title) ? h('div', title) : h(title))
const _width = computed(() => isString(width) ? width : `${width}px`)

const { footer, header } = useSlots()

const ns = createNameSpace('dialog')
const classNames = computed(() => [
  ns.b(),
  ns.is('modal', modal),
  ns.is('center', center),
])

const handleWheel = LOOP
function close() {
  modelValue.value = false
}
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" :class="classNames" @click.self="close" @wheel.prevent="handleWheel">
      <div
        :style="{ width: _width }" :class="[ns.b('content'), ns.is('fullscreen', fullscreen)]"
        @click.stop="handleWheel"
      >
        <slot name="header" />
        <div v-if="!header" :class="ns.e('header')">
          <div :class="ns.em('header', 'title')">
            <title-component />
          </div>

          <div style="cursor: pointer" @click="close">
            <z-icon>
              <Close />
            </z-icon>
          </div>
        </div>

        <div>
          <slot />
        </div>

        <div v-if="footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>
