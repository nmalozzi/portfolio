import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Image from "../components/image/image"
import SEO from "../components/seo/seo"
import Sections from "../components/sections/sections"
import "./page.scss"
import nick from "../nick"

const IndexPage = () => (
  <Layout>
    <SEO title="nick malozzi"/>
    <Sections sections={nick.navigableData}/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
