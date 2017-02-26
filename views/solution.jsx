var React = require('react')

module.exports = React.createClass({
  render: function() {
    var solution = JSON.parse(this.props.solution)

    return (
      <div>
        <svg width='270' height='2520'>
          {
            solution.map(function(gameState, i) {
              return gameState.map(function(state, j){
                switch (j) {
                  case 0:
                    return <circle cx='135' cy={15 + (180 * i)} r='15' fill={state ? 'orange' : 'blue'} />
                  case 1:
                    return <circle cx='105' cy={45 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 2:
                    return <circle cx='165' cy={45 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 3:
                    return <circle cx='75' cy={75 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 4:
                    return <circle cx='135' cy={75 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 5:
                    return <circle cx='195' cy={75 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 6:
                    return <circle cx='45' cy={105 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 7:
                    return <circle cx='105' cy={105 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 8:
                    return <circle cx='165' cy={105 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 9:
                    return <circle cx='225' cy={105 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 10:
                    return <circle cx='15' cy={135 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 11:
                    return <circle cx='75' cy={135 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 12:
                    return <circle cx='135' cy={135 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 13:
                    return <circle cx='195' cy={135 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                  case 14:
                    return <circle cx='255' cy={135 + (180 * i)} r='15' fill={state ? 'orange': 'blue'} />
                }
              })
            })
          }
        </svg>
      </div>
    )
  }
})
