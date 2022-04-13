import React, { Fragment } from "react"
import { default as MaterialBreadcrumbs } from "@material-ui/core/Breadcrumbs"
import Link from "./link"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import HomeIcon from "@material-ui/icons/Home"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  breadcrumb: {
    display: "flex",
  },
  link: {
    color: theme.palette.text.secondary,
  },
  currentPage: {
    color: theme.palette.text.primary,
  },
  icon: {
    marginRight: theme.spacing(0.5),
    height: `calc(${theme.typography.body1.fontSize} * ${
      theme.typography.body1.lineHeight
    } - ${theme.spacing(0.5)}px)`,
    width: `calc(${theme.typography.body1.fontSize} * ${
      theme.typography.body1.lineHeight
    } - ${theme.spacing(0.5)}px)`,
  },
}))

const Breadcrumbs = props => {
  const classes = useStyles()
  const { breadcrumbNodes } = props

  if (breadcrumbNodes) {
    return (
      <MaterialBreadcrumbs aria-label={"breadcrumb"} className={classes.root}>
        <Link to="/" className={`${classes.breadcrumb} ${classes.link}`}>
          <HomeIcon className={classes.icon} />
          Home
        </Link>
        {breadcrumbNodes.map((node, index, array) => {
          if (index < array.length - 1) {
            return (
              <Link
                key={node.id}
                to={node.slug}
                className={`${classes.breadcrumb} ${classes.link}`}
              >
                {node.title}
              </Link>
            )
          }
          return (
            <Typography
              key={node.id}
              className={`${classes.breadcrumb} ${classes.currentPage}`}
            >
              {node.title}
            </Typography>
          )
        })}
      </MaterialBreadcrumbs>
    )
  } else {
    return <Fragment />
  }
}

export default Breadcrumbs
