import React, { Fragment } from "react"
import ListItemLink from "../../list-item-link"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  activeLink: {
    backgroundColor: theme.palette.action.focus,
  },
}))

const NavigationListItem = props => {
  const classes = useStyles()
  const { node, className, expansionState, handleExpansionClick } = props

  return (
    <Fragment>
      <ListItemLink
        className={className}
        activeClassName={classes.activeLink}
        primary={node.title}
        to={node.slug}
        expansionState={expansionState}
        handleExpansionClick={handleExpansionClick}
      />
    </Fragment>
  )
}

export default NavigationListItem
