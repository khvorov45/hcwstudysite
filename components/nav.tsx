import {
  Button,
  createStyles,
  Divider,
  IconButton,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core"
import themeLightDark from "@iconify/icons-mdi/theme-light-dark"
import Home from "@material-ui/icons/Home"
import GitHubIcon from "@material-ui/icons/GitHub"
import React from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import reportIcon from "@iconify/icons-carbon/report"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      height: 50,
      overflowX: "scroll",
      overflowY: "hidden",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: `1px solid ${theme.palette.divider}`,
      "&>div": {
        display: "flex",
        alignItems: "center",
      },
      "& .active": {
        backgroundColor: theme.palette.primary[theme.palette.type],
      },
    },
    simpleNav: {
      height: 50,
      display: "flex",
      alignItems: "flex-start",
      borderBottom: `1px solid ${theme.palette.divider}`,
      scrollBehavior: "smooth",
      "&>*": {
        flexShrink: 0,
      },
      "& .active": {
        backgroundColor: theme.palette.primary[theme.palette.type],
      },
    },
    divider: {
      marginLeft: 5,
      color: theme.palette.divider,
      width: 2,
    },
  })
)

export default function Nav({
  togglePalette,
  active,
}: {
  togglePalette: () => void
  active: (s: string) => boolean
}) {
  const classes = useStyles()
  return (
    <div className={classes.nav}>
      {/* LEFT */}
      <div>
        <Link href="/" passHref>
          <IconButton className={active("/") ? "active" : ""}>
            <Home />
          </IconButton>
        </Link>
      </div>
      {/* CENTER */}
      <div></div>
      {/* RIGHT */}
      <div>
        <a href="https://reports.hcwflustudy.com">
          <IconButton>
            <Icon icon={reportIcon} />
          </IconButton>
        </a>
        <a href="https://github.com/khvorov45/hcwstudysite">
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
        <NavDivider />
        <IconButton onClick={(_) => togglePalette()}>
          <Icon icon={themeLightDark} />
        </IconButton>
      </div>
    </div>
  )
}

export function SimpleNav({
  links,
  active,
  className,
}: {
  links: { name: string; link: string }[]
  active: (link: { name: string; link: string }) => boolean
  className?: string
}) {
  const classes = useStyles()
  return (
    <div className={`${classes.simpleNav} ${className ?? ""}`}>
      {links.map((l) => (
        <ButtonLink
          key={l.name}
          name={l.name}
          link={l.link}
          className={active(l) ? "active" : ""}
        />
      ))}
    </div>
  )
}

function ButtonLink({
  name,
  link,
  className,
}: {
  name: string
  link: string
  className: string
}) {
  return (
    <Link href={link} passHref>
      <Button key={name} className={className}>
        {name}
      </Button>
    </Link>
  )
}

function NavDivider() {
  const theme = useTheme()
  return (
    <Divider
      orientation="vertical"
      flexItem
      style={{ marginLeft: 5, color: theme.palette.divider, width: 2 }}
    />
  )
}
