import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='text-center'>
          <h1 className='mt-3'>Welcome to Triangle Solo Noble</h1>
          <div className='mt-3'>
            <Link to='/play'>
              <button className='btn btn-lg link-button' type='button'>
                Play
              </button>
            </Link>
          </div>
          <div className='mt-3'>
            <Link to='/rules'>
              <button className='btn btn-lg link-button' type='button'>
                Rules
              </button>
            </Link>
          </div>
          <div className='mt-3'>
            <Link to='/history'>
              <button className='btn btn-lg link-button' type='button'>
                History
              </button>
            </Link>
          </div>
          <div className='mt-3'>
            <Link to='/solutions'>
              <button className='btn btn-lg link-button' type='button'>
                Solutions
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
