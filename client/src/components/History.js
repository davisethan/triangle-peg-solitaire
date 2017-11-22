import React from 'react'

import Navbar from './Navbar'
import client from '../client'

export default class History extends React.Component {
  state = {
    history: {
      text: [],
      photo: ''
    }
  }

  componentDidMount() {
    this.getHistory()
  }

  getHistory = () => {
    client.fetchHistory()
      .then((history) => {
        this.setState({
          history: history
        })
      })
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='mt-3'>
          <Navbar {...this.props} />
        </div>
        <div className='text-center'>
          <h1 className='my-3'>History of Triangle Solo Noble</h1>
          <div className='row'>
            <div className='col-sm-6 offset-sm-1 align-self-start content-container history-container'>
              {
      this.state.history.text.map((blurb, index) => {
        return (
        index === 0 ?
          <p key={index} className='mt-3'>{blurb}</p> :
          <p key={index}>{blurb}</p>
        )
      })
      }
            </div>
            <div className='col-sm-3 offset-sm-1 align-self-start content-container history-container'>
              <img className='img-fluid rounded border border-dark my-3' src='/images/first-tsn.jpg' alt='' />
              <p>{this.state.history.photo}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
