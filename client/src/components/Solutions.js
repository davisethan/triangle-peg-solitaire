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
      <div className='container-fluid'>
        <div className='mt-3'>
          <Navbar {...this.props} />
        </div>
        <div className='text-center'>
          <h1 className='my-3'>Solutions of Triangle Solo Noble</h1>
          <h3 className='mb-3'>There are 438,984 solutions to this classic board game. Go ahead and choose one to view.</h3>
          <form className='form-inline justify-content-center' onSubmit={this.onFormSubmit}>
            <input className='mr-3 mb-3 p-3 content-container solution-input' type='text' value={this.state.index} onChange={this.onTextChange} />
            <input className='bg-success mb-3 p-3 content-container solution-input' type='submit' value='Submit' />
          </form>
          <div className='mb-3 mx-auto content-container solution-container'>
            {this.state.solution ? <Solution solution={this.state.solution} /> : null}
          </div>
        </div>
      </div>
    )
  }
}
