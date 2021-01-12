import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { AppProps } from "next/app"
import React, { Fragment, useEffect } from "react"
import theme from "../lib/theme"

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}
