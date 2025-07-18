import type { Component, ExtractPropTypes, PropType } from 'vue'
import {
  CircleCloseFilled,
  InfoFilled,
  SuccessFilled,
  WarningFilled,
} from '@element-plus/icons-vue'

export type alertType = 'primary' | 'success' | 'warning' | 'info' | 'error'

export const alertProps = {
  title: String,
  type: {
    type: String as PropType<alertType>,
    default: 'info',
  },
  description: String,
  closeable: {
    type: Boolean,
    default: true,
  },
  center: {
    type: Boolean,
    default: false,
  },
  closeText: {
    type: String,
    default: '',
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
} as const

export const iconMap: Record<alertType, Component> = {
  primary: InfoFilled,
  success: SuccessFilled,
  info: InfoFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
}

export type AlertType = ExtractPropTypes<typeof alertProps>
