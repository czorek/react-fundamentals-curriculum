import React from 'react'
import { PropTypes } from 'react'

function Forecast(props) {
  return props.isLoading === true ?
    <div>Loading</div> : <div>Loaded</div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Forecast;

