import React from "react"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import fs from "fs"

export default function About({ md }: { md: string }) {
  return (
    <Layout active={(s) => s === "/about"}>
      <Markdown content={md} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      md: fs.readFileSync("content/about.md", "utf-8"),
    },
  }
}
