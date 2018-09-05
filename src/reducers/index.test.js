import { hotColdReducer } from ".";
import { startOver, trackInputValue, makeGuess, theyGotIt } from "../actions";

describe("hotColdReducer", () => {
  // SET UP THE DATA-STATE

  it("Should set the initial state if nothing is passed in", () => {
    const state = hotColdReducer(undefined, { type: "__UNKNOWN" });
    expect(state).toEqual({
      currentGuess: 0,
      lastGuess: 0,
      previousGuesses: [],
      inputValue: "",
      theyGotIt: false,
      // This is randomly generated so we have to reference the current state
      theOneTrueNumber: state.theOneTrueNumber
    });
  });

  it("Should return the current state on an unknown action", () => {
    let currentState = {};
    const state = hotColdReducer(currentState, { type: "__UNKNOWN" });
    expect(state).toBe(currentState);
  });

  describe("trackInputValue", () => {
    it("should update the state with the correct value", () => {
      let state;
      let inputValue = 3;
      state = hotColdReducer(state, trackInputValue(inputValue));
      expect(state).toEqual({
        currentGuess: 0,
        lastGuess: 0,
        previousGuesses: [],
        inputValue: 3,
        theyGotIt: false,
        theOneTrueNumber: state.theOneTrueNumber
      });
    });
  });

  describe("makeGuess", () => {
    it("should update all the guess values", () => {
      let state;
      state = hotColdReducer(state, makeGuess(4));
      state = hotColdReducer(state, makeGuess(99));
      expect(state).toEqual({
        currentGuess: 99,
        lastGuess: 4,
        previousGuesses: [4, 99],
        inputValue: "",
        theyGotIt: false,
        theOneTrueNumber: state.theOneTrueNumber
      });
    });
  });

  describe("theyGotIt", () => {
    it("should update the state to the correct value", () => {
      let state;
      state = hotColdReducer(state, theyGotIt(true));
      expect(state).toEqual({
        currentGuess: 0,
        lastGuess: 0,
        previousGuesses: [],
        inputValue: "",
        theyGotIt: true,
        theOneTrueNumber: state.theOneTrueNumber
      });
    });
  });

  describe("startOver", () => {
    it("should reset the state to initial values", () => {
      let state;
      state = hotColdReducer(state, startOver());
      expect(state).toEqual({
        currentGuess: 0,
        lastGuess: 0,
        previousGuesses: [],
        inputValue: "",
        theyGotIt: false,
        theOneTrueNumber: state.theOneTrueNumber
      });
    });
  });
});
