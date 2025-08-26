import type { MessageProps } from './src/message'
import { h, render } from 'vue'
import Message from './src/Message.vue'

export * from './src/message'

let top = 0
export function setTop(offset: number) {
  top += offset
}
export const messageElementList: HTMLDivElement[] = []
export function ZMessage(options: MessageProps) {
  const { duration = 3000 } = options

  setTop(12)

  const vnode = h(Message, { ...options, style: { top: `${top}px` } })

  const container = document.createElement('div')

  render(vnode, container)

  document.body.appendChild(container)

  createMessageElement({ container, duration })
}

function createMessageElement(options: { container: HTMLElement, duration: number }) {
  const { container, duration } = options

  const messageElement = Array.from(container.children || [])?.[0] as HTMLDivElement

  messageElementList.push(messageElement)

  const { height } = messageElement.getBoundingClientRect()

  setTop(height)

  if (duration !== 0) {
    setTimeout(() => {
      setTop(-height - 12)

      const deleteElement = container.children?.[0]
      const deleteIndex = messageElementList.findIndex((el: Element) => el === deleteElement)
      const { height: _height } = deleteElement.getBoundingClientRect()

      messageElementList.splice(deleteIndex, 1)

      document.body.removeChild(container)

      messageElementList.forEach((el: HTMLDivElement, index) => {
        if (index < deleteIndex)
          return

        const top = +el.style.top.slice(0, -2) - _height - 12
        el.style.top = `${top}px`
      })
    }, duration)
  }
}
