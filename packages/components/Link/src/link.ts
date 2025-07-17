import { Component, ExtractPropTypes, PropType } from 'vue'
import { ButtonType } from '../../Button/src/button'

export type underlineType = 'always' | 'hover' | 'never'
export type targetType = '_blank' | '_parent' | '_self' | '_top'

export const linkProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  underline: {
    type: String as PropType<underlineType>,
    default: 'hover'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String as PropType<targetType>,
    default: '_self'
  },
  icon: {
    type: Object as PropType<Component>
  }
} as const

export type LinkType = ExtractPropTypes<(typeof linkProps)['type']>
