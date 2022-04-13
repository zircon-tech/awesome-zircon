import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import React from "react"

const StyledHeader = withStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    scrollMarginTop: `${theme.mixins.toolbar.minHeight + theme.spacing(1)}px`,
    "@media (min-width:0px) and (orientation: landscape)": {
      scrollMarginTop: `${
        theme.mixins.toolbar[
          "@media (min-width:0px) and (orientation: landscape)"
        ].minHeight + theme.spacing(1)
      }px`,
    },
    "@media (min-width:600px)": {
      scrollMarginTop: `${
        theme.mixins.toolbar["@media (min-width:600px)"].minHeight +
        theme.spacing(1)
      }px`,
    },
    "&:hover > a.anchor > svg": {
      visibility: "visible",
    },
    "&>a": {
      fill: theme.palette.text.secondary,
      position: "absolute",
      transform: "translateX(-100%)",
      paddingRight: theme.spacing(0.5),
      "&>svg": {
        visibility: "hidden",
        verticalAlign: "text-top",
      },
    },
  },
}))(Typography)

const MdxHeader = props => <StyledHeader {...props} />

export default MdxHeader
