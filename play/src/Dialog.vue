<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)

function close() {
  visible1.value = false
  visible2.value = false
  visible3.value = false
  visible4.value = false
}
</script>

<template>
  <div class="flex gap-10px">
    <z-button type="success" @click="visible1 = true">
      全屏显示
    </z-button>
    <z-button type="warning" @click="visible2 = true">
      居中显示
    </z-button>
    <z-button type="warning" @click="visible3 = true">
      关闭遮罩层
    </z-button>
    <z-button type="warning" @click="visible4 = true">
      拖拽
    </z-button>
  </div>
  <z-dialog v-model="visible1" title="Tips" fullscreen>
    <div>content</div>

    <template #footer>
      <div class="flex gap-10px justify-end">
        <z-button type="default" @click="close">
          取消
        </z-button>
        <z-button type="primary" @click="close">
          确定
        </z-button>
      </div>
    </template>
  </z-dialog>

  <z-dialog v-model="visible2" title="Tips" center>
    <div>content</div>

    <template #footer>
      <div class="flex gap-10px justify-end">
        <z-button type="default" @click="close">
          取消
        </z-button>
        <z-button type="primary" @click="close">
          确定
        </z-button>
      </div>
    </template>
  </z-dialog>

  <z-dialog v-model="visible3" title="Tips" modal>
    <div>content</div>

    <template #footer>
      <div class="flex gap-10px justify-end">
        <z-button type="default" @click="close">
          取消
        </z-button>
        <z-button type="primary" @click="close">
          确定
        </z-button>
      </div>
    </template>
  </z-dialog>

  <z-dialog v-model="visible4" title="Tips" draggable>
    <div>draggable</div>

    <template #footer>
      <div class="flex gap-10px justify-end">
        <z-button type="default" @click="close">
          取消
        </z-button>
        <z-button type="primary" @click="close">
          确定
        </z-button>
      </div>
    </template>
  </z-dialog>
</template>

<style scoped>

</style>
