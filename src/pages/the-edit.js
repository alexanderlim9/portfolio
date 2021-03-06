import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EditPage = () => (
  <Layout>
    <div className="edit-wrapper">
      <div className="nav">
        <svg id="hamburger" class="css-1fe7a5q" viewBox="0 0 16 16"><rect x="1" y="3" fill="#333333" width="14" height="2"></rect><rect x="1" y="7" fill="#333333" width="14" height="2"></rect><rect x="1" y="11" fill="#333333" width="14" height="2"></rect></svg>
        <svg id="nyt-logo" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 184 25" fill="#000"><path d="M13.8 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8C6.2 1.4 5 1 4 1 2 1 .6 2.5.6 4.2c0 1.5 1.1 2 1.5 2.2l.1-.2c-.2-.2-.5-.4-.5-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1L9 10.2v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2C3.6 6.9 4.7 6 5.8 5.4l-.1-.3c-3 .8-5.7 3.6-5.7 7 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1l-1.6-1.3V5.8c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7 0-1.5.2-2.1l2.1-.9v6.2zm10.6 2.3l-1.3 1 .2.2.6-.5 2.2 2 3-2-.1-.2-.8.5-1-1V9.4l.8-.6 1.7 1.4v6.1c0 3.8-.8 4.4-2.5 5v.3c2.8.1 5.4-.8 5.4-5.7V9.3l.9-.7-.2-.2-.8.6-2.5-2.1L18.5 9V.8h-.2l-3.5 2.4v.2c.4.2 1 .4 1 1.5l-.1 11.3zM34 15.1L31.5 17 29 15v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6-.1-.4zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zM53.1 2c0-.3-.1-.6-.2-.9h-.2c-.3.8-.7 1.2-1.7 1.2-.9 0-1.5-.5-1.9-.9l-2.9 3.3.2.2 1-.9c.6.5 1.1.9 2.5 1v8.3L44 3.2c-.5-.8-1.2-1.9-2.6-1.9-1.6 0-3 1.4-2.8 3.6h.3c.1-.6.4-1.3 1.1-1.3.5 0 1 .5 1.3 1v3.3c-1.8 0-3 .8-3 2.3 0 .8.4 2 1.6 2.3v-.2c-.2-.2-.3-.4-.3-.7 0-.5.4-.9 1.1-.9h.5v4.2c-2.1 0-3.8 1.2-3.8 3.2 0 1.9 1.6 2.8 3.4 2.7v-.2c-1.1-.1-1.6-.6-1.6-1.3 0-.9.6-1.3 1.4-1.3.8 0 1.5.5 2 1.1l2.9-3.2-.2-.2-.7.8c-1.1-1-1.7-1.3-3-1.5V5l8 14h.6V5c1.5-.1 2.9-1.3 2.9-3zm7.3 13.1L57.9 17l-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6-.1-.4zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zM76.7 8l-.7.5-1.9-1.6-2.2 2 .9.9v7.5l-2.4-1.5V9.6l.8-.5-2.3-2.2-2.2 2 .9.9V17l-.3.2-2.1-1.5v-6c0-1.4-.7-1.8-1.5-2.3-.7-.5-1.1-.8-1.1-1.5 0-.6.6-.9.9-1.1v-.2c-.8 0-2.9.8-2.9 2.7 0 1 .5 1.4 1 1.9s1 .9 1 1.8v5.8l-1.1.8.2.2 1-.8 2.3 2 2.5-1.7 2.8 1.7 5.3-3.1V9.2l1.3-1-.2-.2zm18.6-5.5l-1 .9-2.2-2-3.3 2.4V1.6h-.3l.1 16.2c-.3 0-1.2-.2-1.9-.4l-.2-13.5c0-1-.7-2.4-2.5-2.4s-3 1.4-3 2.8h.3c.1-.6.4-1.1 1-1.1s1.1.4 1.1 1.7v3.9c-1.8.1-2.9 1.1-2.9 2.4 0 .8.4 2 1.6 2V13c-.4-.2-.5-.5-.5-.7 0-.6.5-.8 1.3-.8h.4v6.2c-1.5.5-2.1 1.6-2.1 2.8 0 1.7 1.3 2.9 3.3 2.9 1.4 0 2.6-.2 3.8-.5 1-.2 2.3-.5 2.9-.5.8 0 1.1.4 1.1.9 0 .7-.3 1-.7 1.1v.2c1.6-.3 2.6-1.3 2.6-2.8s-1.5-2.4-3.1-2.4c-.8 0-2.5.3-3.7.5-1.4.3-2.8.5-3.2.5-.7 0-1.5-.3-1.5-1.3 0-.8.7-1.5 2.4-1.5.9 0 2 .1 3.1.4 1.2.3 2.3.6 3.3.6 1.5 0 2.8-.5 2.8-2.6V3.7l1.2-1-.2-.2zm-4.1 6.1c-.3.3-.7.6-1.2.6s-1-.3-1.2-.6V4.2l1-.7 1.4 1.3v3.8zm0 3c-.2-.2-.7-.5-1.2-.5s-1 .3-1.2.5V9c.2.2.7.5 1.2.5s1-.3 1.2-.5v2.6zm0 4.7c0 .8-.5 1.6-1.6 1.6h-.8V12c.2-.2.7-.5 1.2-.5s.9.3 1.2.5v4.3zm13.7-7.1l-3.2-2.3-4.9 2.8v6.5l-1 .8.1.2.8-.6 3.2 2.4 5-3V9.2zm-5.4 6.3V8.3l2.5 1.8v7.1l-2.5-1.7zm14.9-8.4h-.2c-.3.2-.6.4-.9.4-.4 0-.9-.2-1.1-.5h-.2l-1.7 1.9-1.7-1.9-3 2 .1.2.8-.5 1 1.1v6.3l-1.3 1 .2.2.6-.5 2.4 2 3.1-2.1-.1-.2-.9.5-1.2-1V9c.5.5 1.1 1 1.8 1 1.4.1 2.2-1.3 2.3-2.9zm12 9.6L123 19l-4.6-7 3.3-5.1h.2c.4.4 1 .8 1.7.8s1.2-.4 1.5-.8h.2c-.1 2-1.5 3.2-2.5 3.2s-1.5-.5-2.1-.8l-.3.5 5 7.4 1-.6v.1zm-11-.5l-1.3 1 .2.2.6-.5 2.2 2 3-2-.2-.2-.8.5-1-1V.8h-.1l-3.6 2.4v.2c.4.2 1 .3 1 1.5v11.3zM143 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8-1.3-.4-2.5-.8-3.5-.8-2 0-3.4 1.5-3.4 3.2 0 1.5 1.1 2 1.5 2.2l.1-.2c-.3-.2-.6-.4-.6-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8V9l-1.5 1.3v.1l1.5 1.3V16c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2c.5-1.3 1.6-2.2 2.6-2.9l-.1-.2c-3 .8-5.7 3.5-5.7 6.9 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1L140 8.8v-3c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7.1-1.5.3-2.1l2.1-.9-.1 6.2zm12.2-12h-.1l-2 1.7v.1l1.7 1.9h.2l2-1.7v-.1l-1.8-1.9zm3 14.8l-.8.5-1-1V9.3l1-.7-.2-.2-.7.6-1.8-2.1-2.9 2 .2.3.7-.5.9 1.1v6.5l-1.3 1 .1.2.7-.5 2.2 2 3-2-.1-.3zm16.7-.1l-.7.5-1.1-1V9.3l1-.8-.2-.2-.8.7-2.3-2.1-3 2.1-2.3-2.1L154 9l-1.8-2.1-2.9 2 .1.3.7-.5 1 1.1v6.5l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.9-.6 1.5 1.4v6l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.8-.5 1.6 1.4v6l-.7.7 2.3 2.1 3.1-2.1v-.3zm8.7-1.5l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.8l3.5 2.5 4.5-3.6-.1-.3zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zm14.1-.9l-1.9-1.5c1.3-1.1 1.8-2.6 1.8-3.6v-.6h-.2c-.2.5-.6 1-1.4 1-.8 0-1.3-.4-1.8-1L176 9.3v3.6l1.7 1.3c-1.7 1.5-2 2.5-2 3.3 0 1 .5 1.7 1.3 2l.1-.2c-.2-.2-.4-.3-.4-.8 0-.3.4-.8 1.2-.8 1 0 1.6.7 1.9 1l4.3-2.6v-3.6h-.1zm-1.1-3c-.7 1.2-2.2 2.4-3.1 3l-1.1-.9V8.1c.4 1 1.5 1.8 2.6 1.8.7 0 1.1-.1 1.6-.4zm-1.7 8c-.5-1.1-1.7-1.9-2.9-1.9-.3 0-1.1 0-1.9.5.5-.8 1.8-2.2 3.5-3.2l1.2 1 .1 3.6z"></path></svg>
        <svg id="profile-icon" class="css-10m9xeu" viewBox="0 0 16 16" fill="#333"><path d="M8,10c-2.5,0-7,1.1-7,3.5V16h14v-2.5C15,11.1,10.5,10,8,10z"></path><circle cx="8" cy="4" r="4"></circle></svg>
      </div>
      <hr/>
      <div className="block hero">
        <span className="edit-masthead">The Edit</span>
        <h1>A Blind Eye to the Blind</h1>
        <h2>How I, and other developers, haven't cared enough about creating an accessible Internet.</h2>
      </div>
      <div className="block" id="placeholder-image"></div>
      <div className="block byline">
        <div id="avatar"/>
        <span id="byline">By Alex Lim</span>
      </div>
      <div className="block date">
        <span className="date">June 20, 2019</span>
      </div>
      <div className="block copy">
        <p className="foreward">Welcome to The Edit newsletter. Each week you’ll hear from <a href="https://www.nytimes.com/2018/08/28/smarter-living/the-edit-contributors.html?module=inline" target="_blank">college students and recent graduates</a> about issues going on in their lives. You also may hear from me, <a>Christen Enos</a>, editor of the newsletter. <a>Sign up here</a> to get it in your inbox.</p>
        <p>
        I could be the one who makes the website you browse tomorrow. To that, I have only one word to say: <em>Yikes</em>. I’m a computer science student focusing on web development and design, and I’m next in line to enter the workforce. What troubles me about this is realizing how my actions (or inactions) as a web developer can impact the communities that I’m trying to serve. In particular, I worry that this generation of incoming developers isn’t being taught to value accessibility in the products that they build. If that’s true, it means that people with disabilities are being left out of the picture when it comes to accessing content on the web. That needs to change.
        </p>
        <p>
        I’ve worked in the web industry as a front-end developer for 18 months now across three internships. In each of these jobs, no one has really been concerned with whether the product I’m building is accessible. No one has asked me if the webpage I made is compatible with <a href="https://webaccess.berkeley.edu/ask-pecan/what-is-a-screen-reader" target="_blank">screen-readers</a> or similar assistive technology. No one has asked me if the font size on the page will still be legible to elderly and low-vision users. My supervisors mainly cared that my code worked how it was supposed to. Accessibility just never came up.
        </p>
        <p>
        The one time it did, however, I was at my second internship working on a tool to visualize data using graphs and various colors. One of my team members Mike happened to be red-green color blind, a condition also known as <a href="https://nei.nih.gov/health/color_blindness/facts_about" target="_blank">deuteranopia</a>. His perception of color was different from the rest of my team’s and thus affected his ability to use this product. But even with this accessibility flaw in mind, my team simply brushed it off&mdash;it wasn’t that important. “Make graphs color blind accessible” was a task on our product backlog, but it never made its way up to the top of the list, at least not while I was there.
        </p>
        <p>
        So what I’ve seen so far is this prioritization of features that favors a “just get it working” approach to web development. In the industry, there’s often a rush to meet deadlines and deliver the next feature or update on time. Sometimes that means cutting corners to get things done, but ensuring accessibility shouldn’t be the first task to be cut. Sure, I might save myself some work and meet that important deadline, but at whose expense? I’ll give you a hint: it’s not mine.
        </p>
        <p>
        My coworker Mike is just one of more than 11.4 million Americans living with some form of visual impairment or vision problem according to a <a href="https://www.nih.gov/news-events/news-releases/visual-impairment-blindness-cases-us-expected-double-2050" target="_blank">study by the National Institutes of Health</a>. By the year 2050, the number of visually impaired and blind people in the US is expected to double; these are just <em>some</em> of the people who are affected when developers build websites without accessibility in mind. Other affected groups include people with hearing, mobility, or cognitive disabilities that influence the way they surf the web.
        </p>
        <p>
        If developers in the field today don’t value accessibility, it’s on this new generation of students to step up to bat. It’s no small task to build a website that everyone can use, but I’ve learned a few small ways that developers can promote accessibility in their work and out on the web.
        </p>
        <h3>
        Follow the Guidelines
        </h3>
        <p>
        The <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG 2.1)</a> is an effort by the World Wide Web Consortium (W3C) to establish a universal standard for evaluating web accessibility. This document serves as a fairly exhaustive reference for accessibility issues ranging from keyboard navigation to seizures and physical reactions. WCAG 2.1 even outlines requirements for the three levels of accessibility compliance: A (lowest), AA, and AAA (highest). 
        </p>
        <h3>
        Use Accessibility Checkers
        </h3>
        <p>
        There are a number of tools available to developers to evaluate a website’s accessibility. Tools such as <a href="http://pa11y.org/" target="_blank">Pa11y</a> can be integrated into projects to allow developers to monitor accessibility throughout the development process and identify potential errors. But these services aren’t just limited to technical users. <a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd" target="_blank">Axe</a> is another popular tool for evaluating the accessibility of any website, and it’s available as a Chrome extension. Many of the services available are free and easy to use. 
        </p>
        <h3>
        Raise Awareness
        </h3>
        <p>
        One of the biggest obstacles to the widespread adoption of accessibility standards is lack of awareness. Some developers may fail to ensure accessibility simply because they’re unaware of the needs of users with disabilities. Others may have this awareness but are unaware of how to address this or decide not to all together. No matter the reason, educating oneself and others about the importance of web accessibility can have a wide-reaching impact among those in the web community. 
        </p>
        <p>
        Now of course there are challenges to this, again, it’s no easy task. Resistance can come from all around: managers, senior developers, designers, clients, etc., and it can be especially difficult for newer developers to go against the grain. There are some challenges that will be inevitable. For instance, some older and more complex codebases could be incompatible or too complicated to update to meet accessibility standards.  Sometimes accessible solutions can impose design constraints or limit certain features of a website. While increasing resources like time and money might help developers enforce accessibility, it’s the attitude towards web accessibility that holds the most potential.
        </p>
        <p>
        As the next generation of web developers begins to enter the industry, I hope they bring with them a new set of values. It’s about time! Accessibility should become a universal quality of the Internet, and developers&mdash;new ones especially&mdash;play a huge role in making this a reality. As creators of the web, they’re often the decision makers who guide how the online world takes shape. Each voice that’s able to advocate for the needs of people with disabilities stands to help shift the web community towards more inclusive practices.
        </p>
        <p>
        This isn’t a lesson that I picked up school, in fact, it took quite some time for me to realize this. Along the way, inclusive web development just wasn’t on my radar, and no one I’ve worked with seemed to have made much effort to change that. My hope is that I can be one of those people to speak up; otherwise, the problem persists and the web continues to be built inaccessible. The internet was made for everyone, regardless of disability status. We need to make sure it stays that way. 
        </p>
        <div className="author-info">
          <p>
          Alex Lim is a contributor to The Edit. He studies computer science and design at Northeastern University where he is expected to graduate in May 2020. He currently works as an engineer at Upstatement.
          </p>
        </div>
      </div>
      <div className="block disclaimer">
        <span>
          DISCLAIMER: Some of the content and styles on this page have been taken from The New York Times website. The author does not claim ownership of the trademarked elements of The New York Times nor of any assets of its website. This project is solely for academic and educational purposes. The author can be contacted via <a href="mailto:lim.a@husky.neu.edu">email</a> for any inquiries.
        </span>
      </div>
    </div>
  </Layout>
)

export default EditPage
