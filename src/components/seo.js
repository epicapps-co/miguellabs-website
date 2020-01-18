import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ meta, lang, title, description }) {
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

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={titleTemplate}
    >
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang} />
      <meta property="og:site_name" content={m.name} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={m.author} />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
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
        })}
      </script>
    </Helmet>
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
