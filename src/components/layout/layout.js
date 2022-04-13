import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Footer from "./footer"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation/navigation"
import MdxDivider from "../mdx/native-elements/mdx-divider"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 960,
  },
}))

const Layout = props => {
  const classes = useStyles()
  const { navigationTree, breadcrumbNodes, children } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <Header
        position={"fixed"}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Navigation
        className={classes.drawer}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        navigationTree={navigationTree}
        breadcrumbNodes={breadcrumbNodes}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <MdxDivider variant={"fullWidth"} />
        <Footer />
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
