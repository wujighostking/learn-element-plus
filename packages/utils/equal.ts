export function equal(target: any, origin: any) {
  const targetType = Object.prototype.toString.call(target)
  const originalType = Object.prototype.toString.call(origin)

  if (targetType !== originalType) {
    return false
  }

  for (const key in target) {
    if (key in origin) {
      if (origin[key] !== target[key]) {
        return false
      }
    }
    else {
      return false
    }
  }

  for (const key in origin) {
    if (key in target) {
      if (origin[key] !== target[key]) {
        return false
      }
    }
    else {
      return false
    }
  }

  return true
}
