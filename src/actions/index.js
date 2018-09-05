export const TRACK_INPUT_VALUE = "TRACK_INPUT_VALUE";
export const trackInputValue = value => ({
  type: TRACK_INPUT_VALUE,
  inputValue: value
});

export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = value => ({
  type: MAKE_GUESS,
  currentGuess: value
});

export const THEY_GOT_IT = "THEY_GOT_IT";
export const theyGotIt = boolean => ({
  type: THEY_GOT_IT,
  theyGotIt: boolean
});

export const START_OVER = "START_OVER";
export const startOver = () => ({
  type: START_OVER
});
