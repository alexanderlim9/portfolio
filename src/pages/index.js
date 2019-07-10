import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="two-col">
        <div className="two-col-left">
          <div className="half-page-block_image">
            <div className="image-block"></div>
          </div>
        </div>
        <div className="two-col-right">
          <div className="half-page-block_text">
            <div className="text-block">
              <h1 className="hero"><b>I'm Alex.</b> I'm a creative developer, designer, and journalist telling stories through data and the web.</h1>      
            </div>
            <div className="text-block home-cta">
              <div className="home-cta-col">
                <h2>Currently</h2>
                <p>Looking for a job! <br/>Will you hire me?</p>
                <a href="mailto:lim.a@husky.neu.edu">Get in touch</a>
              </div>
              <div className="home-cta-col">
                <h2>Formerly</h2>
                <ul>
                  <li><a href="https://www.upstatement.com/" target="_blank">Upstatement</a></li>
                  <li><a href="https://www.bostonglobe.com/" target="_blank">The Boston Globe</a></li>
                  <li><a href="https://www.twosixlabs.com/" target="_blank">Two Six Labs</a></li>
                  <li><a href="https://web.northeastern.edu/scout/" target="_blank">Scout Studio</a></li>
                </ul>
                <a href="https://drive.google.com/file/d/1YtwDXLUnrQG9_IrEPc1wMMT7zX7-iimA/view?usp=sharing" target="_blank">View experience</a>
              </div>
              <div className="home-cta-col">
                <h2>Featured</h2>
                <ul>
                  <li><a href="https://sinceparkland.org/" target="_blank">Since Parkland</a></li>
                  <li><a href="https://apps.bostonglobe.com/magazine/graphics/2019/01/17/valedictorians/" target="_blank">The Valedictorians Project</a></li>
                  <li><a href="/coming-soon" target="_blank">Arnold Ventures</a></li>
                  <li><a href="/coming-soon" target="_blank">Concerts</a></li>
                </ul>
                <a href="/coming-soon">Explore projects</a>
              </div>
            </div>
            <div className="text-block contact">
              <ul>
                <li><a href="https://github.com/alexanderlim9" target="_blank">Github</a></li>
                <li><a href="https://www.linkedin.com/in/alexander-lim/" target="_blank">LinkedIn</a></li>
                <li><a href="https://twitter.com/journalims" target="_blank">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
