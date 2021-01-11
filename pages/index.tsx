import { CssBaseline, Typography } from "@material-ui/core"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout active={(s) => s === "/"}>
      <Typography variant="h1">NIH HCW Flu Study</Typography>
    </Layout>
  )
}
