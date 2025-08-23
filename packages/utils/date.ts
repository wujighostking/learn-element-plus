import type { Ref } from 'vue'

interface IDateFormatter {
  year: number
  month: number
  day: number
}

export function getDate(date: Date | undefined) {
  date = date ?? new Date()

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return {
    year,
    month,
    day,
  }
}

export function getDaysInMonth(date: Ref<IDateFormatter>): number {
  if (date.value.month >= 13) {
    date.value.year += 1
    date.value.month = 1
  }
  else if (date.value.month <= 0) {
    date.value.year -= 1
    date.value.month = 12
  }

  return new Date(date.value.year, date.value.month, 0).getDate()
}

export function getWeekFromDate(date: Ref<IDateFormatter>, day: number) {
  return new Date(date.value.year, date.value.month - 1, day).getDay()
}
