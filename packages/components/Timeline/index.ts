import { withInstall } from '@learn-element-plus/utils'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'

export const ZTimelineItem = withInstall(TimelineItem)
export const ZTimeline = withInstall(Timeline)

export * from './src/timeline'
export * from './src/timeline-item'
