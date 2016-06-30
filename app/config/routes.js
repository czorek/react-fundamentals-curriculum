import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import ForecastContainer from '../containers/ForecastContainer'

const routes = (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    <Route path='forecast/:city' component={ForecastContainer} />
  </Route>
)

export default routes;
