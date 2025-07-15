import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function withInstall<T>(component: T) {
  const comp = component as SFCWithInstall<T>
  comp.install = (app: App) => {
    const { name } = comp as unknown as { name: string }
    app.component(name, comp)
  }

  return comp
}

export function markInstaller(components: Plugin[]) {
  return (app: App) => {
    components.forEach((component) => {
      app.use(component)
    })
  }
}
