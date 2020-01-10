/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            image
          }
        }
        file(relativePath: { eq: "social-hero.png" }) {
          childImageSharp {
            fixed(width: 1200) {
              src
            }
          }
        }
      }
    `
  )

  const siteMetadata = data.site.siteMetadata

  const metaTitle = title || siteMetadata.title
  const metaDescription = description || siteMetadata.description
  const titleTemplate = title ? `%s | ${siteMetadata.title}` : `%s`
  const metaUrl = siteMetadata.url

  const metaImage = `${siteMetadata.url}${data.file.childImageSharp.fixed.src}`

  return (
    <HelmetProvider>
      <Helmet
        defer={false}
        htmlAttributes={{
          lang,
        }}
        title={metaTitle}
        titleTemplate={titleTemplate}
        meta={[
          {
            name: `title`,
            content: metaTitle,
          },
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:url`,
            content: metaUrl,
          },
          {
            property: `og:title`,
            content: metaTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:image`,
            content: metaImage,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:url`,
            content: metaUrl,
          },
          {
            name: `twitter:title`,
            content: metaTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `twitter:image`,
            content: metaImage,
          },
        ].concat(meta)}
      />
    </HelmetProvider>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
