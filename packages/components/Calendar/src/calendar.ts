import type { ExtractPropTypes } from 'vue'

export const CalendarProps = {
  modelValue: {
    type: Date,
  },
}

export type CalendarType = ExtractPropTypes<typeof CalendarProps>
