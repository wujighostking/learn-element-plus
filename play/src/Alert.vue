<script setup lang="ts">
import ComponentLayout from '@/component-layout.vue'
import LayOut from '@/lay-out.vue'
import type { alertType } from '@learn-element-plus/components'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const types: alertType[] = ['primary', 'success', 'info', 'warning', 'error']
</script>

<template>
  <lay-out>
    <template v-for="(v, i) in types" :key="v">
      <component-layout>
        <z-alert
          :title="`${v} alert`"
          :description="i < 2 ? v : ''"
          :type="v"
        />
      </component-layout>
    </template>

    <template v-for="(v, i) in types" :key="v">
      <component-layout>
        <z-alert
          :title="`${v} center`"
          :description="i < 2 ? v : ''"
          :type="v"
          center
          :close-text="i == 0 ? 'closeText' : ''"
        >
          <template #icon>
            <CircleCloseFilled />
          </template>
        </z-alert>
      </component-layout>
    </template>
  </lay-out>
</template>

<style scoped></style>
