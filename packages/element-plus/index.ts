import { markInstaller } from '@learn-element-plus/utils'
import components from './components'
import '@learn-element-plus/theme-chalk/index.less'

const installer = markInstaller(components)

export * from '@learn-element-plus/components'
export default installer
