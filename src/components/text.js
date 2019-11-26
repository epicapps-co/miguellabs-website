import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Text = ({ title }) => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          nodes {
            html
            frontmatter {
              title
            }
          }
        }
      }
    `
  )
  const index = nodes.findIndex(v => v.frontmatter.title === title)
  const { html } = nodes[index]

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

Text.propTypes = {
  title: PropTypes.node.isRequired,
}

export default Text
