import {
  TRACK_INPUT_VALUE,
  trackInputValue,
  MAKE_GUESS,
  makeGuess,
  THEY_GOT_IT,
  theyGotIt,
  START_OVER,
  startOver
} from "./index";

describe("trackInputValue", () => {
  it("Should return the action", () => {
    const inputValue = "4";
    const action = trackInputValue(inputValue);
    expect(action.type).toEqual(TRACK_INPUT_VALUE);
    expect(action.inputValue).toEqual(inputValue);
  });
});
