import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className='mainContainer'>
        {this.props.children}
      </div>
    );
  }
})