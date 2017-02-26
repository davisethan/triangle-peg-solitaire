var React = require('react')
var Solution = require('./solution')

module.exports = React.createClass({
  render: function() {
    var solution = this.props.solution

    return (
      <div>
        <h2>Choose from 438984 Triangle Solo Noble solutions</h2>
        <form method='post' action='/solution'>
          <input type='text' name='solution' placeholder='solution' />
          <br />
          <input type='submit' />
        </form>
        {
          solution ? <Solution solution={solution} /> : null
        }
      </div>
    )
  }
})
