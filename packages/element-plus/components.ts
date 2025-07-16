import { ZIcon, ZButton, ZLink } from '@learn-element-plus/components'

export default [ZIcon, ZButton, ZLink]

declare module 'vue' {
  export interface GlobalComponents {
    ZIcon: typeof ZIcon
    ZButton: typeof ZButton
    ZLink: typeof ZLink
  }
}
