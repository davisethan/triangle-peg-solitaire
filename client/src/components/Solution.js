import React from 'react'

export default class Solution extends React.Component {
  render() {
    const solution = this.props.solution

    return (
      <svg width='270' height='2520'>
          {
      solution.map((gameStates, i) => {
        return gameStates.map((gameState, j) => {
          switch (j) {
            case 0:
              return <circle key={'' + i + j} cx='135' cy={15 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 1:
              return <circle key={'' + i + j} cx='105' cy={45 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 2:
              return <circle key={'' + i + j}cx='165' cy={45 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 3:
              return <circle key={'' + i + j} cx='75' cy={75 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 4:
              return <circle key={'' + i + j} cx='135' cy={75 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 5:
              return <circle key={'' + i + j} cx='195' cy={75 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 6:
              return <circle key={'' + i + j} cx='45' cy={105 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 7:
              return <circle key={'' + i + j} cx='105' cy={105 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 8:
              return <circle key={'' + i + j} cx='165' cy={105 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 9:
              return <circle key={'' + i + j} cx='225' cy={105 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 10:
              return <circle key={'' + i + j} cx='15' cy={135 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 11:
              return <circle key={'' + i + j} cx='75' cy={135 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 12:
              return <circle key={'' + i + j} cx='135' cy={135 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 13:
              return <circle key={'' + i + j} cx='195' cy={135 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            case 14:
              return <circle key={'' + i + j} cx='255' cy={135 + (180 * i)} r='15' fill={gameState ? 'blue' : 'green'} />
            default:
              break
          }
        })
      })
      }
        </svg>
    )
  }
}
