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
    helper.getWeather(city).then(function(data) {console.log(data)})
  },

  render() {
    return this.state.isLoading === true ?
      <div>Loading</div> : <Forecast isLoading={this.state.isLoading} />
  }
})
