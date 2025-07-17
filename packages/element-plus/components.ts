import { ZIcon, ZButton, ZLink, ZAlert } from '@learn-element-plus/components'

export default [ZIcon, ZButton, ZLink, ZAlert]

declare module 'vue' {
  export interface GlobalComponents {
    ZIcon: typeof ZIcon
    ZButton: typeof ZButton
    ZLink: typeof ZLink
    ZAlert: typeof ZAlert
  }
}
