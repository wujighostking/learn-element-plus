import type { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  color: {
    type: String,
    default: '#000000',
  },
  size: {
    type: [Number, String] as PropType<number | string>,
    default: 16,
  },
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
