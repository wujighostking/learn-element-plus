export const timelineItemProps = {
  hideTimestamp: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String,
    values: ['top', 'bottom'],
    default: 'bottom'
  },
  timestamp: {
    type: String,
    default: ''
  }
} as const
