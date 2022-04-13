import React from "react"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import NavigationDrawer from "./navigation-drawer"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  drawer: props => ({
    [theme.breakpoints.up("sm")]: {
      width: props.drawerWidth,
      flexShrink: 0,
    },
  }),
  drawerPaper: props => ({
    backgroundColor: theme.palette.background.secondary,
    width: props.drawerWidth,
  }),
}))

const Navigation = props => {
  const {
    window,
    drawerWidth,
    handleDrawerToggle,
    mobileOpen,
    navigationTree,
    breadcrumbNodes,
  } = props

  const classes = useStyles({ drawerWidth: drawerWidth })
  const theme = useTheme()

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <nav className={classes.drawer} aria-label="main site navigation">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <NavigationDrawer
            navigationTree={navigationTree}
            breadcrumbNodes={breadcrumbNodes}
          />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <NavigationDrawer
            navigationTree={navigationTree}
            breadcrumbNodes={breadcrumbNodes}
          />
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default Navigation
