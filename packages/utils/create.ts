export function createNameSpace(name: string) {
  const prefixName = `z-${name}`

  return createBEM(prefixName)
}

function createBEM(prefix: string) {
  const b = (block: string = '') => _bem(prefix, block, '', '')
  const e = (element: string) => (element ? _bem(prefix, '', element, '') : '')
  const m = (modifier: string) =>
    modifier ? _bem(prefix, '', '', modifier) : ''

  const be = (blockSuffix: string, element: string) =>
    blockSuffix && element ? _bem(prefix, blockSuffix, element, '') : ''
  const bm = (blockSuffix: string, modifier: string) =>
    blockSuffix && modifier ? _bem(prefix, blockSuffix, '', modifier) : ''
  const em = (element: string, modifier: string) =>
    element && modifier ? _bem(prefix, '', element, modifier) : ''

  const bem = (blockSuffix: string, element: string, modifier: string) =>
    blockSuffix && element && modifier
      ? _bem(prefix, blockSuffix, element, modifier)
      : ''

  const is = (name: string, state?: boolean | undefined) =>
    state ? `is-${name}` : ''

  return {
    b,
    e,
    m,

    be,
    bm,
    em,
    bem,
    is,
  }
}

function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string,
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`
  }

  if (element) {
    prefixName += `__${element}`
  }

  if (modifier) {
    prefixName += `--${modifier}`
  }

  return prefixName
}
