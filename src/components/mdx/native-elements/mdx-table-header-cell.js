import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import React from "react"

const StyledTableHeaderCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.background.secondary,
    color: theme.palette.text.secondary,
  },
}))(TableCell)

const MdxTableHeaderCell = props => (
  <StyledTableHeaderCell align={props.align ?? "inherit"}>
    {props.children}
  </StyledTableHeaderCell>
)

export default MdxTableHeaderCell
