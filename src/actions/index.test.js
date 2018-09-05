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
    const inputValue = "3";
    const action = trackInputValue(inputValue);
    expect(action.type).toEqual(TRACK_INPUT_VALUE);
    expect(action.inputValue).toEqual(inputValue);
  });
});

describe("makeGuess", () => {
  it("Should return the action", () => {
    const currentGuess = "3";
    const action = makeGuess(currentGuess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.currentGuess).toEqual(currentGuess);
  });
});

describe("theyGotIt", () => {
  it("Should return the action", () => {
    const boolean = true;
    const action = theyGotIt(boolean);
    expect(action.type).toEqual(THEY_GOT_IT);
    expect(action.theyGotIt).toEqual(boolean);
  });
});

describe("startOver", () => {
  it("SHould return the action", () => {
    const action = startOver();
    expect(action.type).toEqual(START_OVER);
  });
});
