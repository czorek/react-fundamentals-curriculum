import React from 'react'
import { PropTypes } from 'react'
import helper from '../utils/ApiHelper.js'
import GetCity from '../components/GetCity'

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
      <GetCity
        handleSubmit={this.handleOnSubmitCity}
        handleUpdate={this.handleOnUpdateCity}
        city={this.state.city} />
    );
  }
})
