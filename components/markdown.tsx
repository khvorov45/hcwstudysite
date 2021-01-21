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
