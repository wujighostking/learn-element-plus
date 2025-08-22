import {
  ZAlert,
  ZButton,
  ZCalendar,
  ZIcon,
  ZLink,
  ZTimeline,
  ZTimelineItem,
} from '@learn-element-plus/components'

export default [
  ZIcon,
  ZButton,
  ZLink,
  ZAlert,
  ZTimeline,
  ZTimelineItem,
  ZCalendar,
]

declare module 'vue' {
  export interface GlobalComponents {
    ZIcon: typeof ZIcon
    ZButton: typeof ZButton
    ZLink: typeof ZLink
    ZAlert: typeof ZAlert
    ZTimeline: typeof ZTimeline
    ZTimelineItem: typeof ZTimelineItem
    ZCalendar: typeof ZCalendar
  }
}
