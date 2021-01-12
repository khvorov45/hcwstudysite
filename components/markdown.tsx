import {
  createStyles,
  Divider,
  Link as MaterialLink,
  Theme,
  withStyles,
} from "@material-ui/core"
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
      <ReactMarkdown renderers={{ link: Link, thematicBreak: Divider }}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

const Link = withStyles((theme: Theme) =>
  createStyles({
    root: {
      color:
        theme.palette.primary[theme.palette.type === "dark" ? "light" : "dark"],
    },
  })
)(MaterialLink)
