import { writable } from "svelte/store"

function createLocalStore<T>(
  key: string,
  startValue: T | null,
  toString: (x: T) => string,
  fromString: (x: string) => T,
  onSubscribe: (current: T) => void = () => {}
) {
  const { subscribe, set, update } = writable(startValue)

  return {
    subscribe,
    set,
    update,
    useLocalStorage: () => {
      const json = localStorage.getItem(key)
      if (json) {
        set(fromString(json))
      }

      subscribe((current) => {
        localStorage.setItem(key, toString(current))
        onSubscribe(current)
      })
    },
  }
}

export const theme = createLocalStore<"dark" | "light">(
  "theme",
  "dark",
  (x) => x,
  (x) => (x === "light" ? "light" : "dark"),
  (x) => document.documentElement.setAttribute("theme", x)
)
