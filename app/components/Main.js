import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/main.css'
import { Link } from 'react-router'

class Main extends React.Component {
  render() {
    return (
      <div className='fill-height'>
        <nav className='navbar navbar-default' styleName='header'>
          <Link to='/' className='navbar-brand' styleName='brand'>
            Home
          </Link>
          <form className='form-inline pull-right'>
            <input type="text" className="form-control" placeholder='Location...' styleName='headerInput' />
            <button className='btn btn-submit btn-success' styleName='headerButton' type="submit">Get Weather</button>
          </form>
        </nav>
        <div className='fill-height'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CSSModules(Main, styles)
