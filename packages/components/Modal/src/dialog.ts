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
  // top: {
  //   type: String,
  //   default: '15vh',
  // }
  modal: {
    type: Boolean,
    default: true,
  },
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
