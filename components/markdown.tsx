import React from "react"
import ReactMarkdown from "react-markdown"

export default function Markdown({ content }: { content: string }) {
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
