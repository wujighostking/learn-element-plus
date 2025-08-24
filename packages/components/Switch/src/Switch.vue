<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { ref } from 'vue'
import { switchProps } from './switch'

defineOptions({
  name: 'ZSwitch',
})

const props = defineProps(switchProps)
const emits = defineEmits(['change'])

const ns = createNameSpace('switch')

const active = ref(props.modelValue)

function setActive() {
  active.value = !active.value

  emits('change', active.value)
}
</script>

<template>
  <div :class="ns.b()">
    <div :class="[ns.bm('text', 'active'), ns.is('open', active)]">
      开
    </div>
    <div
      :class="[ns.e('container'), ns.is('close', !active)]"
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
      关
    </div>
  </div>
</template>

<style scoped>

</style>
