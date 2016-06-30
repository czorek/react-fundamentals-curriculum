import React from 'react'
import { PropTypes } from 'react'
import helper from '../utils/ApiHelper.js'

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

GetCityInput.PropTypes = {
  handleUpdate: PropTypes.func.isRequired
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

GetCitySubmit.propTypes = {
  city: PropTypes.string.isRequired
}

export default React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      city: ''
    }
  },

  handleOnUpdateCity(e) {
    this.setState({
      city: e.target.value
    })
  },

  handleOnSubmitCity(e) {
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.city)
  },

  render() {
    return (
      <form onSubmit={this.handleOnSubmitCity} >
        <GetCityInput handleUpdate={this.handleOnUpdateCity} />
        <GetCitySubmit city={this.state.city} />
      </form>
    );
  }
})
