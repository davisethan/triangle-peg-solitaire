import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  render() {
    const pathname = (this.props.location && this.props.location.pathname) || ''
    let links

    switch (pathname) {
      case '/play':
        links = [
          {
            route: '/',
            name: 'Home'
          },
          {
            route: '/rules',
            name: 'Rules'
          },
          {
            route: '/solutions',
            name: 'Solutions'
          },
          {
            route: '/history',
            name: 'History'
          }
        ]
        break
      case '/rules':
        links = [
          {
            route: '/',
            name: 'Home'
          },
          {
            route: '/play',
            name: 'Play'
          },
          {
            route: '/solutions',
            name: 'Solutions'
          },
          {
            route: '/history',
            name: 'History'
          }
        ]
        break
      case '/history':
        links = [
          {
            route: '/',
            name: 'Home'
          },
          {
            route: '/play',
            name: 'Play'
          },
          {
            route: '/rules',
            name: 'Rules'
          },
          {
            route: '/solutions',
            name: 'Solutions'
          }
        ]
        break
      case '/solutions':
        links = [
          {
            route: '/',
            name: 'Home'
          },
          {
            route: '/play',
            name: 'Play'
          },
          {
            route: '/rules',
            name: 'Rules'
          },
          {
            route: '/history',
            name: 'History'
          }
        ]
        break
      default:
        links = [
          {
            route: '/',
            name: 'Home'
          }
        ]
        break
    }

    return (
      <div id='navbar'>
        {
      links.map((link, index) => {
        return (
          <span key={index} className='input-filler'>
                <Link to={link.route}>
                  <button className='link-button' type='button'>
                    {link.name}
                  </button>
                </Link>
              </span>
        )
      })
      }
      {
      pathname === '/play' ?
        <span id='reset-container'>
            <button className='link-button' type='button' onClick={this.props.onResetClick}>
              Reset
            </button>
          </span> :
        null
      }
      </div>
    )
  }
}
