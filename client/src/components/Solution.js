import React from 'react'

export default class Solution extends React.Component {
  render() {
    const solution = this.props.solution
    const r = 14
    const padding = 16
    const space = 16
    const width = 284
    const height = 2200

    return (
      <svg width={width} height={height}>
        {
      solution.map((gameStates, i) => {
        return gameStates.map((gameState, j) => {
          switch (j) {
            case 0:
              return <circle key={'' + i + j} cx={9 * r + padding} cy={r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 1:
              return <circle key={'' + i + j} cx={7 * r + padding} cy={3 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 2:
              return <circle key={'' + i + j} cx={11 * r + padding} cy={3 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 3:
              return <circle key={'' + i + j} cx={5 * r + padding} cy={5 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 4:
              return <circle key={'' + i + j} cx={9 * r + padding} cy={5 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 5:
              return <circle key={'' + i + j} cx={13 * r + padding} cy={5 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 6:
              return <circle key={'' + i + j} cx={3 * r + padding} cy={7 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 7:
              return <circle key={'' + i + j} cx={7 * r + padding} cy={7 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 8:
              return <circle key={'' + i + j} cx={11 * r + padding} cy={7 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 9:
              return <circle key={'' + i + j} cx={15 * r + padding} cy={7 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 10:
              return <circle key={'' + i + j} cx={r + padding} cy={9 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 11:
              return <circle key={'' + i + j} cx={5 * r + padding} cy={9 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 12:
              return <circle key={'' + i + j} cx={9 * r + padding} cy={9 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 13:
              return <circle key={'' + i + j} cx={13 * r + padding} cy={9 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            case 14:
              return <circle key={'' + i + j} cx={17 * r + padding} cy={9 * r + padding + i * (10 * r + space)} r={r} fill={gameState ? 'blue' : 'green'} />
            default:
              return
          }
        })
      })
      }
      </svg>
    )
  }
}
