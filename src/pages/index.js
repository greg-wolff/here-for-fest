import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Mission from "../images/svg/Mission.svg"
import Artists from "../images/svg/Artists.svg"
import Organizations from "../images/svg/Organizations.svg"
import Tickets from "../images/svg/Tickets.svg"
import Partners from "../images/svg/Partners.svg"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Here for LA" />
    <div className="view">
      <div>
    <div className="hero">
      <StaticImage
        className="hero-image-0"
        src="../images/hero-0.png"
        loading="eager"
        width={628} 
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="view of the sky from over a wall"
      />
      <StaticImage
        className="hero-image-1"
        src="../images/hero-1.png"
        loading="eager"
        width={351} 
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="close-up of a myriad of tree roots"
      />
      <div className="hero-eyebrow">We create spaces around the causes you are here for</div>
      <h1>
        What are you here for?
      </h1>
      <div className="hero-caption">On December 3rd at 4:30 PM we are inviting you to participate in being here for Los Angeles.</div>
      <div className="hero-caption">Purchasing a ticket to this event will help support local organizations, musicians, and businesses.</div>
      </div>
      <div className="content">
        <div className="mission">
          <img className="section-header" src={Mission} />
          <h2>HERE Fest is a global concert series dedicated to creating hyper-local action wherever <i>here</i> is.</h2>
          <h2>With case-specific causes at the core, HERE Fest brings together local musicians, businesses, and leaders to support key organizations and nonprofits within a community. </h2>
          <h2>There is no final city for HERE Fest, and each location offers a unique way to create impact around the world. </h2>
          <h2>For our first festival in Los Angeles, we want to address both the key issues facing the city, and highlight the culture that is often overlooked and undervalued.</h2>
        </div>
        <div className="artists">
          <img className="section-header" src={Artists} />
          <div className="lineup">
            <div>
              <div className="lineup-h1"><a href="https://songwhip.com/claud" target="_blank">Claud</a></div>
              <div className="lineup-h1"><a href="https://songwhip.com/ashaimuno" target="_blank">Asha Imuno</a></div>
              <div className="lineup-h1"><a href="https://songwhip.com/the-hellp" target="_blank">The Hellp</a></div>
            </div>
            <div>
              <div className="lineup-h2"><a href="https://songwhip.com/juniorvarsity" target="_blank">Junior Varsity</a></div>
              <div className="lineup-h2"><a href="https://songwhip.com/djdave" target="_blank">DJ_Dave</a></div>
              <div className="lineup-h2"><a href="https://songwhip.com/nitefire" target="_blank">Nitefire</a></div>
              <div className="lineup-h2"><a href="https://songwhip.com/izzyspears" target="_blank">Izzy Spears</a></div>
            </div>
            <div>
              <div className="lineup-h3"><a href="https://songwhip.com/santangelo" target="_blank">Santangelo</a></div>
              <div className="lineup-h3"><a href="https://songwhip.com/bonavega" target="_blank">Bonavega</a></div>
              <div className="lineup-h3"><a href="https://songwhip.com/maddy-davis" target="_blank">Maddy Davis</a></div>
              <div className="lineup-h3">Team Alice</div>
            </div>
          </div>
          <div className="lineup-title">Mandate Heaven x Serenity Link Presents</div>
          <div className="lineup">
            <div>
                <div className="lineup-h2"><a href="https://songwhip.com/evilgiane" target="_blank">EvilGiane</a></div>
                <div className="lineup-h2"><a href="https://www.instagram.com/eera_1/" target="_blank">Eera</a></div>
                <div className="lineup-h2"><a href="https://www.instagram.com/mapamota.xo/" target="_blank">Mapa Mota</a></div>
                <div className="lineup-h2"><a href="https://www.instagram.com/sstealthangel/" target="_blank">Stealth Angel</a></div>
              </div>
              <div>
                <div className="lineup-h3"><a href="https://www.instagram.com/kynewman/" target="_blank">Ky Newman</a></div>
                <div className="lineup-h3"><a href="https://www.instagram.com/sevyn0000/" target="_blank">Sevyn</a></div>
                <div className="lineup-h3"><a href="https://www.instagram.com/uhoozi/" target="_blank">Hooz</a></div>
                <div className="lineup-h3">Spacemaster</div>
              </div>
          </div>
        </div>
        <div className="organizations">
        <img className="section-header" src={Organizations} />
        <div className="organizations-container">
          <a href="https://www.laworks.com/" target="_blank"><div className="organizations-card">
            <StaticImage
              className="organization-image"
              src="../images/laworks.png"
              loading="eager"
              width={178} 
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="a close-up of a drill screwing two pieces of wood together, held together by pairs of hands"
            />
            <div>
              <h3><a href="https://www.laworks.com/" target="_blank">L.A. Works</a></h3>
              <p>L.A. Works creates and leads programming to address critical issues in Los Angeles by mobilizing targeted volunteer communities - family volunteers; corporate volunteers; general community members; and older adult volunteers.</p>
            </div>
          </div></a>
          <a href="https://www.artworxla.org/" target="_blank"><div className="organizations-card">
            <StaticImage
              className="organization-image"
              src="../images/artworxla.png"
              loading="eager"
              width={178} 
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="a close-up of a drill screwing two pieces of wood together, held together by pairs of hands"
            />
            <div>
              <h3><a href="https://www.artworxla.org/" target="_blank">artworxLA</a></h3>
              <p>artworxLA is a Los Angeles-based arts non-profit that has provided over 15,000 at-risk high school students sequential arts programming that guides them along creative career pathways. Emphasizing college preparation and career readiness their arts education provides underserved youth industry-based learning experiences and individualized mentorship.</p>
            </div>
          </div></a>
          <a href="https://www.hhcla.org/" target="_blank"><div className="organizations-card">
            <StaticImage
              className="organization-image"
              src="../images/hhcla.png"
              loading="eager"
              width={178} 
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="a group of people organized outside of homeless healthcare los angeles"
            />
            <div>
              <h3><a href="https://www.hhcla.org/" target="_blank">HHCLA</a></h3>
              <p>Homeless Health Care Los Angeles offers harm reduction, needle exchange, housing and outreach programs to help people experiencing homelessness in Los Angeles.</p>
            </div>
          </div></a>
        </div>
        </div>
        <div className="tickets">
        <img className="section-header" src={Tickets} />
        <a href="https://fanimal.com/fanimal-event/here-for-la-fest-364403780249708256" target="_blank" className="button">Get Tickets →</a>
        <div className="tickets-features">
          <ul>
            <li>2 Stages</li>
            <li>1 DJ Room</li>
            <li>Food Trucks</li>
            <li>Beer Garden</li>
          </ul>
          <ul>
            <li>Experiential Games</li>
            <li>Outside Terrace</li>
            <li>Surprise Guests</li>
            <li>2,000 Others</li>
          </ul>
        </div>
        </div>
      </div>
      </div>
      <div className="visualizer">
      <StaticImage
              src="../images/stock.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="a close-up of a drill screwing two pieces of wood together, held together by pairs of hands"
            />
      </div>
      </div>
      {/* <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
