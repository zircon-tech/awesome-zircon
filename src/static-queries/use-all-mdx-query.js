import { graphql, useStaticQuery } from "gatsby"

export const useAllMdxQuery = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query AllMdx {
        allMdx(sort: { fields: [fields___slug] }) {
          edges {
            node {
              id
              frontmatter {
                title
                display_order
              }
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `
  )
  return allMdx.edges
}
