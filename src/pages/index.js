import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/cover/cover"
// import Taglines from "../components/taglines/taglines"
// import Spacer from "../components/spacer"

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Cover />
      {/* <Spacer />
      <Taglines /> */}
    </Layout>
  )
}