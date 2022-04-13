import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadataSEOQuery = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadataSEO {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}
