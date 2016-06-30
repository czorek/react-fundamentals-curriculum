import React from 'react'
import { PropTypes } from 'react'

function GetCityInput(props) {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder='Location...'
        onChange={props.handleUpdate} />
    </div>
  )
}

function GetCitySubmit(props) {
  return (
    <div className="form-group">
      <button
        className='btn btn-lg btn-submit btn-success'
        type="submit" >
          Get Weather
      </button>
    </div>
  )
}

function GetCity(props) {
  return (
    <form onSubmit={props.handleSubmit} >
      <GetCityInput handleUpdate={props.handleUpdate} />
      <GetCitySubmit city={props.city} />
    </form>
  )
}

GetCity.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default GetCity;
