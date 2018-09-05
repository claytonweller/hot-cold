import {
  TRACK_INPUT_VALUE,
  MAKE_GUESS,
  THEY_GOT_IT,
  START_OVER
} from "../actions";

const initialState = {
  currentGuess: 0,
  lastGuess: 0,
  previousGuesses: [],
  inputValue: "",
  theyGotIt: false
};

export const hotColdReducer = (state = initialState, action) => {
  if (action.type === TRACK_INPUT_VALUE) {
    if (action.inputValue) {
      return Object.assign({}, state, {
        inputValue: parseInt(action.inputValue, 10)
      });
    } else {
      return Object.assign({}, state, {
        inputValue: ""
      });
    }
  } else if (action.type === MAKE_GUESS) {
    return Object.assign({}, state, {
      currentGuess: action.currentGuess,
      lastGuess: state.currentGuess,
      previousGuesses: [...state.previousGuesses, action.currentGuess]
    });
  } else if (action.type === THEY_GOT_IT) {
    return Object.assign({}, state, {
      theyGotIt: action.theyGotIt
    });
  } else if (action.type === START_OVER) {
    return Object.assign({}, state, {
      theOneTrueNumber: Math.floor(Math.random() * 100) + 1,
      currentGuess: 0,
      lastGuess: 0,
      previousGuesses: [],
      theyGotIt: false
    });
  }
  return state;
};
