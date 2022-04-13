import ListItemLink from "../list-item-link"
import React, { Fragment } from "react"
import { Parser } from "htmlparser2"
import D1 from "../mdx/custom-elements/icons/dice/d1"
import D2 from "../mdx/custom-elements/icons/dice/d2"
import D3 from "../mdx/custom-elements/icons/dice/d3"
import D4 from "../mdx/custom-elements/icons/dice/d4"
import D5 from "../mdx/custom-elements/icons/dice/d5"
import D6 from "../mdx/custom-elements/icons/dice/d6"

const Entry = props => {
  const { entry, className, expansionState, handleExpansionClick } = props
  let titleSegments = []

  // Adds support for custom tags inside this Entry component
  const parser = new Parser(
    {
      onopentagname(name) {
        switch (name) {
          case "d1":
            titleSegments.push(<D1 />)
            break
          case "d2":
            titleSegments.push(<D2 />)
            break
          case "d3":
            titleSegments.push(<D3 />)
            break
          case "d4":
            titleSegments.push(<D4 />)
            break
          case "d5":
            titleSegments.push(<D5 />)
            break
          case "d611":
            titleSegments.push(<D6 />)
            break
          default:
            break
        }
      },
      ontext(text) {
        titleSegments.push(text)
      },
    },
    { recognizeSelfClosing: true }
  )

  parser.write(entry.title)
  parser.end()

  return (
    <Fragment>
      <ListItemLink
        className={className}
        primary={titleSegments.map((segment, index) => (
          <Fragment key={index}>{segment}</Fragment>
        ))}
        to={entry.url}
        expansionState={expansionState}
        handleExpansionClick={handleExpansionClick}
      />
    </Fragment>
  )
}

export default Entry
