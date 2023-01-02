import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/templates/Page"

import PresentationSection from "../components/PresentationSection"
import IntroductionSection from "../components/IntroductionSection"
import ContactSection from "../components/ContactSection"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PresentationSection/>
      <IntroductionSection/>
      <ContactSection />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
