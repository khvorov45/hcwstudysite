import Layout from "../components/layout"
import fs from "fs"
import ReactMarkdown from "react-markdown"

function Markdown({ content }: { content: string }) {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: 1000,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

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
