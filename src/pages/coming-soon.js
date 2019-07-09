import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ComingSoonPage = () => (
  <Layout>
    <div className="container">
      <div className="two-col">
        <div className="two-col-left">
          <div className="half-page-block_image">
          </div>
        </div>
        <div className="two-col-right">
          <div className="half-page-block_text">
            <div className="text-block">
              <h1 className="hero"><b>Oh no,</b> you're early!</h1>
              <h1 className="hero">This page is still in progress, but check back again soon.</h1>
                <a href="/">Take me home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ComingSoonPage
