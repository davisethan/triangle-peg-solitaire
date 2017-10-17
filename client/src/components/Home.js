import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div id='home'>
        <h1 className='page-title'>Welcome to Triangle Solo Noble</h1>
        <Link to='/play'>
          <button className='link-button' type='button'>
            Play
          </button>
        </Link>
        <br />
        <br />
        <Link to='/rules'>
          <button className='link-button' type='button'>
            Rules
          </button>
        </Link>
        <br />
        <br />
        <Link to='/solutions'>
          <button className='link-button' type='button'>
            Solutions
          </button>
        </Link>
        <br />
        <br />
        <Link to='/history'>
          <button className='link-button' type='button'>
            History
          </button>
        </Link>
      </div>
    )
  }
}
