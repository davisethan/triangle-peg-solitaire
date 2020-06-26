import React from 'react';
import { Link } from 'react-router-dom';

class Solutions extends React.Component {
  constructor(props) {
    super(props);

    this.SOLUTIONS_COUNT = 438984;
    this.state = {
      formSolution: 0,
      iframeSolution: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({formSolution: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const formSolution = this.state.formSolution;
    // Is string integer
    if (isNaN(formSolution) || parseInt(formSolution) !== parseFloat(formSolution)) {
      return
    }
    // Is in range
    if (parseInt(formSolution) < 1 || parseInt(formSolution) > this.SOLUTIONS_COUNT) {
      return
    }

    this.setState({
      iframeSolution: formSolution - 1
    });
  }

  render() {
    const title = 'Triangle Peg Solitaire';
    const link = 'Home';
    const description = `Pick one of ${this.SOLUTIONS_COUNT} solutions to view`;

    return (
      <div className="container">
        <div className="m-3">
          <div className="d-flex justify-content-center">
            <h1 className="text-light">{title}</h1>
          </div>
          <div className="d-flex justify-content-center p-3">
            <Link to="/">
              <button type="button" className="btn btn-success">{link}</button>
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <p className="text-light">{description}</p>
          </div>
          <div className="d-flex justify-content-center pb-3">
            <form>
              <input type="text" value={this.state.solution} onChange={this.handleChange} className="rounded mx-3" />
              <button type="submit" onClick={this.handleSubmit} className="btn btn-success rounded">Submit</button>
            </form>
          </div>
          <div className="d-flex justify-content-center">
            <iframe
              title={title}
              src={`https://triangle-peg-solitaire.s3-us-west-2.amazonaws.com/data/${this.state.iframeSolution}.txt`}
              style={{
                backgroundColor: "white",
                width: "9em",
                height: "20em"
              }}
              className="rounded pl-4"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Solutions;
