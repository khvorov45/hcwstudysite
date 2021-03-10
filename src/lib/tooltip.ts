import { tooltips } from "./state"

export function tooltip(
  node: HTMLElement,
  options: { component: any; props?: any }
): any {
  let disable: boolean
  const tooltipsUnsub = tooltips.subscribe((v) => (disable = !v))

  let component: any

  function attachTooltip() {
    if (disable) {
      return
    }
    component = new options.component({
      target: node,
      props: options.props,
    })
  }
  function removeTooltip() {
    if (disable) {
      return
    }
    component.$destroy()
  }

  node.addEventListener("mouseenter", attachTooltip)
  node.addEventListener("mouseleave", removeTooltip)
  return {
    destroy() {
      node.removeEventListener("mouseenter", attachTooltip)
      node.removeEventListener("mouseleave", removeTooltip)
      tooltipsUnsub()
    },
  }
}
