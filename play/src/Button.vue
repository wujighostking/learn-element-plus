<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Search, Edit, House } from '@element-plus/icons-vue'
import ComponentLayout from '@/component-layout.vue'

const disabled = ref(true)
const loading = ref(false)
const handleClick = () => {
  console.log('click')
}
const submit = () => {
  loading.value = true
  console.log('submit')

  new Promise((resolve) => {
    setTimeout(() => {
      loading.value = false
      resolve('')
    }, 2000)
  }).finally(() => {
    loading.value = false
  })
}
</script>

<template>
  <component-layout>
    <z-button size="small" type="default">Default</z-button>
    <z-button size="small" type="primary" circle :icon="House"></z-button>
    <z-button size="small" type="success">Success</z-button>
    <z-button size="small" type="info">Info</z-button>
    <z-button size="small" type="warning">Warning</z-button>
    <z-button size="small" type="danger">Danger</z-button>
  </component-layout>

  <component-layout>
    <z-button>Default</z-button>
    <z-button type="primary" :disabled="disabled" @click="handleClick">
      Primary
    </z-button>
    <z-button type="success" round>Success</z-button>
    <z-button type="info" round>
      Info
      <z-icon>
        <Edit />
      </z-icon>
    </z-button>
    <z-button type="warning" @click="handleClick" :icon="Search" circle>
    </z-button>
    <z-button type="danger" :icon="Plus">Danger</z-button>
  </component-layout>

  <component-layout>
    <z-button size="large">Default</z-button>
    <z-button size="large" type="primary" :loading="loading" @click="submit">
      提交
    </z-button>
    <z-button size="large" type="success">Success</z-button>
    <z-button size="large" type="info">Info</z-button>
    <z-button size="large" type="warning">Warning</z-button>
    <z-button size="large" type="danger">Danger</z-button>
  </component-layout>

  <component-layout>
    <z-button link size="large" type="default" @click="handleClick"
      >Default</z-button
    >
    <z-button link type="primary">Primary</z-button>
    <z-button link type="success">Success</z-button>
    <z-button link type="info">Info</z-button>
    <z-button link type="warning">Warning</z-button>
    <z-button link type="danger">Danger</z-button>
  </component-layout>
</template>

<style scoped></style>
