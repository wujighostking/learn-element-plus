<script setup lang="ts">
import { createNameSpace } from '@learn-element-plus/utils'
import { getDate, getDaysInMonth, getWeekFromDate } from '@learn-element-plus/utils/date'
import { computed, ref, watch } from 'vue'

defineOptions({
  name: 'ZCalendar',
})

const ns = createNameSpace('calendar')

const date = ref(getDate())
const previousMonthDays = computed(() => getDaysInMonth(date))
const currentMonthDays = computed(() => getDaysInMonth(date))
const weekIndex = computed(() => getWeekFromDate(date, 1))

const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const days = ref<number[][]>([...createDays()])

const todayIndex = computed<[number, number]>(() => {
  for (let i = 0; i < days.value.length; i++) {
    for (let j = 0; j < days.value[i].length; j++) {
      const day = days.value[i][j]
      if (day === date.value.day) {
        return [i, j]
      }
    }
  }

  return [0, weekIndex.value]
})
const isSelected = ref<[number, number]>([...todayIndex.value])
const isPrevious = computed(() => {
  return days.value?.[0].findIndex(day => day === 1)
})
const isNext = computed(() => {
  const last = days.value?.[days.value.length - 1]
  const hasNext = last.find(day => day === 1)
  return hasNext ? last.findIndex(day => day === 1) : Infinity
})

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

  isSelected.value = [...todayIndex.value]
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

function createDays() {
  const _days = []
  const days: number[][] = []
  for (let i = previousMonthDays.value - weekIndex.value + 1; i <= previousMonthDays.value; i++) {
    _days.push(i)
  }
  for (let i = 1; i <= currentMonthDays.value; i++) {
    _days.push(i)
  }

  const next = Math.ceil(_days.length / 7) * 7 - _days.length
  for (let i = 1; i <= next; i++) {
    _days.push(i)
  }
  _days.forEach((day, i) => {
    if (i % 7 === 0) {
      days.push([])
    }
    days[days.length - 1].push(day)
  })

  return days
}

function setDay(index: number, i: number) {
  isSelected.value = [index, i]
}

watch(date, () => {
  days.value = [...createDays()]
})
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

    <div :class="ns.e('date')">
      <div :class="ns.em('date', 'week')">
        <template v-for="week in weeks" :key="week">
          <div :class="ns.m('center')">
            {{ week }}
          </div>
        </template>
      </div>

      <div>
        <template v-for="(dayItems, index) in days" :key="index">
          <div :class="ns.em('date', 'container')">
            <template v-for="(day, i) in dayItems" :key="i">
              <div
                :class="[
                  ns.em('date', 'day'),
                  ns.is('selected', isSelected[0] === index && isSelected[1] === i),
                  ns.is('today', todayIndex[0] === index && todayIndex[1] === i),
                  ns.is('previous', index === 0 && i < isPrevious),
                  ns.is('next', index === days.length - 1 && i >= isNext),
                ]"
                @click="setDay(index, i)"
              >
                {{ day }}
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
