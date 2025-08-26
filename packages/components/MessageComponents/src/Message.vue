<script setup lang="ts">
import type { Component } from 'vue'
import type { MessageType } from './message'
import { CircleCloseFilled, Close, InfoFilled, SuccessFilled, WarningFilled } from '@element-plus/icons-vue'
import { createNameSpace } from '@learn-element-plus/utils'
import { computed, shallowRef, useTemplateRef } from 'vue'
import { messageElementList, setTop } from '../index'
import { messageProps } from './message'

defineOptions({
  name: 'ZMessage',
})

const { message, type = 'info', icon, showClose } = defineProps(messageProps)

const messageRootRef = useTemplateRef<HTMLDivElement | null>('messageRoot')

const ns = createNameSpace('message')

const classNames = computed(() => [
  ns.b(),
  ns.m(type),
])

const iconsType = shallowRef<Record<MessageType, Component>>({
  primary: InfoFilled,
  success: SuccessFilled,
  warning: WarningFilled,
  info: InfoFilled,
  error: CircleCloseFilled,
})

function close(e: MouseEvent) {
  e.preventDefault()
  const container = messageRootRef.value?.parentElement as HTMLElement
  const body = container?.parentElement

  const deleteElement = messageRootRef.value as HTMLElement
  const deleteIndex = messageElementList.findIndex(el => el === deleteElement)
  const { height } = deleteElement.getBoundingClientRect()

  setTop(-height - 12)

  messageElementList.splice(deleteIndex, 1)

  messageElementList.forEach((el, index) => {
    if (index < deleteIndex)
      return

    const top = +el.style.top.slice(0, -2) - height - 12

    el.style.top = `${top}px`
  })

  body?.removeChild(container)
}
</script>

<template>
  <div ref="messageRoot" :class="classNames">
    <div :class="[ns.bm('icon', type)]">
      <component :is="icon ?? iconsType[type]" />
    </div>

    <div :class="[ns.em('message', type)]">
      {{ message }}
    </div>

    <div v-if="showClose" :class="[ns.b('close')]" @click="close">
      <component :is="Close" />
    </div>
  </div>
</template>

<style scoped>

</style>
