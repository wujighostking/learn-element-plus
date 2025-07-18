<script setup lang="ts">
import type { alertType } from '@learn-element-plus/components'
import { CircleCloseFilled } from '@element-plus/icons-vue'
import ComponentLayout from '@/component-layout.vue'
import LayOut from '@/lay-out.vue'

const types: alertType[] = ['primary', 'success', 'info', 'warning', 'error']
</script>

<template>
  <LayOut>
    <template v-for="(v, i) in types" :key="v">
      <ComponentLayout>
        <z-alert
          :title="`${v} alert`"
          :description="i < 2 ? v : ''"
          :type="v"
        />
      </ComponentLayout>
    </template>

    <template v-for="(v, i) in types" :key="v">
      <ComponentLayout>
        <z-alert
          :title="`${v} center`"
          :description="i < 2 ? v : ''"
          :type="v"
          center
          :close-text="i === 0 ? 'closeText' : ''"
        >
          <template #icon>
            <CircleCloseFilled />
          </template>
        </z-alert>
      </ComponentLayout>
    </template>
  </LayOut>
</template>

<style scoped></style>
