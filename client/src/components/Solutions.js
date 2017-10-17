import React from 'react'

import Navbar from './Navbar'
import Solution from './Solution'
import client from '../client'

export default class Solutions extends React.Component {
  state = {
    index: 0,
    solution: []
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    const index = Number(this.state.index)

    if (Number.isNaN(index) || !Number.isInteger(index) || index < 1 || index > 438984) {
      this.setState({
        index: 0,
        solution: []
      })
    } else {
      client.fetchSolution(index)
        .then((solution) => {
          this.setState({
            solution: solution
          })
        })
    }
  }

  onTextChange = (event) => {
    const index = event.target.value

    this.setState({
      index: index
    })
  }

  render() {
    return (
      <div>
        <Navbar {...this.props} />
        <h1 className='page-title'>Solutions of Triangle Solo Noble</h1>
        <h3 className='page-title'>There are 438,984 solutions to this classic board game. Go ahead and choose one to view</h3>
        <form id='solution-form' onSubmit={this.onFormSubmit}>
          <span className='input-filler'>
            <input id='form-text' type='text' value={this.state.index} onChange={this.onTextChange} />
          </span>
          <span className='input-filler'>
            <input id='form-submit' type='submit' />
          </span>
        </form>
        <br />
        <div id='solution-container'>
          {this.state.solution ? <Solution solution={this.state.solution} /> : null}
        </div>
      </div>
    )
  }
}
