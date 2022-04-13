import React from "react"
import Img from "gatsby-image"
import { Typography } from "@material-ui/core"
import { useFluidContentImagesQuery } from "../../../../static-queries/use-fluid-content-images-query"

const FluidContentImage = props => {
  const { fileName, alt } = props
  const contentImages = useFluidContentImagesQuery()

  const image = contentImages.find(edge => edge.node.relativePath === fileName)

  if (!image?.node?.childImageSharp?.fluid) {
    return (
      <div>
        <Typography>Picture not found</Typography>
      </div>
    )
  }

  return <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
}

export default FluidContentImage
