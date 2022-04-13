import React from "react"
import { Link as GatsbyLink } from "gatsby-theme-material-ui"
import Tooltip from "@material-ui/core/Tooltip"
import MuiLink from "@material-ui/core/Link"

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
  children,
  to,
  href,
  activeClassName,
  partiallyActive,
  title,
  className,
  internalClassName,
  externalClassName,
  ...other
}) => {
  // internal links start with / or #
  let url = to ?? href
  const firstCharacter = url[0]
  const isInternal = firstCharacter === "/" || firstCharacter === "#"

  className = className ?? ""
  internalClassName = internalClassName ?? ""
  externalClassName = externalClassName ?? ""
  activeClassName = activeClassName ?? ""

  // Use Gatsby Link for internal links, and <a> for others
  const link = isInternal ? (
    <GatsbyLink
      to={url}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      className={`${className} ${internalClassName}`}
      {...other}
    >
      {children}
    </GatsbyLink>
  ) : (
    <MuiLink
      href={url}
      target={other.target ?? "_blank"}
      rel={other.rel ?? "noopener noreferrer"}
      className={`${className} ${externalClassName}`}
      {...other}
    >
      {children}
    </MuiLink>
  )

  // add a tooltip for the title if one exists
  if (title) {
    return <Tooltip title={title}>{link}</Tooltip>
  } else {
    return link
  }
}

export default Link
