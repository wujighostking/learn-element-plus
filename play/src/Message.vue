<script setup lang="ts">
import type { MessageType } from 'learn-element-plus'
import { useMessage } from 'learn-element-plus'
import ComponentLayout from '@/component-layout.vue'

const message = useMessage()

const messageTypes: MessageType[] = [
  'warning',
  'error',
  'primary',
  'success',
  'info',
]

function showMessage(type: MessageType) {
  // ZMessage({
  //   message: `This is a(n) ${type}`,
  //   type,
  //   duration: type === 'primary' || type === 'warning' ? 3000 : 0,
  //   showClose: true,
  // })

  message[type]({
    message: `This is a(n) ${type}`,
    duration: 5000,
    showClose: false,
  })
}
</script>

<template>
  <ComponentLayout>
    <template v-for="type in messageTypes" :key="type">
      <div>
        <z-button :type="type as any" @click="showMessage(type)">
          {{ type }} message
        </z-button>
      </div>
    </template>
  </ComponentLayout>
</template>

<style scoped>

</style>
