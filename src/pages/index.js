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
          . I'm a senior at Northeastern University graduating in May 2020.
        </p>
        <p className="hero">
          <b>I'm looking for a job!</b> Will you hire me?
        </p>
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
          <li>
            <a href="mailto:lim.a@husky.neu.edu">
              Email
            </a>
          </li>
        </ul>
      </div>
      <div className="text-block-wide">
        <h2 className="section-header">Projects</h2>
        <div className="project">
          <h3>
            <a href="https://sinceparkland.org/" target="_blank">
              Since Parkland
            </a>{" "}
            &mdash; Upstatement
          </h3>
          <p>
            Upstatement worked with{" "}<a href="https://www.thetrace.org/" target="_blank">
              The Trace
            </a>{" "}
            to address the issue of gun violence through an interactive,
            storytelling experience. I joined the project at the start of development and
            focused on integrating AirTable data with our Jekyll site and built
            the search functionality using the Algolia API.
          </p>
        </div>
        <div className="project">
          <h3>
            <a href="https://www.arnoldventures.org/grants" target="_blank">Arnold Ventures</a>{" "}
            &mdash; Upstatement
          </h3>
          <p>
            Arnold Ventures sought to improve the way they communicate their grant data. I worked in all steps of the design process from research and data analysis to design and finally development to visualize this data. The visualization was built in D3.js and integrated into a Craft CMS backend.
          </p>
        </div>
        <div className="project">
          <h3>
            <a href="https://apps.bostonglobe.com/magazine/graphics/2019/01/17/valedictorians/" target="_blank">The Valedictorians Project</a>{" "}
            &mdash; The Boston Globe
          </h3>
          <p>
            The Globe took a look at what happens to Boston’s top students years after graduation. I started working on the project by tracking down and contacting valedictorians. Over the course of three months, I spoke with 30 valedictorians and collected data for the project’s research.
          </p>
        </div>
        <div className="project">
          <h3>
            <a href="https://alexanderlim9.github.io/concerts/" target="_blank">Concerts</a>
          </h3>
          <p>
            I went to my first concert in 2014 (it was Arcade Fire). I’m a big live music fan and frequent concerts often, so I decided to document them more formally before I start to forget. I had been keeping a list in a note doc but took the opportunity to apply the same tech stack I learned from Since Parkland. This version is built in Jekyll with data from AirTable and is a work in progress.
          </p>
        </div>
      </div>
      <div className="text-block-wide">
        <h2 className="section-header">About Me</h2>
        <div className="two-col">
          <div className="photo"></div>
          <div className="bio">
            <p>
              So, like I said, I’m about to graduate from Northeastern where I study computer science and design. Originally, I just wanted to be a traditional designer-developer, but then I found data, and then I found journalism.
            </p>
            <p>
              I see so much potential to leverage data and the digital space to tell stories that need to be heard in ways that make sense. As I get ready to kickstart my career, I’m thinking about how my background&mdash;technical and personal&mdash;can influence the work that I do.
            </p>
            <p>
              When I’m not thinking about my career, I’m thinking about bagels from Long Island where I grew up.  I’m a big design and data nerd, and I go to a lot of concerts. Ask me about coffee or tea, or we can get some sometime!
            </p>
          </div>
        </div>
      </div>
      <div className="text-block-wide">
        <h2 className="section-header">Contact</h2>
        <p><b>Let's get in touch!</b><br/>I'll be attending the <a href="https://www.aaja19.org/" target="_blank">AAJA19</a> Conference in Atlanta, GA next week. If you're there, say hello! 👋</p>
        <div className="text-block-wide contact">
        <ul>
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
          <li>
            <a href="mailto:lim.a@husky.neu.edu">
              Email
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
