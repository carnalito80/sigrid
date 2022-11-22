import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About me" keywords={[`blog`, `about me`, `sigrid stroberg`, `sigrid stromberg`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="about-me">
          About me
          </h2>
        
          <h3 id="sigrid-stromgren">Sigrid Strömgren</h3>
          <p>
           A blog about furniture projects and fashion.
          </p>
          <p>
           I will also use this blog for my other hobbies like gardening, trips in Europe and cooking! 
            
          </p>
          <p>  I hope you will like it and continue to read my posts :) <br></br>
           Sigrid S
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "ullah.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 634) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
