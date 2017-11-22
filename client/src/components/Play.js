import React from 'react'

import Navbar from './Navbar'
import Board from './Board'

export default class Play extends React.Component {
  state = {
    homeMarbleIdx: -1,
    remoteMarbleIdx: -1,
    marbles: [
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      }
    ]
  }

  onMarbleClick = (event) => {
    const marbleIdx = Number(event.target.getAttribute('index'))
    let marbles

    switch (this.state.marbles[marbleIdx].stroke) {
      case 'blue':
        const newGame = this.state.marbles.every((marble) => {
          return marble.stroke === 'blue'
        })

        if (newGame) {
          marbles = this.state.marbles.map((marble, index) => {
            if (marbleIdx === index) {
              return {
                fill: 'green',
                stroke: 'green'
              }
            } else {
              return marble
            }
          })
        } else {
          this.setState({
            remoteMarbleIdx: marbleIdx
          })

          marbles = this.state.marbles.map((marble, index) => {
            if (marbleIdx === index) {
              return {
                fill: 'blue',
                stroke: 'gold'
              }
            } else if (marble.stroke === 'gold') {
              return {
                fill: 'blue',
                stroke: 'blue'
              }
            } else {
              return marble
            }
          })
        }

        this.setState({
          marbles: marbles
        })

        return
      case 'gold':
        marbles = this.state.marbles.map((marble, index) => {
          if (marbleIdx === index) {
            return {
              fill: 'blue',
              stroke: 'blue'
            }
          } else {
            return marble
          }
        })

        this.setState({
          remoteMarbleIdx: -1,
          marbles: marbles
        })

        return
      case 'green':
        if (this.state.remoteMarbleIdx !== -1) {
          this.setState({
            homeMarbleIdx: marbleIdx
          }, () => {
            if (this.isLegalJump()) {
              const middleMarbleIdx = this.middleMarble()

              marbles = this.state.marbles.map((marble, index) => {
                if (this.state.homeMarbleIdx === index) {
                  return {
                    fill: 'blue',
                    stroke: 'blue'
                  }
                } else if (this.state.remoteMarbleIdx === index || middleMarbleIdx === index) {
                  return {
                    fill: 'green',
                    stroke: 'green'
                  }
                } else {
                  return marble
                }
              })
            } else {
              marbles = this.state.marbles.map((marble, index) => {
                if (this.state.remoteMarbleIdx === index) {
                  return {
                    fill: 'blue',
                    stroke: 'blue'
                  }
                } else {
                  return marble
                }
              })
            }

            this.setState({
              homeMarbleIdx: -1,
              remoteMarbleIdx: -1,
              marbles: marbles
            })
          })
        } else {
          marbles = this.state.marbles

          this.setState({
            marbles: marbles
          })
        }

        return
      default:
        return
    }
  }

  onResetClick = () => {
    const marbles = [
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      },
      {
        fill: 'blue',
        stroke: 'blue'
      }
    ]

    this.setState({
      marbles: marbles
    })
  }

  isLegalJump = () => {
    const legalJumps = [
      [3, 5],
      [6, 8],
      [7, 9],
      [0, 5, 10, 12],
      [11, 13],
      [0, 3, 12, 14],
      [1, 8],
      [2, 9],
      [1, 6],
      [2, 7],
      [3, 12],
      [4, 13],
      [3, 5, 10, 14],
      [4, 11],
      [5, 12]
    ]
    const middleMarbleFill = this.state.marbles[this.middleMarble()] && this.state.marbles[this.middleMarble()].fill
    const middleMarbleStroke = this.state.marbles[this.middleMarble()] && this.state.marbles[this.middleMarble()].stroke

    if (legalJumps[this.state.homeMarbleIdx].includes(this.state.remoteMarbleIdx) && middleMarbleFill === 'blue' && middleMarbleStroke === 'blue') {
      return true
    } else {
      return false
    }
  }

  middleMarble = () => {
    switch (this.state.homeMarbleIdx) {
      case 0:
        switch (this.state.remoteMarbleIdx) {
          case 3:
            return 1
          case 5:
            return 2
          default:
            return
        }
      case 1:
        switch (this.state.remoteMarbleIdx) {
          case 6:
            return 3
          case 8:
            return 4
          default:
            return
        }
      case 2:
        switch (this.state.remoteMarbleIdx) {
          case 7:
            return 4
          case 9:
            return 5
          default:
            return
        }
      case 3:
        switch (this.state.remoteMarbleIdx) {
          case 0:
            return 1
          case 5:
            return 4
          case 10:
            return 6
          case 12:
            return 7
          default:
            return
        }
      case 4:
        switch (this.state.remoteMarbleIdx) {
          case 11:
            return 7
          case 13:
            return 8
          default:
            return
        }
      case 5:
        switch (this.state.remoteMarbleIdx) {
          case 0:
            return 2
          case 3:
            return 4
          case 12:
            return 8
          case 14:
            return 9
          default:
            return
        }
      case 6:
        switch (this.state.remoteMarbleIdx) {
          case 1:
            return 3
          case 8:
            return 7
          default:
            return
        }
      case 7:
        switch (this.state.remoteMarbleIdx) {
          case 2:
            return 4
          case 9:
            return 8
          default:
            return
        }
      case 8:
        switch (this.state.remoteMarbleIdx) {
          case 1:
            return 4
          case 6:
            return 7
          default:
            return
        }
      case 9:
        switch (this.state.remoteMarbleIdx) {
          case 2:
            return 5
          case 7:
            return 8
          default:
            return
        }
      case 10:
        switch (this.state.remoteMarbleIdx) {
          case 3:
            return 6
          case 12:
            return 11
          default:
            return
        }
      case 11:
        switch (this.state.remoteMarbleIdx) {
          case 4:
            return 7
          case 13:
            return 12
          default:
            return
        }
      case 12:
        switch (this.state.remoteMarbleIdx) {
          case 3:
            return 7
          case 5:
            return 8
          case 10:
            return 11
          case 14:
            return 13
          default:
            return
        }
      case 13:
        switch (this.state.remoteMarbleIdx) {
          case 4:
            return 8
          case 11:
            return 12
          default:
            return
        }
      case 14:
        switch (this.state.remoteMarbleIdx) {
          case 5:
            return 9
          case 12:
            return 13
          default:
            return
        }
      default:
        return
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='mt-3'>
          <Navbar onResetClick={this.onResetClick} {...this.props} />
        </div>
        <div className='text-center'>
          <h1 className='my-3'>Play Triangle Solo Noble</h1>
          <div className='mx-auto mb-3 content-container play-container'>
            <Board marbles={this.state.marbles} onMarbleClick={this.onMarbleClick} />
          </div>
        </div>
      </div>
    )
  }
}
