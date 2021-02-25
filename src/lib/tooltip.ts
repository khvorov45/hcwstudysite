export function tooltip(
  node: HTMLElement,
  options: { component: any; props?: any }
): any {
  let component: any

  function attachTooltip() {
    component = new options.component({
      target: node,
      props: options.props,
    })
  }
  function removeTooltip() {
    component.$destroy()
  }

  node.addEventListener("mouseenter", attachTooltip)
  node.addEventListener("mouseleave", removeTooltip)
  return {
    destroy() {
      node.removeEventListener("mouseenter", attachTooltip)
      node.removeEventListener("mouseleave", removeTooltip)
    },
  }
}
