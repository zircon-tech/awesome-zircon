import React, { Fragment } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Link from "./link"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import ListItemIcon from "@material-ui/core/ListItemIcon"

const ListItemLink = props => {
  const {
    primary,
    to,
    expansionState,
    handleExpansionClick,
    className,
    icon,
    activeClassName,
  } = props

  const CustomLink = React.useMemo(
    () => React.forwardRef((linkProps, ref) => <Link to={to} {...linkProps} />),
    [to]
  )

  return (
    <ListItem
      button
      component={CustomLink}
      className={className}
      activeClassName={activeClassName}
    >
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : <Fragment />}
      <ListItemText primary={primary} />
      {expansionState === null || typeof expansionState === "undefined" ? (
        <Fragment />
      ) : expansionState ? (
        <ExpandLess onClick={handleExpansionClick} />
      ) : (
        <ExpandMore onClick={handleExpansionClick} />
      )}
    </ListItem>
  )
}

export default ListItemLink
