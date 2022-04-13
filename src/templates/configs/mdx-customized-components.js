import React from "react"
import { Typography } from "@material-ui/core"
import MdxHeader from "../../components/mdx/native-elements/mdx-header"
import MdxUnorderedList from "../../components/mdx/native-elements/mdx-unordered-list"
import MdxListItem from "../../components/mdx/native-elements/mdx-list-item"
import MdxTableContainer from "../../components/mdx/native-elements/mdx-table-container"
import MdxTableRow from "../../components/mdx/native-elements/mdx-table-row"
import MdxDivider from "../../components/mdx/native-elements/mdx-divider"
import MdxTableHeaderCell from "../../components/mdx/native-elements/mdx-table-header-cell"
import MdxTableDataCell from "../../components/mdx/native-elements/mdx-table-data-cell"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import MdxOrderedList from "../../components/mdx/native-elements/mdx-ordered-list"
import MdxLink from "../../components/mdx/native-elements/mdx-link"

const MdxCustomizedComponents = {
  h1: props => <MdxHeader {...props} variant={"h1"} />,
  h2: props => <MdxHeader {...props} variant={"h2"} />,
  h3: props => <MdxHeader {...props} variant={"h3"} />,
  h4: props => <MdxHeader {...props} variant={"h4"} />,
  h5: props => <MdxHeader {...props} variant={"h5"} />,
  h6: props => <MdxHeader {...props} variant={"h6"} />,
  p: props => <Typography {...props} paragraph={true} />,
  a: props => <MdxLink {...props} />,
  // thematicBreak: ,
  // blockquote: ,
  ul: props => <MdxUnorderedList {...props} />,
  ol: props => <MdxOrderedList {...props} />,
  li: props => <MdxListItem {...props} />,
  table: props => <MdxTableContainer {...props} />,
  thead: props => <TableHead {...props} />,
  tbody: props => <TableBody {...props} />,
  tr: props => <MdxTableRow {...props} />,
  th: props => <MdxTableHeaderCell {...props} />,
  td: props => <MdxTableDataCell {...props} />,
  // pre: ,
  // code: ,
  // em: ,
  // strong: ,
  // delete: ,
  // code: ,
  hr: props => <MdxDivider {...props} />,
  // img: ,
}

export default MdxCustomizedComponents
