import type { Component, ExtractPropTypes, PropType } from 'vue'

export type PlacementType = 'top' | 'bottom'
export type NodeType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type NodeColorType = 'hsl' | 'hsv' | 'hex' | 'rgb'
export type NodeSizeType = 'normal' | 'large'

export const timelineProps = {
  timestamp: {
    type: String,
    default: ''
  },
  hideTimestamp: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String as PropType<PlacementType>,
    default: 'bottom'
  },
  type: {
    type: String as PropType<NodeType>,
    default: 'default'
  },
  color: {
    type: String as PropType<NodeColorType>,
    default: ''
  },
  size: {
    type: String as PropType<NodeSizeType>,
    default: 'normal'
  },
  icon: {
    type: Object as PropType<Component>
  },
  hollow: {
    type: Boolean,
    default: false
  }
} as const

export type TimelineProps = Partial<ExtractPropTypes<typeof timelineProps>>
