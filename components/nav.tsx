import {
  Button,
  createStyles,
  Divider,
  IconButton,
  makeStyles,
  Theme,
  Tooltip,
  useTheme,
} from "@material-ui/core"
import themeLightDark from "@iconify/icons-mdi/theme-light-dark"
import Home from "@material-ui/icons/Home"
import React from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import reportIcon from "@iconify/icons-carbon/report"
import questionCircle from "@iconify/icons-bi/question-circle"

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
      "& .activeAlways": {
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
      marginRight: 5,
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
          <Tooltip title="Main page">
            <IconButton className="activeAlways">
              <Home />
            </IconButton>
          </Tooltip>
        </Link>

        <a href="https://reports.hcwflustudy.com">
          <Tooltip title="Reports">
            <IconButton>
              <Icon icon={reportIcon} />
            </IconButton>
          </Tooltip>
        </a>
        <NavDivider />
        <Link href="/about" passHref>
          <Tooltip title="About">
            <IconButton className={active("/about") ? "active" : ""}>
              <Icon icon={questionCircle} />
            </IconButton>
          </Tooltip>
        </Link>
      </div>
      {/* CENTER */}
      <div></div>
      {/* RIGHT */}
      <div>
        <NavDivider />
        <Tooltip title="Switch theme">
          <IconButton onClick={(_) => togglePalette()}>
            <Icon icon={themeLightDark} />
          </IconButton>
        </Tooltip>
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
  const classes = useStyles()
  return <Divider orientation="vertical" flexItem className={classes.divider} />
}
