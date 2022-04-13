import TableCell from "@material-ui/core/TableCell"
import React from "react"

const MdxTableDataCell = props => (
  <TableCell align={props.align ?? "inherit"}>{props.children}</TableCell>
)

export default MdxTableDataCell
