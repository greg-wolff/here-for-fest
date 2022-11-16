import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import moment from "moment"
import ReactWeather, { useOpenWeather } from "react-open-weather"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

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

const Header = ({ siteTitle }) => {
  const breakpoints = useBreakpoint()
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "e7f307596df41bb86a93f6b56f604889",
    lat: "34.0522",
    lon: "118.2437",
    lang: "en",
    unit: "imperial", // values are (metric, standard, imperial)
  })

  return (
    <header>
      {!isLoading && (
        <>
          <OnVisible
            transition={{ duration: 1, delay: 5, ease: [0.16, 1, 0.3, 1] }}
            variants={{
              visible: { opacity: 1, translateY: 0, scaleY: 1 },
              hidden: { opacity: 0, translateY: -7, scaleY: 1.2 },
            }}
          >
            <div>Sat Dec 3</div>
          </OnVisible>
          {breakpoints.sm ? null : (
            <OnVisible
              transition={{ duration: 1, delay: 5, ease: [0.16, 1, 0.3, 1] }}
              variants={{
                visible: { opacity: 1, translateY: 0, scaleY: 1 },
                hidden: { opacity: 0, translateY: -7, scaleY: 1.2 },
              }}
            >
              <div class="tickets-button">
                <a
                  href="https://fanimal.com/fanimal-event/here-for-la-fest-364403780249708256"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Tickets
                </a>
              </div>
            </OnVisible>
          )}
          <OnVisible
            transition={{ duration: 1, delay: 5, ease: [0.16, 1, 0.3, 1] }}
            variants={{
              visible: { opacity: 1, translateY: 0, scaleY: 1 },
              hidden: { opacity: 0, translateY: -7, scaleY: 1.2 },
            }}
          >
            <div className="countdown">
              {moment("2022-12-04").diff(moment(), "days") == 0
                ? `TODAY`
                : `${moment("2022-12-04").diff(moment(), "days")} DAYS UNTIL${
                    breakpoints.sm ? `\n` : ` `
                  }HERE FOR LA`}
            </div>
          </OnVisible>
          <div>
            {breakpoints.sm ? (
              <OnVisible
                transition={{ duration: 1, delay: 5, ease: [0.16, 1, 0.3, 1] }}
                variants={{
                  visible: { opacity: 1, translateY: 0, scaleY: 1 },
                  hidden: { opacity: 0, translateY: -7, scaleY: 1.2 },
                }}
              >
                <div class="tickets-button">
                  <a
                    href="https://fanimal.com/fanimal-event/here-for-la-fest-364403780249708256"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Tickets
                  </a>
                </div>
              </OnVisible>
            ) : (
              <OnVisible
                transition={{ duration: 1, delay: 5, ease: [0.16, 1, 0.3, 1] }}
                variants={{
                  visible: { opacity: 1, translateY: 0, scaleY: 1 },
                  hidden: { opacity: 0, translateY: -7, scaleY: 1.2 },
                }}
              >
                <div>
                  {isLoading
                    ? `––°F ––%`
                    : `${data && data.current.temperature.current}°F ${
                        data && data.current.humidity
                      }%`}
                </div>
              </OnVisible>
            )}
          </div>
          {breakpoints.sm ? null : (
            <OnVisible
              transition={{ duration: 1, delay: 5, ease: [0.16, 1, 0.3, 1] }}
              variants={{
                visible: { opacity: 1, translateY: 0, scaleY: 1 },
                hidden: { opacity: 0, translateY: -7, scaleY: 1.2 },
              }}
            >
              <div>Los Angeles, CA</div>
            </OnVisible>
          )}
        </>
      )}
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
