<script setup lang="ts">
import type { MessageType } from 'learn-element-plus'
import { ZMessage } from 'learn-element-plus'

const messageTypes: MessageType[] = [
  'warning',
  'error',
  'primary',
  'success',
  'info',
]

function showMessage(type: MessageType) {
  ZMessage({
    message: `This is a(n) ${type}`,
    type,
    duration: type === 'primary' || type === 'warning' ? 3000 : 0,
    showClose: true,
  })
}
</script>

<template>
  <template v-for="type in messageTypes" :key="type">
    <div>
      <z-button @click="showMessage(type)">
        show {{ type }} message
      </z-button>
    </div>
  </template>
</template>

<style scoped>

</style>
