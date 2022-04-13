const GetNode = (navigationTree, equalityExpression) => {
  const queue = [...navigationTree]

  while (queue.length > 0) {
    const currentNode = queue.shift()

    if (equalityExpression(currentNode)) {
      return currentNode
    }

    for (const childNode of currentNode.children) {
      queue.push(childNode)
    }
  }

  return false
}

export function GetNodeById(navigationTree, nodeId) {
  return GetNode(navigationTree, node => node.id === nodeId)
}

export function GetNodeBySlug(navigationTree, slug) {
  return GetNode(navigationTree, node => node.slug === slug)
}

export function GetBreadcrumbNodes(navigationTree, currentNode) {
  if (!currentNode) return false

  let endIndex = currentNode.slug.indexOf("/") + 1
  let startIndex = 0
  let searchString = ""
  let searchNode = navigationTree
  const breadcrumbNodes = []

  while (startIndex < currentNode.slug.length) {
    searchString += currentNode.slug.slice(startIndex, endIndex)
    const searchResult = GetNodeBySlug(searchNode, searchString)

    if (searchResult) {
      breadcrumbNodes.push(searchResult)
      searchNode = searchResult.children
    }

    startIndex = endIndex
    endIndex = currentNode.slug.indexOf("/", endIndex) + 1
  }

  return breadcrumbNodes
}
