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
              </div>
              <div className="home-cta-col">
                <h2>Featured</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div style={{display: 'none'}}>
      <div className="block hero">
          <h1>Alex Lim is a creative developer, designer, and journalist telling stories through data and the web.</h1>
      </div>
      <div className="block work">
          <p>Right now he's an Engineering Apprentice at <a className="inline-link" href="https://www.upstatement.com/" target="_blank">Upstatement </a> 
               where he focuses on data visualization.</p>
          <p>He's grateful to have worked on both <a className="inline-link" href="https://sinceparkland.org/" target="_blank">Since
                  Parkland</a> and <a className="inline-link" href="https://apps.bostonglobe.com/magazine/graphics/2019/01/17/valedictorians/"
                  target="_blank">The Valedictorians Project</a>, especially after seeing the public response and
              dialogue that each one sparked. (More on these coming soon)</p>
          <p>Alex is entering his senior year at Northeastern University. You'll see him in a cap and gown in May 2020!
              🎓</p>
      </div>
      <div className="block contact-list">
        <ul>
          <li><a className="inline-link" href="https://drive.google.com/file/d/1YtwDXLUnrQG9_IrEPc1wMMT7zX7-iimA/view?usp=sharing" target="_blank">Resume</a></li>
          <li><a className="inline-link" href="https://github.com/alexanderlim9" target="_blank">Github</a></li>
          <li><a className="inline-link" href="https://www.linkedin.com/in/alexander-lim/" target="_blank">LinkedIn</a></li>
          <li><a className="inline-link" href="https://twitter.com/journalims" target="_blank">Twitter</a></li>
        </ul>
      </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
