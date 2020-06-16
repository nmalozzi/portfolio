import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Sections from "../components/sections/sections"
import "./page.scss"
import nick from "../nick"

const IndexPage = () => (
  <Layout>
    <SEO title="nick malozzi"/>
    <Sections sections={nick.navigableData}/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
