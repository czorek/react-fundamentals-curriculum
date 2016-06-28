import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/main.css'
import { Link } from 'react-router'

class Main extends React.Component {
  render() {
    return (
      <div className='fill-height'>
        <nav className='navbar navbar-default' styleName='header'>
          <div className='navbar-header'>
            <Link to='/' className='navbar-brand col-sm-offset-2'>
              Home
            </Link>
          </div>
        </nav>
        <div className='fill-height'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CSSModules(Main, styles)
