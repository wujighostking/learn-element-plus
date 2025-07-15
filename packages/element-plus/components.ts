import { ZIcon } from '@learn-element-plus/components'

export default [ZIcon]

declare module 'vue' {
  export interface GlobalComponents {
    ZIcon: typeof ZIcon
  }
}
