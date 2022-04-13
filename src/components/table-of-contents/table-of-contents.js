import React, { Fragment } from "react"
import List from "@material-ui/core/List"
import ListSubheader from "@material-ui/core/ListSubheader"
import { makeStyles } from "@material-ui/core/styles"
import MdxDivider from "../mdx/native-elements/mdx-divider"
import PageNode from "./page-node"
import TableOfContentsNode from "./table-of-contents-node"

const useStyles = makeStyles(theme => ({
  list: {
    backgroundColor: theme.palette.background.paper,
    width: 240,
  },
}))

const TableOfContents = props => {
  const classes = useStyles()
  const { currentNode } = props
  let hasTableOfContents = currentNode?.table_of_contents?.items?.length > 0
  let hasChildren = currentNode?.children?.length > 0

  return hasTableOfContents || hasChildren ? (
    <Fragment>
      <List
        component="nav"
        aria-labelledby="page-table-of-contents-subheader"
        className={classes.list}
        dense
        subheader={
          <ListSubheader component="div" id="page-table-of-contents-subheader">
            Table of Contents
          </ListSubheader>
        }
      >
        {hasTableOfContents
          ? currentNode.table_of_contents.items.map(tableOfContentsNode => (
              <TableOfContentsNode
                key={tableOfContentsNode.title}
                node={tableOfContentsNode}
                slug={currentNode.slug}
              />
            ))
          : currentNode.children.map(pageNode => (
              <PageNode key={pageNode.id} node={pageNode} />
            ))}
      </List>
      {hasTableOfContents ? <MdxDivider /> : <Fragment />}
    </Fragment>
  ) : (
    <Fragment />
  )
}

export default TableOfContents
