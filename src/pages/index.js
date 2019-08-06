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
            <a href="https://www.arnoldventures.org/grants" target="_blank">Arnold Ventures</a>{" "}
            &mdash; Upstatement
          </h3>
          <p>
            Arnold Ventures sought to improve the way they communicate their grant data. I led and worked in all steps of the design process from research and data analysis to design and finally development to create the "Grants" page and visualize this data. The visualization was built in D3.js and integrated into a Craft CMS backend.
          </p>
        </div>
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
            the search experience using the Algolia API.
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
            I went to my first concert in 2014 (it was Arcade Fire). I’m a big live music fan and frequent concerts often, so I decided to document them more formally before I start to forget. I took this as opportunity to apply the same tech stack I learned from Since Parkland. This version is built in Jekyll with data from AirTable and is a work in progress: more details, photos, and videos to come.
          </p>
        </div>
      </div>
      <div className="text-block-wide">
        <h2 className="section-header">About Me</h2>
        <div className="two-col">
          <div className="photo"></div>
          <div className="bio">
            <p>
              I’m about to graduate from Northeastern where I study computer science and design. I started out as a traditional front-end developer and found a passion for data visualization. What I lacked, though, was purpose. And I found that purpose in journalism.
            </p>
            <p>
              I see so much potential to leverage data and the digital space to tell stories that need to be heard. Journalism is evolving, and I’m right there with it. As I move forward, I’m thinking about how my background&mdash;technical and personal&mdash;can influence the work that I do and the impact I can have as a developer.
            </p>
            <p>
              When I’m not thinking about work, I’m thinking about bagels from Long Island where I grew up.  I’m a big design and data nerd, and I <i>love</i> trains. I also care a lot about diversity and representation, and I’m a proud member of <a href="https://www.aaja.org/" target="_blank">AAJA</a>. Ask me what I know about coffee or tea, or we can get some sometime!
            </p>
          </div>
        </div>
      </div>
      <div className="text-block-wide">
        <h2 className="section-header">Contact</h2>
        <p><b>Let's get in touch!</b><br/>I'm comfortable with devs and designers, but around journalists I get nervous. I'm still learning how to pitch myself as a developer-journalist, and I'm all ears for advice on how to carve out that path. 🛣️</p>
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
