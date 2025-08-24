import type { Component, PropType } from 'vue'

export const switchProps = {
  modelValue: {
    type: Boolean,
    default: true,
  },
  activeText: {
    type: String,
    default: '',
  },
  inactiveText: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  activeIcon: {
    type: Object as PropType<Component>,
  },
  inactiveIcon: {
    type: Object as PropType<Component>,
  },
}
