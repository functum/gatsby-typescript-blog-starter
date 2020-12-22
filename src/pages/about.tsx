import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    }
  }
}

const AboutPage: FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h1>About</h1>
      <p>this will be the about page</p>
    </Layout>
  )
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
