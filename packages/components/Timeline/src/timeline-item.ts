import type { ExtractPropTypes, PropType } from 'vue'

// eslint-disable-next-line style/operator-linebreak
export type TimelineItemType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
export type TimelineItemSizeType = 'normal' | 'small'

export const timelineItemProps = {
  timestamp: {
    type: String,
    default: '',
  },
  hideTimestamp: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String,
    values: ['top', 'bottom'],
    default: 'bottom',
  },
  type: {
    type: String as PropType<TimelineItemType>,
    default: '',
  },
  size: {
    type: String as PropType<TimelineItemSizeType>,
    default: 'normal',
  },
  // icon: {
  //   type: Object as PropType<Component>,
  // },
  hollow: {
    type: Boolean,
    default: false,
  },
} as const

export type TimelineItemProps = Partial<
  ExtractPropTypes<typeof timelineItemProps>
>
