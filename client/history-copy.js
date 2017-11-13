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
      <div>
        <Navbar {...this.props} />
        <h1 className='page-title'>History of Triangle Solo Noble</h1>
        <div id='history-row'>
          <div id='text-column'>
            {
              this.state.history.text.map((blurb, index) => (
                <p key={index} className='paragraph'>{blurb}</p>
              ))
            }
          </div>
          <div id='filler-column'>
            <p></p>
          </div>
          <div id='photo-column'>
            <img id='photo' src='/tsn/images/first-tsn.jpg' alt='' />
            <p className='paragraph'>{this.state.history.photo}</p>
          </div>
        </div>
      </div>
    )
  }
}
