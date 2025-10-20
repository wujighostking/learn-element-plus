import type { ComputedRef, Ref } from 'vue'
import { onMounted, ref, watchEffect } from 'vue'

export function useDraggable(targetRef: Ref<HTMLElement | undefined>, draggableRef: Ref<HTMLElement | undefined>, draggeble: ComputedRef<boolean>, overflow?: ComputedRef<boolean>) {
  const isDragging = ref(false)

  const transform = {
    offsetX: 0,
    offsetY: 0,
  }

  const adjustPosition = (moveX: number, moveY: number) => {
    if (targetRef.value) {
      const { offsetX, offsetY } = transform
      const targetRect = targetRef.value.getBoundingClientRect()
      const targetLeft = targetRect.left
      const targetTop = targetRect.top
      const targetWidth = targetRect.width
      const targetHeight = targetRect.height

      const clientWidth = document.documentElement.clientWidth
      const clientHeight = document.documentElement.clientHeight

      const minLeft = -targetLeft + offsetX
      const minTop = -targetTop + offsetY
      const maxLeft = clientWidth - targetLeft - targetWidth + offsetX
      const maxTop
        = clientHeight
          - targetTop
          - (targetHeight < clientHeight ? targetHeight : 0)
          + offsetY

      if (!overflow?.value) {
        moveX = Math.min(Math.max(moveX, minLeft), maxLeft)
        moveY = Math.min(Math.max(moveY, minTop), maxTop)
      }

      transform.offsetX = moveX
      transform.offsetY = moveY

      targetRef.value.style.transform = `translate(${moveX}px, ${moveY}px)`
    }
  }

  const onMousedown = (e: MouseEvent) => {
    const domX = e.clientX
    const domY = e.clientY
    const { offsetX, offsetY } = transform

    const onMousemove = (e: MouseEvent) => {
      const moveX = offsetX + e.clientX - domX
      const moveY = offsetY + e.clientY - domY

      adjustPosition(moveX, moveY)
    }

    const onMouseUp = () => {
      isDragging.value = false
      document.removeEventListener('mousemove', onMousemove)
      document.removeEventListener('mousemove', onMouseUp)
    }

    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const onDraggable = () => {
    if (draggableRef.value && targetRef.value) {
      draggableRef.value.addEventListener('mousedown', onMousedown)
    }
  }

  const offDraggable = () => {
    if (draggableRef.value && targetRef.value) {
      draggableRef.value.removeEventListener('mousedown', onMousedown)
    }
  }

  onMounted(() => {
    watchEffect(() => {
      if (draggeble.value) {
        onDraggable()
      }
      else {
        offDraggable()
      }
    })
  })

  return {
    isDragging,
  }
}
