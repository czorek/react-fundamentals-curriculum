import React from 'react'
import { render } from 'react-dom'

var Hello = React.createClass({
  render() {
    return (
      <div>Hello world!</div>
    );
  }
})

render(<Hello />, document.getElementById('app'))
