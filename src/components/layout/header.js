import React from "react"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import Link from "../link"
import AppBar from "@material-ui/core/AppBar"
import { makeStyles } from "@material-ui/core/styles"
import { useSiteMetadataHeaderQuery } from "../../static-queries/use-site-metadata-header-query"

const useStyles = makeStyles(theme => ({
  appBar: props => ({
    width: `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: props.drawerWidth,
    backgroundColor: theme.palette.background.paper,
  }),
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    color: theme.palette.text.primary,
  },
}))

const Header = props => {
  const { position, drawerWidth, handleDrawerToggle } = props
  const siteMetadata = useSiteMetadataHeaderQuery()
  const classes = useStyles({ drawerWidth: drawerWidth })

  return (
    <AppBar position={position} className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant={"h6"}>
          <Link to={"/"} className={classes.title}>
            {siteMetadata?.title || `Title`}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
