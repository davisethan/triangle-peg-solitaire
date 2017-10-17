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

  componentDidMount = () => {
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
      <div>
        <Navbar {...this.props} />
        <h1 className='page-title'>Rules of Triangle Solo Noble</h1>
        <div id='rules-container'>
          <h3 id='rules-text'>{this.state.rules.text}</h3>
          <br />
          <div id='rules-standards-container'>
            <table id='rules-standards-table'>
              <tr>
                <th className='table-header'>Standards</th>
              </tr>
              {
      this.state.rules.standards.map((standard, index) => {
        return (
          <tr key={index}>
                      <td className='table-el'>{standard}</td>
                    </tr>
        )
      })
      }
            </table>
          </div>
        </div>
      </div>
    )
  }
}
