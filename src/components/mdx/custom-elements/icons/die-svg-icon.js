import React from "react"
import { withStyles } from "@material-ui/core/styles"
import SvgIcon from "@material-ui/core/SvgIcon"

const StyledSvgIcon = withStyles(theme => ({
  root: {
    verticalAlign: "text-top",
    fontSize: "inherit",
  },
}))(SvgIcon)

const DieSvgIconWrapper = props => (
  <StyledSvgIcon viewBox={"0 0 24 24"} {...props} />
)

export default DieSvgIconWrapper
