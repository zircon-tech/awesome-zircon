import { withStyles } from "@material-ui/core/styles"
import TableContainer from "@material-ui/core/TableContainer"
import Paper from "@material-ui/core/Paper"
import React from "react"
import Table from "@material-ui/core/Table"

const StyledTableContainer = withStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}))(TableContainer)

const MdxTableContainer = props => (
  <StyledTableContainer component={Paper}>
    <Table {...props} />
  </StyledTableContainer>
)

export default MdxTableContainer
