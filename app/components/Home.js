import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/home.css'
import GetCityContainer from '../containers/GetCityContainer'

const Home = React.createClass({
  render() {
    return (
      <div styleName='homeBg'>
          <div className="jumbotron text-center col-sm-6 col-sm-offset-3" styleName='transparentBg'>
            <h1>Enter Your Location</h1>
            <GetCityContainer />
          </div>
      </div>
    );
  }
})

export default CSSModules(Home, styles)
