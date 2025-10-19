<script setup lang="ts">
import { Close } from '@element-plus/icons-vue'
import { createNameSpace } from '@learn-element-plus/utils'
import { computed } from 'vue'

defineOptions({
  name: 'ZDialog',
})

const modelValue = defineModel()

const ns = createNameSpace('dialog')
const classNames = computed(() => [
  ns.b(),
])

function handleWheel() {}
function close() {
  modelValue.value = false
}
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" :class="classNames" @click.self="close" @wheel.stop="handleWheel">
      <div :class="ns.b('content')" @click.stop="handleWheel">
        <div :class="ns.e('header')">
          <div>title</div>
          <div style="cursor: pointer" @click="close">
            <z-icon>
              <Close />
            </z-icon>
          </div>
        </div>

        <div>content</div>

        <div>footer</div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

</style>
