import Layout from "../components/layout"
import fs from "fs"
import Markdown from "../components/markdown"

export default function Home({ md }: { md: string }) {
  return (
    <Layout active={(s) => s === "/"}>
      <Markdown content={md} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      md: fs.readFileSync("content/home.md", "utf-8"),
    },
  }
}
