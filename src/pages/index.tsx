import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/templates/Page"

import ButtonMedium from "../components/buttons/ButtonMedium"
import ButtonSmall from "../components/buttons/ButtonSmall"
import ButtonLarge from "../components/buttons/ButtonLarge"
import TextInput from "../components/TextInput"
import SelectInput from "../components/SelectInput"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ButtonSmall>Hello world</ButtonSmall>
      <ButtonMedium>Hello World</ButtonMedium>
      <ButtonLarge>Hello World</ButtonLarge>
      <div style={{width:'300px'}}>
        <TextInput valid={true} value="toto"/>
        <SelectInput options={['a', 'b', 'c']} />
      </div>
      
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
