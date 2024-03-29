import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/sections/cover"
import Taglines from "../components/sections/taglines"
import Spacer from "../components/helpers/spacer"
import Services from "../components/sections/services"
import Work from "../components/sections/work"

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Cover />
      <Spacer />
      <Taglines />
      <Services />
      <Work />
    </Layout>
  )
}
