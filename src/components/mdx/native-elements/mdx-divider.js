import { withStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import React from "react"

const StyledDivider = withStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))(Divider)

const MdxDivider = props => (
  <StyledDivider {...props} variant={props.variant ?? "middle"} />
)

export default MdxDivider
