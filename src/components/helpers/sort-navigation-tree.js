import CompareDisplayOrder from "./compare-display-order"

const SortNavigationTree = navigationTree => {
  navigationTree.sort(CompareDisplayOrder)

  for (let i = 0; i < navigationTree.length; i++) {
    // iterates through each node on current level and recursively runs for all
    // children on those nodes until each node and all their children are sorted
    if (navigationTree[i].children instanceof Array) {
      SortNavigationTree(navigationTree[i].children)
    }
  }

  return navigationTree
}

export default SortNavigationTree
