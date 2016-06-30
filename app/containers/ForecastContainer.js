import React from 'react'
import Forecast from '../components/Forecast'
import helper from '../utils/ApiHelper'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      isLoading: true,
      forecast: []
    }
  },

  componentDidMount() {
    var city = this.props.routeParams.city
    helper.getWeather(city)
      .then(function(data) {
        this.setState({
          isLoading: false,
          forecast: data
        })
        console.log(data)
      }.bind(this))
  },

  render() {
    return this.state.isLoading === true ?
      <div>Loading</div> : <div>{this.state.forecast.city.name}</div>
  }
})
