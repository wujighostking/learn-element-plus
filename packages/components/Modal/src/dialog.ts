import type { ExtractPropTypes } from 'vue'

export const dialogProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
} as const

export type DialogPropsType = ExtractPropTypes<typeof dialogProps>
