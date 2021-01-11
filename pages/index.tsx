import { CssBaseline, Typography } from "@material-ui/core"
import Head from "next/head"
export default function Home() {
  return (
    <div>
      <Head>
        <title>NIH HCW Flu Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />

      <main>
        <Typography variant="h1">NIH HCW Flu Study</Typography>
      </main>
    </div>
  )
}
