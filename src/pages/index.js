import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/sections/cover"
import Taglines from "../components/sections/taglines"
import Spacer from "../components/helpers/spacer"

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Cover />
      <Spacer />
      <Taglines />
    </Layout>
  )
}
