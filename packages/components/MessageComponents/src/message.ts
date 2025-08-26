import type { Component, ExtractPropTypes, PropType } from 'vue'

export type MessageType = 'primary' | 'success' | 'warning' | 'info' | 'error'

export const messageProps = {
  message: {
    type: String,
  },
  type: {
    type: String as PropType<MessageType>,
  },
  icon: {
    type: Object as PropType<Component>,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
} as const

export type MessageProps = Partial<ExtractPropTypes<typeof messageProps>>
