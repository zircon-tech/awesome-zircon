import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadataHeaderQuery = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadataHeader {
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
