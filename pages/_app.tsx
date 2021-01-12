import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { AppProps } from "next/app"
import Head from "next/head"
import React, { Fragment, useEffect } from "react"
import { darkTheme } from "../lib/theme"

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])
  return (
    <Fragment>
      <Head>
        <title>NIH HCW Flu Study</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}
