var React = require('react')
var ReactDOM = require('react-dom')
var Solution = require('./solution')

module.exports = React.createClass({
  render: function() {
    var solution = this.props.solution

    return (
      <div>
        <center>
          <h2>Choose from 438984 Triangle Solo Noble solutions</h2>
          <form method='post' action='/solution'>
            <input type='text' name='solution' placeholder='solution' />
            <input type='submit' />
          </form>
          {
            solution ? <Solution solution={solution} /> : null
          }
        </center>
      </div>
    )
  }
})
