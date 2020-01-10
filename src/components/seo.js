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
            email
            phone
            name
            legalName
            streetAddress
            addressLocality
            addressRegion
            postalCode
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

  const m = data.site.siteMetadata

  const metaTitle = title || m.title
  const metaDescription = description || m.description
  const titleTemplate = title ? `%s | ${m.title}` : `%s`
  const metaUrl = m.url

  const metaImage = `${m.url}${data.file.childImageSharp.fixed.src}`

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Company",
    url: m.url,
    name: m.name,
    legalName: m.legalName,
    description: m.description,
    email: m.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: m.phone,
      contactType: "Customer Support",
    },
  }

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
      >
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
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
