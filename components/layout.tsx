import { CssBaseline, ThemeProvider } from "@material-ui/core"
import React, { ReactNode, useEffect, useState } from "react"
import { createTheme } from "../lib/theme"
import Nav from "./nav"

function paletteTypeInit(): "dark" | "light" {
  let localtheme = localStorage.getItem("theme")
  if (!localtheme || !["dark", "light"].includes(localtheme)) {
    localStorage.setItem("theme", "dark")
    document.documentElement.setAttribute("theme", "dark")
    return "dark"
  } else if (localtheme === "dark") {
    document.documentElement.setAttribute("theme", "dark")
    return "dark"
  } else {
    document.documentElement.setAttribute("theme", "light")
    return "light"
  }
}

export default function Layout({
  children,
  active,
}: {
  children: ReactNode
  active: (s: string) => boolean
}) {
  const [paletteType, setPaletteType] = useState<"dark" | "light">("dark")
  useEffect(() => setPaletteType(paletteTypeInit()))
  function togglePaletteType() {
    const newPaletteType: "dark" | "light" =
      paletteType === "dark" ? "light" : "dark"
    setPaletteType(newPaletteType)
    document.documentElement.setAttribute("theme", newPaletteType)
    localStorage.setItem("theme", newPaletteType)
  }
  const theme = createTheme(paletteType)

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav togglePalette={togglePaletteType} active={active} />
        <main>{children}</main>
      </ThemeProvider>
    </div>
  )
}
