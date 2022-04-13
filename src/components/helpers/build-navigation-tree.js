import SortNavigationTree from "./sort-navigation-tree"

const BuildNavigationTree = edges => {
  const result = []
  const level = { result }

  edges.forEach(edge => {
    edge.node.fields.slug.split("/").reduce((accumulator, currentValue) => {
      if (currentValue === "") {
        return accumulator
      }

      if (accumulator[currentValue]) {
        // current entry is already in accumulator so do nothing
      } else {
        accumulator[currentValue] = { result: [] }

        accumulator.result.push({
          children: accumulator[currentValue].result,
          id: edge.node.id,
          title: edge.node.frontmatter.title,
          display_order: edge.node.frontmatter.display_order,
          slug: edge.node.fields.slug,
          table_of_contents: edge.node.tableOfContents,
        })
      }

      return accumulator[currentValue]
    }, level)
  })

  return SortNavigationTree(result)
}

export default BuildNavigationTree
