import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import store from "../store";

import Feedback from "./Feedback.js";
import Form from "./Form.js";
import GuessCounter from "./GuessCounter";
import PreviousGuesses from "./PreviousGuesses";

import { theyGotIt } from "../actions/";

export class HotOrCold extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props = {
  //     theOneTrueNumber: Math.floor(Math.random() * 100) + 1,
  //     currentGuess: 0,
  //     lastGuess: 0,
  //     previousGuesses: [],
  //     theyGotIt: false
  //   };
  // }

  // makeGuess(value) {
  //   this.setState({
  //     currentGuess: value,
  //     lastGuess: this.props.currentGuess,
  //     previousGuesses: [...this.props.previousGuesses, value]
  //   });
  // }

  // startOver() {
  //   this.setState({
  //     theOneTrueNumber: Math.floor(Math.random() * 100) + 1,
  //     currentGuess: 0,
  //     lastGuess: 0,
  //     previousGuesses: [],
  //     theyGotIt: false
  //   });
  // }

  componentDidUpdate() {
    if (
      (this.props.currentGuess === this.props.theOneTrueNumber) &
      !this.props.theyGotIt
    ) {
      this.props.dispatch(theyGotIt(true));
    }
  }

  render() {
    return (
      <div>
        <Feedback
          currentGuess={this.props.currentGuess}
          lastGuess={this.props.lastGuess}
          theOneTrueNumber={this.props.theOneTrueNumber}
        />
        <Provider store={store}>
          <Form />
        </Provider>
        <GuessCounter guessCount={this.props.previousGuesses.length} />
        <PreviousGuesses previousGuesses={this.props.previousGuesses} />
      </div>
    );
  }
}

HotOrCold.defaultProps = {
  theOneTrueNumber: Math.floor(Math.random() * 100) + 1,
  currentGuess: 0,
  lastGuess: 0,
  previousGuesses: [],
  theyGotIt: false
};

const mapStateToProps = state => ({
  theOneTrueNumber: state.theOneTrueNumber,
  currentGuess: state.currentGuess,
  lastGuess: state.lastGuess,
  previousGuesses: state.previousGuesses,
  theyGotIt: state.theyGotIt
});

export default connect(mapStateToProps)(HotOrCold);
