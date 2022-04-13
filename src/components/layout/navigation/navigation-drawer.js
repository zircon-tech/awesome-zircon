import React, { Fragment } from "react"
import List from "@material-ui/core/List"
import ListItemLink from "../../list-item-link"
import Divider from "@material-ui/core/Divider"
import ListSubheader from "@material-ui/core/ListSubheader"
import { makeStyles } from "@material-ui/core/styles"
import HomeIcon from "@material-ui/icons/Home"
import NavigationNode from "./navigation-node"

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.text.primary,
  },
  navigation: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    backgroundColor: theme.palette.background.secondary,
  },
}))

const NavigationDrawer = props => {
  const { navigationTree, breadcrumbNodes } = props
  const classes = useStyles()

  return (
    <Fragment>
      <List>
        <ListItemLink
          primary={"Home"}
          to={"/"}
          className={classes.link}
          icon={<HomeIcon />}
        />
      </List>
      <Divider />
      <List
        component="nav"
        className={classes.navigation}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Navigation
          </ListSubheader>
        }
      >
        {navigationTree.map(navigationNode => (
          <NavigationNode
            key={navigationNode.id}
            node={navigationNode}
            breadcrumbNodes={breadcrumbNodes}
          />
        ))}
      </List>
    </Fragment>
  )
}

export default NavigationDrawer
