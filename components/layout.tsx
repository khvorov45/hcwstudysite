import { CssBaseline } from "@material-ui/core"
import Head from "next/head"
import React, { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Head>
        <title>NIH HCW Flu Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <main>{children}</main>
    </div>
  )
}
