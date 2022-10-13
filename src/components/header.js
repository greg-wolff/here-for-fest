import * as React from "react"
import moment from "moment"
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';



const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'e7f307596df41bb86a93f6b56f604889',
    lat: '34.0522',
    lon: '118.2437',
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  });
  return (
    
   <div>{isLoading ? `––°F ––%` : `${data && data.current.temperature.current}°F ${data && data.current.humidity}%`}</div>
  )
}

const Header = ({ siteTitle }) => {
  const breakpoints = useBreakpoint();

  return (
    <header>
      <div>{moment().format("ddd MMM D")}</div>
      {breakpoints.sm ? null : <div>{moment().format("HH:mm A")}</div>}
      <div>{moment("2022-12-04").diff(moment(), 'days') == 0 ? `TODAY` : `${moment("2022-12-04").diff(moment(), 'days')} DAYS UNTIL${breakpoints.sm ? `\n` : ` `}HERE FOR LA`}</div>
      <div><Weather /></div>
      {breakpoints.sm ? null : <div>Los Angeles, CA</div>}
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
