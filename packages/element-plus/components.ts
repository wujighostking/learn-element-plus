import { ZIcon, ZButton } from '@learn-element-plus/components'

export default [ZIcon, ZButton]

declare module 'vue' {
  export interface GlobalComponents {
    ZIcon: typeof ZIcon
    ZButton: typeof ZButton
  }
}
