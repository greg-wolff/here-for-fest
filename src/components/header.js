import * as React from "react"
import moment from "moment"
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Header = ({ siteTitle }) => {
  const breakpoints = useBreakpoint();
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'e7f307596df41bb86a93f6b56f604889',
    lat: '34.0522',
    lon: '118.2437',
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  });

  return (
    <header>
      { !isLoading && <>
      <div>Sat Dec 3</div>
      {breakpoints.sm ? null : <div class="tickets-button"><a href="https://fanimal.com/fanimal-event/here-for-la-fest-364403780249708256" target="_blank" rel="noreferrer">Get Tickets</a></div>}
      <div className="countdown">{moment("2022-12-04").diff(moment(), 'days') == 0 ? `TODAY` : `${moment("2022-12-04").diff(moment(), 'days')} DAYS UNTIL${breakpoints.sm ? `\n` : ` `}HERE FOR LA`}</div>
      <div>{breakpoints.sm ? <div class="tickets-button"><a href="https://fanimal.com/fanimal-event/here-for-la-fest-364403780249708256" target="_blank" rel="noreferrer">Get Tickets</a></div> : <div>{isLoading ? `––°F ––%` : `${data && data.current.temperature.current}°F ${data && data.current.humidity}%`}</div>}</div>
      {breakpoints.sm ? null : <div>Los Angeles, CA</div>}</>}
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
