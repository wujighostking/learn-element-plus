<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { getDate } from '@learn-element-plus/utils/date'
import { ref } from 'vue'

defineOptions({
  name: 'ZCalendar',
})

const ns = createNameSpace('calendar')
const date = ref(getDate())

const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

function toPrevious() {
  let { year, month, day } = date.value

  const nextMonth = month - 1
  if (nextMonth <= 0) {
    year -= 1
    month = 12
    day = 1
  }
  else {
    month = nextMonth
  }

  date.value = { year, month, day }
}
function toToday() {
  date.value = getDate()
}
function toNext() {
  let { year, month, day } = date.value

  const nextMonth = month + 1
  if (nextMonth >= 13) {
    year += 1
    month = 1
    day = 1
  }
  else {
    month = nextMonth
  }

  date.value = { year, month, day }
}
</script>

<template>
  <div :class="ns.b()">
    <div :class="ns.e('header')">
      <div>{{ date.year }} {{ date.month }}月</div>
      <div :class="ns.em('header', 'button')">
        <button :class="ns.em('header', 'previous')" @click="toPrevious">
          上个月
        </button>
        <button :class="ns.em('header', 'today')" @click="toToday">
          今天
        </button>
        <button :class="ns.em('header', 'next')" @click="toNext">
          下个月
        </button>
      </div>
    </div>

    <div class="date">
      <div class="week">
        <template v-for="week in weeks" :key="week">
          <div>{{ week }}</div>
        </template>
      </div>
      <div class="data" />
    </div>
  </div>
</template>

<style scoped></style>
