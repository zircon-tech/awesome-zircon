import React, { Fragment } from "react"
import Entry from "./entry"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import Collapse from "@material-ui/core/Collapse"
import TableOfContentsNode from "./table-of-contents-node"

const useStyles = makeStyles(theme => ({
  nested: props => ({
    paddingLeft: theme.spacing(props.spacing),
  }),
  page: {
    color: theme.palette.text.primary,
  },
}))

const PageNode = props => {
  const { node } = props
  const spacing = props.spacing ? props.spacing + 2 : 2
  const classes = useStyles({ spacing: spacing })
  const [open, setOpen] = React.useState(false)

  const hasTableOfContents = node?.table_of_contents?.items?.length > 0
  const hasChildren = node?.children?.length > 0
  const hasDescendents = hasTableOfContents || hasChildren

  const handleClick = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <Fragment>
      <Entry
        className={classes.page}
        entry={{ url: node.slug, title: node.title }}
        expansionState={hasDescendents ? open : null}
        handleExpansionClick={hasDescendents ? handleClick : null}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {hasTableOfContents ? (
          <List component="div" disablePadding dense className={classes.nested}>
            {node.table_of_contents.items.map(tableOfContentsNode => (
              <TableOfContentsNode
                key={tableOfContentsNode.title}
                node={tableOfContentsNode}
                slug={node.slug}
              />
            ))}
          </List>
        ) : (
          <Fragment />
        )}
        {hasChildren ? (
          <List component="div" disablePadding dense className={classes.nested}>
            {node.children.map(child => (
              <PageNode key={child.id} node={child} />
            ))}
          </List>
        ) : (
          <Fragment />
        )}
      </Collapse>
    </Fragment>
  )
}

export default PageNode
