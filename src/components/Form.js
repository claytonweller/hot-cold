import React, { Component } from "react";
import { connect } from "react-redux";
import { trackInputValue, makeGuess, startOver } from "../actions/";

export class Form extends Component {
  submitGuess(e) {
    e.preventDefault();
    this.props.dispatch(makeGuess(this.props.inputValue));
    this.props.dispatch(trackInputValue(""));
  }

  trackInputValue(value) {
    this.props.dispatch(trackInputValue(value));
  }

  render() {
    if (this.props.theyGotIt) {
      return (
        <button
          className="start-over-button"
          onClick={() => this.props.dispatch(startOver())}
        >
          Try again
        </button>
      );
    } else {
      return (
        <form className="guess-form">
          <label>
            Make a guess!
            <br />
            <input
              value={this.props.inputValue}
              onChange={e => this.trackInputValue(e.target.value)}
              type="number"
              min={1}
              max={100}
              placeholder="1 to 100"
            />
          </label>
          <button onClick={e => this.submitGuess(e)}>
            I'm pretty sure this is it...
          </button>
        </form>
      );
    }
  }
}

Form.defaultProps = {
  inputValue: ""
};

const mapStateToProps = state => ({
  inputValue: state.inputValue,
  theyGotIt: state.theyGotIt
});

export default connect(mapStateToProps)(Form);
