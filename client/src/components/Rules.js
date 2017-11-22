import React from 'react'

import Navbar from './Navbar'
import client from '../client'

export default class Rules extends React.Component {
  state = {
    rules: {
      text: '',
      standards: []
    }
  }

  componentDidMount() {
    this.getRules()
  }

  getRules = () => {
    client.fetchRules()
      .then((rules) => {
        this.setState({
          rules: rules
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
          <h1 className='my-3'>Rules of Triangle Solo Noble</h1>
          <div className='mb-3 content-container'>
            <h3 className='m-3'>{this.state.rules.text}</h3>
            <div className='mx-auto px-3 mb-3 content-container rules-standards'>
              <p className='font-weight-bold pt-3'>Standards</p>
              {
      this.state.rules.standards.map((standard, index) => (
        <p key={index}>{standard}</p>
      ))
      }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
