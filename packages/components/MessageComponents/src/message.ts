import type { Component, ExtractPropTypes, PropType } from 'vue'
import { ZMessage } from '../index'

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

export type MessageOptions = Omit<MessageProps, 'type'>
export type MessageHook = Record<MessageType, (MessageOptions: MessageOptions) => void>

export function useMessage() {
  const messageType: MessageType[] = ['primary', 'success', 'warning', 'info', 'error']

  return messageType.reduce((messages, type) => {
    messages[type] = (options: MessageOptions) => {
      ZMessage({
        ...options,
        type,
      })
    }

    return messages
  }, {} as MessageHook)
}
