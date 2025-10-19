import {
  ZAlert,
  ZButton,
  ZCalendar,
  ZDialog,
  ZIcon,
  ZLink,
  ZMessage,
  ZSwitch,
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
  ZSwitch,
  ZDialog,
]

export { ZMessage }

declare module 'vue' {
  export interface GlobalComponents {
    ZIcon: typeof ZIcon
    ZButton: typeof ZButton
    ZLink: typeof ZLink
    ZAlert: typeof ZAlert
    ZTimeline: typeof ZTimeline
    ZTimelineItem: typeof ZTimelineItem
    ZCalendar: typeof ZCalendar
    ZSwitch: typeof ZSwitch
    ZDialog: typeof ZDialog
  }
}
