export function mousemove(node: HTMLElement): any {
  function updateMouseCoordinates(event: MouseEvent) {
    const x = event.clientX
    const y = event.clientY
    node.dispatchEvent(
      new CustomEvent("mousemove", {
        detail: { x, y },
      })
    )
  }

  window.addEventListener("mousemove", updateMouseCoordinates)
  return {
    destroy() {
      window.removeEventListener("mousemove", updateMouseCoordinates)
    },
  }
}
