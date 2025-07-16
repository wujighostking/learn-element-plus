import type { PropType, Component } from 'vue'
import { Loading } from '@element-plus/icons-vue'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'
  | ''

export type ButtonSize = 'large' | 'default' | 'small'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Object as PropType<Component>
  },
  circle: {
    type: Boolean,
    default: false
  },
  link: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingIcon: {
    type: Object as PropType<Component>,
    default: () => Loading
  }
} as const
