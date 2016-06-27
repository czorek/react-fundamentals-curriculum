import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/home.css'

console.log(styles)

class Home extends React.Component {
  render() {
    return (
      <div className='homeContainer' styleName='homeBg'>
        <div className='col-sm-12 text-center'>
          <div className="jumbotron col-sm-6 col-sm-offset-3" styleName='transparentBg'>
            <h1>Enter Your Location</h1>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder='Location...' />
              </div>
              <div className="form-group">
                <button className='btn btn-lg btn-submit btn-success' type="submit">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Home, styles)
