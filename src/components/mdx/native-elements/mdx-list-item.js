import ListItem from "@material-ui/core/ListItem"
import MdxListItemText from "./mdx-list-item-text"
import React from "react"

const MdxListItem = props => {
  return (
    <ListItem>
      <MdxListItemText {...props} />
    </ListItem>
  )
}

export default MdxListItem
