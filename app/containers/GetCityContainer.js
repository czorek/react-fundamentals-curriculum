import React from 'react'
import { PropTypes } from 'react'
import ApiHelper from '../utils/ApiHelper.js'

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

GetCityInput.propTypes = {
  handleUpdate: PropTypes.func.isRequired
}

function GetCitySubmit(props) {
  return (
    <div className="form-group">
      <button
        className='btn btn-lg btn-submit btn-success'
        type="submit"
        onClick={props.handleSubmit}>
          Get Weather
        </button>
    </div>
  )
}

GetCitySubmit.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default React.createClass({
  getInitialState() {
    return {
      text: ''
    }
  },

  handleOnUpdateCity(e) {
    this.setState({
      text: e.target.value
    })
  },

  handleOnSubmitCity(e) {
    e.preventDefault();
    var weather = ApiHelper.getWeatherInfo(e.target.value)
    console.log(weather)
  },

  render() {
    return (
      <form>
        <GetCityInput handleUpdate={this.handleOnUpdateCity} />
        <GetCitySubmit handleSubmit={this.handleOnSubmitCity} />
      </form>
    );
  }
})
