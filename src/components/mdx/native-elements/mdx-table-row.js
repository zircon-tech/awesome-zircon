import { withStyles } from "@material-ui/core/styles"
import TableRow from "@material-ui/core/TableRow"
import React from "react"

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const MdxTableRow = props => <StyledTableRow {...props} />

export default MdxTableRow
