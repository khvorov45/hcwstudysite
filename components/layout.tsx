import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core"
import Head from "next/head"
import React, { ReactNode, useEffect, useState } from "react"
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
  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "html, html *": {
            "scrollbar-color":
              "rgb(150, 150, 150) " +
              (paletteType === "dark" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"),
          },
          "::-webkit-scrollbar-thumb:hover": {
            background:
              paletteType === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
          },
          "::-webkit-scrollbar-thumb": {
            background: "rgb(150, 150, 150)",
          },
          "::-webkit-scrollbar-track, ::-webkit-scrollbar-corner": {
            background:
              paletteType === "dark" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)",
          },
          "::-webkit-scrollbar": {
            width: 10,
            height: 10,
          },
        },
      },
    },
    palette: {
      type: paletteType,
      background: {
        default: paletteType === "dark" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)",
      },
    },
  })

  return (
    <div>
      <Head>
        <title>NIH HCW Flu Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav togglePalette={togglePaletteType} active={active} />
        <main>{children}</main>
      </ThemeProvider>
    </div>
  )
}
