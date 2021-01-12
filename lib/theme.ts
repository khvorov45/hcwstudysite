import { createMuiTheme } from "@material-ui/core"

export function createTheme(paletteType: "dark" | "light") {
  return createMuiTheme({
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
      divider:
        paletteType === "dark" ? "rgb(70, 70, 70)" : "rgb(200, 200, 200)",
    },
  })
}

export const darkTheme = createTheme("dark")
