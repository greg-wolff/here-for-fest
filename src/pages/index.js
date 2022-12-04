import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { Controller, Scene } from 'react-scrollmagic';

import Mission from "../images/svg/Mission.svg"
import Artists from "../images/svg/Artists.svg"
import Organizations from "../images/svg/Organizations.svg"
import Tickets from "../images/svg/Tickets.svg"
import Partners from "../images/svg/Partners.svg"
import ogimage from "../images/ogimage.png" 
import hereFor from "../images/herefor.gif"
import mapImage from "../images/map.jpeg"
import setsImage from "../images/sets.jpg"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import moment from "moment"


function OnVisible({
  children,
  className,
  onClick,
  transition,
  variants,
  loop,
}) {          
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (loop) controls.start("hidden")
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={transition}
      variants={variants}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

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

const animationParams = {
  "hero-eyebrow": {
    transition: { duration: 1.25, ease: `easeInOut` },
    variants: {
      visible: { opacity: 1, translateY: 0 },
      hidden: { opacity: 0, translateY: 15 },
    },
  },
  h1: [
    {
      transition: { duration: 6, delay: 1.25, ease: [0.3, 1, 0.3, 1] },
      variants: {
        visible: { opacity: 1, translateY: 0, scale: 1 },
        hidden: { opacity: 0, translateY: 15, scale: 0.97 },
      },
    },
    {
      transition: { duration: 4.25, delay: 0.3, ease: `easeInOut` },
      variants: {
        visible: { rotate: 0 },
        hidden: { rotate: -2 },
      },
    },
  ],
  "hero-caption-1": {
    transition: { duration: 2, delay: 2.5, ease: [0.16, 1, 0.3, 1] },
    variants: {
      visible: { opacity: 1, translateY: 0 },
      hidden: { opacity: 0, translateY: 15 },
    },
  },
  "hero-caption-2": {
    transition: { duration: 2, delay: 3, ease: [0.16, 1, 0.3, 1] },
    variants: {
      visible: { opacity: 1, translateY: 0 },
      hidden: { opacity: 0, translateY: 15 },
    },
  },
  "hero-image-0": {
    transition: { duration: 2, delay: 2.3, ease: [0.16, 1, 0.3, 1] },
    variants: {
      visible: { opacity: 1, translateX: 0 },
      hidden: { opacity: 0, translateX: -90 },
    },
  },
  "hero-image-1": {
    transition: { duration: 2, delay: 2.8, ease: [0.16, 1, 0.3, 1] },
    variants: {
      visible: { opacity: 1, translateX: 0 },
      hidden: { opacity: 0, translateX: 50 },
    },
  },
  "scroll-arrow": {
    transition: { duration: 1, delay: 5, ease: [0.16, 1, 0.3, 1] },
    variants: {
      visible: { opacity: 1, translateY: 0, scaleY: 1.2 },
      hidden: { opacity: 0, translateY: -7, scaleY: 1.2 },
    },
  },
  "mission-h2": {
    transition: { duration: 1, ease: `easeInOut` },
    variants: {
      visible: { opacity: 1, translateY: 0 },
      hidden: { opacity: 0, translateY: 15 },
    },
  },
  "mission-image": {
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    variants: {
      visible: {},
      hidden: {},
    },
  },
}

const FAQs = [
  {title: "Where is the event taking place?", content: `<a style="text-decoration:underline;" href="https://goo.gl/maps/AxU3g4cuRKCS4WGV8" target="_blank">L.A. River Studios<br>2800 Division St, Los Angeles, CA 90065</a>`},
  {title: "What time is Here For LA Fest?", content: "Doors are open starting at 4pm. Final allowable entry is at 10. Event end time is 11 PM."},
  {title: "Where should I park?", content: "Rideshare services such as Uber and Lyft are encouraged. Street parking is extremely limited. Paid parking is available at the neighboring school parking lot (Sotomayor Arts and Sciences Magnet: 2050 N San Fernando Road). Advance parking is $15 and can be purchased as an add-on to your ticket. Onsite parking is $20 payable by cash or credit card."},
  {title: "Can I bring a bag?", content: "Small purses and bags under 4.5” x 5.5” are allowed and do not need to be clear. Bags that exceed this size must be clear plastic, clear vinyl, or clear PVC and must not exceed 12” x 12.” IMPORTANT: You will not be permitted to enter with bags over 12”x12” and no bag check will be available."},
  {title: "What ages are allowed to attend this event?", content: "Here For LA is all ages. There will be designated 21+ areas for adult beverages."},
  {title: "Where can I purchase a ticket?", content: `Tickets can be purchased <a style="text-decoration:underline;" href="https://fanimal.com/fanimal-event/here-for-la-fest-364403780249708256" target="_blank">HERE</a>. Pricing is as follows: <ul><li>General Admission: $30</li><li>VIP: $80, which includes VIP lounge access, preferred viewing areas, a goodie bag, and a free drink voucher</li><li>Parking: $15 in Advance (Note: Day-Of Rate is $20)</li></ul>`},
  {title: "Where is your money going?", content: `<ul><li>25% – An equal split donation to our three partner organizations</li><li>25% – Artists and Musicians</li><li>25% – Venue & Event Production</li><li>25% – Future Events and Community Activations</li></ul>`},

]

const Accordion = ({ title, content, open }) => {
  const [isOpen, setIsOpen] = useState(open);
  const handleClick = () => setIsOpen(!isOpen)
  return (
    <div className={`faq-section ${isOpen ? `open` : `closed`}`} onClick={handleClick}>
      <h3>{title}</h3>
      {isOpen && <p dangerouslySetInnerHTML={{__html: content}}/>}
    </div>
  );
}
const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollRef = useRef(null)
  let URLParams;
  let released = true;
  // if(typeof window != "undefined") {
  //   URLParams = new URLSearchParams(window.location.search);
  //   released= URLParams.get("password") == `wayhfla`;
  // }
  const breakpoints = useBreakpoint()
  const handleOnClick = () => setIsOpen(!isOpen)
  const executeScroll = () => {
    if (typeof window != "undefined") {window.scrollTo({
      behavior: "smooth",
      top: scrollRef.current.offsetTop - 100,
    })}
  }

  return (
    <Layout>
      {!released ? (
        <div className="fullpage">
          <h3>Come back soon ;)</h3>
          <a
            href="https://fanimal.com/fanimal-event/here-for-la-fest-364403780249708256"
            target="_blank"
            rel="noreferrer"
            className="from-above"
          >
            Get Tickets
          </a>
        </div>
      ) : (
        <>
          <Seo title="Here for LA" image={ogimage} />
          <div className="view">
            <div>
            {moment("2022-12-04").diff(moment(), "days") == 0 && <img src={setsImage} className="sets"/>}
            {moment("2022-12-04").diff(moment(), "days") == 0 && <img src={mapImage} className="map"/>}
              {moment("2022-12-04").diff(moment(), "days") !== 0 && 
              <div className="hero">
                <OnVisible
                  transition={animationParams["hero-image-0"].transition}
                  variants={animationParams["hero-image-0"].variants}
                  className="send-to-back"
                >
                  <StaticImage
                    className="hero-image-0"
                    src="../images/hero-0.png"
                    loading="eager"
                    width={628}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="view of the sky from over a wall"
                  />
                </OnVisible>
                <OnVisible
                  transition={animationParams["hero-image-1"].transition}
                  variants={animationParams["hero-image-1"].variants}
                  className="send-to-back"
                >
                  <StaticImage
                    className="hero-image-1"
                    src="../images/hero-1.png"
                    loading="eager"
                    width={351}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="close-up of a myriad of tree roots"
                  />
                </OnVisible>
                {/* <div className="hero-eyebrow">We create spaces around the causes you are here for</div> */}
                <OnVisible
                  transition={animationParams["hero-eyebrow"].transition}
                  variants={animationParams["hero-eyebrow"].variants}
                >
                  <div className="hero-eyebrow">
                    We started this project with one question
                  </div>
                </OnVisible>
                <OnVisible
                  transition={animationParams.h1[0].transition}
                  variants={animationParams.h1[0].variants}
                >
                  <OnVisible
                    transition={animationParams.h1[1].transition}
                    variants={animationParams.h1[1].variants}
                  >
                    <h1>What are you here for?</h1>
                  </OnVisible>
                </OnVisible>
                <OnVisible
                  transition={animationParams["hero-caption-1"].transition}
                  variants={animationParams["hero-caption-2"].variants}
                  className="hero-caption send-to-front"
                >
                  On December 3rd at 4:00 PM we are inviting you to participate
                  in being HERE for Los Angeles.
                </OnVisible>
                <OnVisible
                  transition={animationParams["hero-caption-2"].transition}
                  variants={animationParams["hero-caption-2"].variants}
                  className="hero-caption send-to-front"
                >
                  HERE FOR LA is an experiential charity festival consisting of art, music, games, giveaways, and immersive activities — all with the purpose of supporting local Los Angeles organizations.
                </OnVisible>
              </div>
              }
              <div className="content">
              {moment("2022-12-04").diff(moment(), "days") == 0 && <div className="tickets-profit"/>}
            {moment("2022-12-04").diff(moment(), "days") == 0 && FAQs.map(({title, content}) => <Accordion title={title} content={content} open={true} />)}

                <OnVisible
                  transition={animationParams["scroll-arrow"].transition}
                  variants={animationParams["scroll-arrow"].variants}
                  className="scroll-arrow"
                  onClick={executeScroll}
                >
                  ↓
                </OnVisible>
                <div ref={scrollRef} className="mission">
                  <img
                    className="section-header"
                    src={Mission}
                    alt="The Mission"
                  />
                  <OnVisible
                    transition={animationParams["mission-image"].transition}
                    variants={animationParams["mission-image"].variants}>
                    <StaticImage
                      className="mission-image-0 send-to-back"
                      src="../images/mission-0.png"
                      loading="eager"
                      width={300}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="a dark photo of the city"
                    />
                  </OnVisible>
                  <OnVisible
                    transition={animationParams["mission-h2"].transition}
                    variants={animationParams["mission-h2"].variants}
                    className="bring-to-front"
                  >
                    <h2>
                      The HERE Fest is a global concert series dedicated to
                      creating hyper-local action within different cities around
                      the world.
                    </h2>
                  </OnVisible>
                  <OnVisible
                    transition={animationParams["mission-h2"].transition}
                    variants={animationParams["mission-h2"].variants}
                    className="bring-to-front"
                  >
                    <h2>
                      Each HERE Fest brings together local musicians,
                      businesses, and communities to support local organizations
                      and non-profits.
                    </h2>
                  </OnVisible>
                  <OnVisible
                    transition={animationParams["mission-h2"].transition}
                    variants={animationParams["mission-h2"].variants}
                    className="bring-to-front"
                  >
                    {/* <h2>With case-specific causes at the core, HERE Fest brings together local musicians, businesses, and leaders to support key organizations and nonprofits within a community. </h2> */}
                    {/* <h2>There is no final city for HERE Fest, and each location offers a unique way to create impact around the world. </h2> */}
                    <h2>
                      For our first festival in Los Angeles, we wanted to
                      address both the key issues facing the city as well as
                      highlight local culture that is often overlooked and
                      undervalued.
                    </h2>
                  </OnVisible>
                  {isOpen && (
                    <>
                      <OnVisible
                        transition={animationParams["mission-h2"].transition}
                        variants={animationParams["mission-h2"].variants}
                      >
                        <h2>
                          This December in Elysian Park, we're supporting three
                          important organizations, each aiding the community in
                          a different, meaningful way:
                        </h2>
                      </OnVisible>
                      <OnVisible
                        transition={animationParams["mission-h2"].transition}
                        variants={animationParams["mission-h2"].variants}
                      >
                        <ul>
                          <li>
                            {breakpoints.sm ? (
                              <span className="strong">
                                Housing and Basic Needs
                                <br />
                              </span>
                            ) : (
                              `Housing and Basic Needs —`
                            )}{" "}
                            <a
                              href="https://www.hhcla.org/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Homeless Healthcare LA
                            </a>
                          </li>
                          <li>
                            {breakpoints.sm ? (
                              <span className="strong">
                                Education and The Arts
                                <br />
                              </span>
                            ) : (
                              `Education and The Arts —`
                            )}{" "}
                            <a
                              href="https://www.artworxla.org/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              ArtworxLA
                            </a>
                          </li>
                          <li>
                            {breakpoints.sm ? (
                              <span className="strong">
                                Sustainability and Climate Justice
                                <br />
                              </span>
                            ) : (
                              `Sustainability and Climate Justice —`
                            )}{" "}
                            <a
                              href="https://www.laworks.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              LA Works
                            </a>
                          </li>
                        </ul>
                      </OnVisible>
                      <OnVisible
                        transition={animationParams["mission-h2"].transition}
                        variants={animationParams["mission-h2"].variants}
                      >
                        <h2>
                          As part of our plan to amplify awareness, raise money,
                          and create tangible goals for anyone to get involved,
                          we will be hosting workshop events, panels, interviews
                          and more both in the lead up to the HERE Fest, and
                          during the event itself. We call these "HERE Spaces".
                        </h2>
                      </OnVisible>{" "}
                      <OnVisible
                        transition={animationParams["mission-h2"].transition}
                        variants={animationParams["mission-h2"].variants}
                      >
                        <h2>
                          We're placing a strong emphasis on merging the dynamic
                          cultural influences of Los Angeles, not only to
                          support the organizations, but to support the artists
                          and musicians as well. Our roster includes some of the
                          most engaging and exciting local artists, coming
                          together with the goal of making a music event that
                          benefits communities here in LA.
                        </h2>
                      </OnVisible>
                    </>
                  )}
                  {!isOpen && (
                    <OnVisible
                      transition={animationParams["mission-h2"].transition}
                      variants={animationParams["mission-h2"].variants}
                    >
                      <a
                        className="link-button down-arrow"
                        onClick={() => handleOnClick()}
                      >
                        Read More
                      </a>
                    </OnVisible>
                  )}
                </div>
                <div className="artists">
                  <img
                    className="section-header"
                    src={Artists}
                    alt="The Artists"
                  />
                  <div className="lineup">
                    <div>
                      <div className="lineup-h1">
                        <a
                          href="https://mrkerwinfrost.com/play"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Kerwin Frost
                        </a>
                      </div>
                      <div className="lineup-h1">
                        <a
                          href="https://songwhip.com/ashaimuno"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Asha Imuno
                        </a>
                      </div>
                      <div className="lineup-h1">
                        <a
                          href="https://songwhip.com/the-hellp"
                          target="_blank"
                          rel="noreferrer"
                        >
                          The Hellp
                        </a>
                      </div>
                    </div>
                    <div>
                    <div className="lineup-h2">

                      <a
                          href="https://songwhip.com/claud"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Claud
                        </a>
                        </div>
                        <div className="lineup-h2">
                        <a
                          href="https://songwhip.com/juniorvarsity"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Junior Varsity
                        </a>
                      </div>

                      <div className="lineup-h2">
                        <a
                          href="https://songwhip.com/nitefire"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Nitefire
                        </a>
                      </div>
                      <div className="lineup-h2">
                        <a
                          href="https://songwhip.com/izzyspears"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Izzy Spears
                        </a>
                      </div>
                    </div>
                    <div>
                    <div className="lineup-h3">
                        <a
                          href="https://songwhip.com/djdave"
                          target="_blank"
                          rel="noreferrer"
                        >
                          DJ_Dave
                        </a>
                      </div>
                      <div className="lineup-h3">
                        <a
                          href="https://songwhip.com/santangelo"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Santangelo
                        </a>
                      </div>
                      <div className="lineup-h3">
                        <a
                          href="https://songwhip.com/bonavega"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Bonavega
                        </a>
                      </div>
                      <div className="lineup-h3">
                        <a
                          href="https://songwhip.com/maddy-davis"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Maddy Davis
                        </a>
                      </div>
                      <div className="lineup-h3">Team Alice</div>
                    </div>
                  </div>
                  <div className="lineup-title">
                    Mandate Heaven x Serenity Link Presents
                  </div>
                  <div className="lineup">
                    <div>
                      <div className="lineup-h2">
                        <a
                          href="https://songwhip.com/evilgiane"
                          target="_blank"
                          rel="noreferrer"
                        >
                          EvilGiane
                        </a>
                      </div>
                      <div className="lineup-h2">
                        <a
                          href="https://www.instagram.com/eera_1/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Eera
                        </a>
                      </div>
                      <div className="lineup-h2">
                        <a
                          href="https://www.instagram.com/mapamota.xo/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Mapamota
                        </a>
                      </div>
                      <div className="lineup-h2">
                        <a
                          href="https://www.instagram.com/sstealthangel/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Stealth Angel
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="lineup-h3">
                        <a
                          href="https://www.instagram.com/kynewman/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ky Newman
                        </a>
                      </div>
                      <div className="lineup-h3">
                        <a
                          href="https://www.instagram.com/sevyn0000/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Sevyn
                        </a>
                      </div>
                      <div className="lineup-h3">
                        <a
                          href="https://www.instagram.com/uhoozi/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Hooz
                        </a>
                      </div>
                      <div className="lineup-h3">Spacemaster</div>
                    </div>
                  </div>
                </div>
                <div className="organizations">
                  <img
                    className="section-header"
                    src={Organizations}
                    alt="The Organizations"
                  />
                  <div className="organizations-container">
                    <a
                      href="https://www.laworks.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OnVisible
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: `easeInOut`,
                        }}
                        variants={{
                          visible: { opacity: 1, translateY: 0 },
                          hidden: { opacity: 0, translateY: 5 },
                        }}
                      >
                        <div className="organizations-card">
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
                            <h3>
                              <a
                                href="https://www.laworks.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                L.A. Works
                              </a>
                            </h3>
                            <p>
                              L.A. Works creates and leads programming to
                              address critical issues in Los Angeles by
                              mobilizing targeted volunteer communities: family
                              volunteers, corporate volunteers, general
                              community members, and older adult volunteers.
                            </p>
                          </div>
                        </div>
                      </OnVisible>
                    </a>
                    <a
                      href="https://www.artworxla.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OnVisible
                        transition={{
                          duration: 0.5,
                          delay: 0.3,
                          ease: `easeInOut`,
                        }}
                        variants={{
                          visible: { opacity: 1, translateY: 0 },
                          hidden: { opacity: 0, translateY: 5 },
                        }}
                      >
                        <div className="organizations-card">
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
                            <h3>
                              <a
                                href="https://www.artworxla.org/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                artworxLA
                              </a>
                            </h3>
                            <p>
                              artworxLA has provided over 15,000 at-risk high
                              school students with arts programming that guides
                              them along creative career pathways. Emphasizing
                              college and career readiness, their curriculum
                              provides underserved youth with classes and
                              individualized mentorship.
                            </p>
                          </div>
                        </div>
                      </OnVisible>
                    </a>

                    <a
                      href="https://www.hhcla.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OnVisible
                        transition={{
                          duration: 0.5,
                          delay: 0.6,
                          ease: `easeInOut`,
                        }}
                        variants={{
                          visible: { opacity: 1, translateY: 0 },
                          hidden: { opacity: 0, translateY: 5 },
                        }}
                      >
                        <div className="organizations-card">
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
                            <h3>
                              <a
                                href="https://www.hhcla.org/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                HHCLA
                              </a>
                            </h3>
                            <p>
                              Homeless Health Care Los Angeles offers harm
                              reduction, needle exchange, housing, and outreach
                              programs to help people experiencing homelessness
                              in Los Angeles.
                            </p>
                          </div>
                        </div>
                      </OnVisible>
                    </a>
                  </div>
                </div>
                <div className="tickets">
                  <img
                    className="section-header"
                    src={Tickets}
                    alt="The Tickets"
                  />
                  <a
                    href="https://fanimal.com/fanimal-event/here-for-la-fest-364403780249708256"
                    target="_blank"
                    rel="noreferrer"
                    className="button"
                  >
                    Get Tickets →
                  </a>
                  <div className="tickets-features">
                    <ul>
                    <a href="https://goo.gl/maps/AxU3g4cuRKCS4WGV8" rel="noreferrer" target="_blank"><li>L.A. River Studios</li></a>
                      <li>2 Stages</li>
                      <li>1 DJ Room</li>
                      <li>Outside Terrace</li>
                    </ul>
                    <ul>
                      <li>Food Trucks</li>
                      <li>Experiential Games</li>
                      <li>Surprise Guests</li>
                      <li>1,500 Others</li>
                    </ul>
                  </div>
                  {moment("2022-12-04").diff(moment(), "days") !== 0 && <div className="tickets-profit"/>}
                  {moment("2022-12-04").diff(moment(), "days") !== 0 && FAQs.map(({title, content}) => <Accordion title={title} content={content} open={true} />)}
                  <p className="footersubtitle"><strong>Contact —</strong> For all other inquiries please contact <a href="mailto:info@herefor.earth" style={{textDecoration: 'underline'}}>info@herefor.earth</a></p>
                </div>
              </div>
            </div>
            <div className="visualizer">
              <img src={hereFor} className="herelogo" alt="different stylistic typefaces depicting the word HERE are rapidly flashing over the HERE logo" />

              <StaticImage
                src="../images/stock.png"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="a red collage with a dandelion in it"
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
        </>
      )}
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
