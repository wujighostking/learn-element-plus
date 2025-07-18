<script setup lang="ts">
import { Edit, House, Plus, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import ComponentLayout from '@/component-layout.vue'

const disabled = ref(true)
const loading = ref(false)
function handleClick() {}
function submit() {
  loading.value = true

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
  <ComponentLayout>
    <z-button size="small" type="default">
      Default
    </z-button>
    <z-button size="small" type="primary" circle :icon="House" />
    <z-button size="small" type="success">
      Success
    </z-button>
    <z-button size="small" type="info">
      Info
    </z-button>
    <z-button size="small" type="warning">
      Warning
    </z-button>
    <z-button size="small" type="danger">
      Danger
    </z-button>
  </ComponentLayout>

  <ComponentLayout>
    <z-button>Default</z-button>
    <z-button type="primary" :disabled="disabled" @click="handleClick">
      Primary
    </z-button>
    <z-button type="success" round>
      Success
    </z-button>
    <z-button type="info" round>
      Info
      <z-icon>
        <Edit />
      </z-icon>
    </z-button>
    <z-button type="warning" :icon="Search" circle @click="handleClick" />
    <z-button type="danger" :icon="Plus">
      Danger
    </z-button>
  </ComponentLayout>

  <ComponentLayout>
    <z-button size="large">
      Default
    </z-button>
    <z-button size="large" type="primary" :loading="loading" @click="submit">
      提交
    </z-button>
    <z-button size="large" type="success">
      Success
    </z-button>
    <z-button size="large" type="info">
      Info
    </z-button>
    <z-button size="large" type="warning">
      Warning
    </z-button>
    <z-button size="large" type="danger">
      Danger
    </z-button>
  </ComponentLayout>

  <ComponentLayout>
    <z-button link size="large" type="default" @click="handleClick">
      Default
    </z-button>
    <z-button link type="primary">
      Primary
    </z-button>
    <z-button link type="success">
      Success
    </z-button>
    <z-button link type="info">
      Info
    </z-button>
    <z-button link type="warning">
      Warning
    </z-button>
    <z-button link type="danger">
      Danger
    </z-button>
  </ComponentLayout>
</template>

<style scoped></style>
