import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/templates/Page"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      It works
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
