<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import ComponentLayout from '@/component-layout.vue'
</script>

<template>
  <ComponentLayout>
    <z-link type="default" href="#default">
      Warning
    </z-link>
    <z-link type="primary" disabled href="#primary">
      Primary
    </z-link>
    <z-link type="success" :icon="Plus">
      Success
    </z-link>
    <z-link type="info">
      Info
    </z-link>
    <z-link type="warning">
      Warning
    </z-link>
    <z-link type="danger">
      Danger
    </z-link>
  </ComponentLayout>

  <ComponentLayout>
    <z-link>default</z-link>
    <z-link underline="always" type="primary">
      always
    </z-link>
    <z-link underline="hover" type="danger">
      hover
    </z-link>
    <z-link underline="never">
      never
    </z-link>
    <z-link disabled type="primary">
      disabled
    </z-link>
  </ComponentLayout>
</template>

<style scoped></style>
