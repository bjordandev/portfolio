import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/templates/Page"

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Home Page</title>
