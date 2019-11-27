import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  background-color: black;
  height: 100%;
  width: 100%;
  z-index: -1;
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "/cover//" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 2880, maxHeight: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `)

  const randomCover = Math.floor(Math.random() * data.allFile.nodes.length)
  const fluidImage = data.allFile.nodes[randomCover].childImageSharp.fluid

  return (
    <Container>
      <Img
        style={{ height: "100%" }}
        fluid={fluidImage}
        alt="MM+ cover image"
      />
    </Container>
  )
}

export default Image
