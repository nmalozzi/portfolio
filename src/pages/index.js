import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Sections from "../components/sections/sections"
import "./page.scss"
import nick from "../nick"

const IndexPage = () => (
  <Layout>
    <Seo title="nick malozzi" />
    <Sections sections={nick.navigableData} />
  </Layout>
)

export default IndexPage
