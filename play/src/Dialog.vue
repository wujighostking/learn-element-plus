<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

function openDialog() {
  visible.value = true
}

function closeDialog() {
  visible.value = false
}
</script>

<template>
  <div class="flex gap-10px">
    <z-button type="success" @click="openDialog">
      open
    </z-button>
    <z-button type="warning" @click="closeDialog">
      close
    </z-button>
  </div>
  <z-dialog v-model="visible" />
</template>

<style scoped>

</style>
