// Determines order of nodes for display. display_order is nullable and has
// higher priority over title
const CompareDisplayOrder = (a, b) => {
  if (a.display_order === b.display_order) {
    if (a.title > b.title) {
      return 1
    }

    if (a.title < b.title) {
      return -1
    }
  }

  if (a.display_order === null) {
    return 1
  }

  if (b.display_order === null) {
    return -1
  }

  if (a.display_order > b.display_order) {
    return 1
  }

  if (a.display_order < b.display_order) {
    return -1
  }

  return 0
}

export default CompareDisplayOrder
