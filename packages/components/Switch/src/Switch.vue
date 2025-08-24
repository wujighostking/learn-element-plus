<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { ref, watch } from 'vue'
import { switchProps } from './switch'

defineOptions({
  name: 'ZSwitch',
})

const { modelValue, activeText, inactiveText, disabled } = defineProps(switchProps)
const emits = defineEmits(['change'])

const ns = createNameSpace('switch')

const active = ref(modelValue)

function setActive() {
  if (disabled)
    return

  active.value = !active.value

  emits('change', active.value)
}

watch(() => modelValue, (newValue) => {
  active.value = newValue
})
</script>

<template>
  <div :class="[ns.b(), ns.is('disabled', disabled)]">
    <div :class="[ns.bm('text', 'active'), ns.is('open', active)]">
      {{ activeText }}
    </div>
    <div
      :class="[
        ns.e('container'),
        ns.is('close', !active),
        ns.is('disabled', disabled),
      ]"
      @click="setActive"
    >
      <div
        :class="[
          ns.is('active', active),
          ns.is('inactive', !active),
          ns.em('container', 'button'),
        ]"
      />
    </div>
    <div :class="[ns.bm('text', 'inactive'), ns.is('close', !active)]">
      {{ inactiveText }}
    </div>
  </div>
</template>

<style scoped>

</style>
