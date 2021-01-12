import Layout from "../components/layout"
import fs from "fs"
import ReactMarkdown from "react-markdown"

export default function Home({ md }: { md: string }) {
  return (
    <Layout active={(s) => s === "/"}>
      <div style={{ marginLeft: 20 }}>
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
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
