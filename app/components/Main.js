import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='mainContainer'>
        <nav className='navbar navbar-default'>
          <div className='navbar-header'>
            <Link to='/' className='navbar-brand col-sm-offset-2'>
              Home
            </Link>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
})
