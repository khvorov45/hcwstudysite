export function toggleTheme() {
  const root = document.documentElement
  const theme = root.getAttribute("theme")
  if (theme === "dark") {
    root.setAttribute("theme", "light")
    localStorage.setItem("theme", "light")
  } else {
    root.setAttribute("theme", "dark")
    localStorage.setItem("theme", "dark")
  }
}
