import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/home.css'

class Home extends React.Component {
  render() {
    return (
      <div styleName='homeBg'>
          <div className="jumbotron text-center col-sm-6 col-sm-offset-3" styleName='transparentBg'>
            <h1>Enter Your Location</h1>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder='Location...' />
              </div>
              <div className="form-group">
                <button className='btn btn-lg btn-submit btn-success' type="submit">Get Weather</button>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default CSSModules(Home, styles)
