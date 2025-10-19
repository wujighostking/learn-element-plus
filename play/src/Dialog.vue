<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

function openDialog() {
  visible.value = true
}

function closeDialog() {
  visible.value = false
}

function cancel() {
  visible.value = false
}

function confirm() {
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
  <z-dialog v-model="visible" title="Tips" center>
    <div>content</div>

    <template #footer>
      <div class="flex gap-10px justify-end">
        <z-button type="default" @click="cancel">
          取消
        </z-button>
        <z-button type="primary" @click="confirm">
          确定
        </z-button>
      </div>
    </template>
  </z-dialog>
</template>

<style scoped>

</style>
