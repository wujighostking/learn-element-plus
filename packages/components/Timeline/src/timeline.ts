import { createNameSpace } from '@learn-element-plus/utils'
import { defineComponent, h, provide, renderSlot } from 'vue'

const Timeline = defineComponent({
  name: 'ZTimeline',
  setup(_, { slots }) {
    const ns = createNameSpace('timeline')

    provide('timeline', slots)

    return () => h('ul', { class: ns.b() }, [renderSlot(slots, 'default')])
  },
})

export default Timeline
export type TimelineInstance = InstanceType<typeof Timeline>
