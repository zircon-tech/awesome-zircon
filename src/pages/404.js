import React from "react"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core"
import Layout from "../components/layout/layout"
import BuildNavigationTree from "../components/helpers/build-navigation-tree"
import MdxDivider from "../components/mdx/native-elements/mdx-divider"
import { useAllMdxQuery } from "../static-queries/use-all-mdx-query"

const NotFoundPage = () => {
  const allMdx = useAllMdxQuery()
  const navigationTree = BuildNavigationTree(allMdx)

  return (
    <Layout navigationTree={navigationTree}>
      <SEO title="404: Not found" />
      <Typography variant={"h2"}>404: Not Found</Typography>
      <MdxDivider variant={"fullWidth"} />
      <Typography paragraph>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Typography>
    </Layout>
  )
}

export default NotFoundPage
