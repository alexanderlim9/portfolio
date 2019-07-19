import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Alexander Lim" />
    <div className="container">
      <div className="text-block-wide">
        <h1 className="hero">
          <b>I'm Alex.</b> I'm a creative developer, designer, and journalist
          telling stories through data and the web.
        </h1>
        <p className="hero">
          I just wrapped up an apprenticeship at{" "}
          <a href="https://www.upstatement.com/" target="_blank">
            Upstatement
          </a>{" "}
          where I focused on data visualization. Before that, I’ve freelanced at{" "}
          <a href="https://www.bostonglobe.com/" target="_blank">
            The Boston Globe
          </a>{" "}
          and have worked at{" "}
          <a href="https://www.twosixlabs.com/" target="_blank">
            Two Six Labs
          </a>{" "}
          and{" "}
          <a href="https://web.northeastern.edu/scout/" target="_blank">
            Scout Studio
          </a>
          .
        </p>
        <p className="hero">
          <b>I'm looking for a job!</b> Will you hire me? &mdash;>{" "}
          <a href="mailto:lim.a@husky.neu.edu">Get in touch</a>
        </p>

        {/* <li><a href="https://sinceparkland.org/" target="_blank">Since Parkland</a></li>
              <li><a href="https://apps.bostonglobe.com/magazine/graphics/2019/01/17/valedictorians/" target="_blank">The Valedictorians Project</a></li>
              <li><a href="/coming-soon" target="_blank">Arnold Ventures</a></li>
              <li><a href="/coming-soon" target="_blank">Concerts</a></li> */}
      </div>
      <div className="text-block-wide contact">
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/1-rQK9KrxAyGKH5OWcPHR-_4DR5Rhv-0o/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alexander-lim/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/alexanderlim9" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/journalims" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
