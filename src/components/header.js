import * as React from "react"
import moment from "moment"
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import PropTypes from "prop-types"
import { Link } from "gatsby"



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

const Header = ({ siteTitle }) => (
  <header>
    <div>{moment().format("ddd MMM D")}</div>
    <div>{moment().format("HH:mm A")}</div>
    <div>{moment("2022-12-04").diff(moment(), 'days') == 0 ? `TODAY` : `${moment("2022-12-04").diff(moment(), 'days')} DAYS UNTIL HERE FOR LA`}</div>
    <div><Weather /></div>
    <div>Los Angeles, CA</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
