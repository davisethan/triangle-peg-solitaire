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
            route: '/history',
            name: 'History'
          },
          {
            route: '/solutions',
            name: 'Solutions'
          },
          {
            route: '/play',
            name: 'Reset'
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
            route: '/history',
            name: 'History'
          },
          {
            route: '/solutions',
            name: 'Solutions'
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
      <div>
        <div className='dropdown navbar-dropdown'>
          <button className='btn btn-lg dropdown-toggle link-button' type='button' data-toggle='dropdown'>
            Menu
          </button>
          <div className='dropdown-menu text-center navbar-dropdown-menu'>
            {
              links.map((link, index, array) => {
                return (
                  <Link key={index} to={link.route}>
                    {
                      index < array.length - 1 ?
                        <button className='btn btn-lg mb-2 link-button' type='button'>
                          {link.name}
                        </button> :
                        pathname !== '/play' ?
                          <button className='btn btn-lg link-button' type='button'>
                            {link.name}
                          </button> :
                          <button className='btn btn-lg link-button' type='button' onClick={this.props.onResetClick}>
                            {link.name}
                          </button>
                    }
                  </Link>
                )
              })
            }
          </div>
        </div>
        {
          links.map((link, index, array) => {
            return (
              <span key={index} className='text-left navbar-inline'>
                <Link to={link.route}>
                  {
                    index < array.length - 1 ?
                      <button className='btn btn-lg mr-3 link-button' type='button'>
                        {link.name}
                      </button> :
                      pathname !== '/play' ?
                        <button className='btn btn-lg link-button' type='button'>
                          {link.name}
                        </button> :
                        <button className='btn btn-lg link-button' type='button' onClick={this.props.onResetClick}>
                          {link.name}
                        </button>
                  }
                </Link>
              </span>
            )
          })
        }
      </div>
    )
  }
}
