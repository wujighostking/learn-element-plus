import type { Component, ExtractPropTypes, PropType } from 'vue'

export const dialogProps = {
  title: {
    type: [String, Object] as PropType<string | Component>,
    default: '',
  },
  width: {
    type: [String, Number],
    default: '50%',
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  modal: {
    type: Boolean,
    default: false,
  },
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
