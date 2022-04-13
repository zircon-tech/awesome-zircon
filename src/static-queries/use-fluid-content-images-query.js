import { graphql, useStaticQuery } from "gatsby"

export const useFluidContentImagesQuery = () => {
  const { fluidContentImages } = useStaticQuery(
    graphql`
      query FluidContentImages {
        fluidContentImages: allFile(
          filter: { sourceInstanceName: { eq: "content-images" } }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid_tracedSVG
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    `
  )
  return fluidContentImages.edges
}
