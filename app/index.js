import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from './config/routes'

render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app')
);
