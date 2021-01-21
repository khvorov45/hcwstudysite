import {
  createStyles,
  Divider,
  Link as MaterialLink,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core"
import React from "react"
import ReactMarkdown from "react-markdown"
import { LinkRenderer } from "./link"

const useStyles = makeStyles((theme: Theme) => ({
  md: {
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 1000,
    "&>ul>*": {
      marginTop: 10,
    },
  },
}))

export default function Markdown({ content }: { content: string }) {
  const classes = useStyles()
  return (
    <div className={classes.md}>
      <ReactMarkdown renderers={{ link: LinkRenderer, thematicBreak: Divider }}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
