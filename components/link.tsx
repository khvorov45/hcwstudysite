import LinkNext from "next/link"
import {
  createStyles,
  makeStyles,
  Theme,
  Link as LinkMaterial,
} from "@material-ui/core"
import { ReactNode } from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color:
        theme.palette.primary[theme.palette.type === "dark" ? "light" : "dark"],
    },
  })
)

export function LinkRenderer(props: any) {
  if (props.href.startsWith("/")) {
    return <LinkInternal to={props.href}>{props.children}</LinkInternal>
  }
  return LinkExternal(props)
}

export function LinkInternal({
  to,
  children,
}: {
  to: string
  children: ReactNode
}) {
  const classes = useStyles()
  return (
    <LinkNext href={to} passHref>
      <LinkMaterial className={classes.link}>{children}</LinkMaterial>
    </LinkNext>
  )
}

export function LinkExternal({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  const classes = useStyles()
  return (
    <LinkMaterial className={classes.link} href={href}>
      {children}
    </LinkMaterial>
  )
}
