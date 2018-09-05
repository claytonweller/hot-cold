import React from "react";
import { shallow, mount } from "enzyme";

import { makeGuess, trackInputValue } from "../actions/index";
import { Form } from "./Form";

describe("<Form />", () => {
  it("Renders w/out crashing", () => {
    shallow(<Form />);
  });
  it("Renders the guess form by default", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.hasClass("guess-form")).toEqual(true);
  });
  it("Renders the start over button upon a correct guess", () => {
    const wrapper = shallow(<Form theyGotIt={true} />);
    expect(wrapper.hasClass("start-over-button")).toEqual(true);
  });

  it("Should dispatch trackInput from trackInput", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<Form dispatch={dispatch} />);
    const instance = wrapper.instance();
    const inputValue = 3;
    instance.trackInputValue(inputValue);
    expect(dispatch).toHaveBeenCalledWith(trackInputValue(inputValue));
  });

  ///////////////  HAVING TROUBLE TESTING THIS ONE BECAUSE OF PREVENT DEFAULT //////////
  // it("Should dispatch make guess and trackInputValue from submitGuess", () => {
  //   const dispatch = jest.fn();
  //   const wrapper = shallow(<Form dispatch={dispatch} />);
  //   const instance = wrapper.instance();
  //   const inputValue = 3;

  //   instance.trackInputValue(inputValue);

  //   expect(dispatch).toHaveBeenCalledWith(trackInputValue(inputValue));
  // });

  it("Should fire the startOver callback when the start-over button is clicked", () => {
    const dispatch = jest.fn();
    const wrapper = mount(<Form theyGotIt={true} dispatch={dispatch} />);
    wrapper.find("button").simulate("click");
    expect(dispatch).toHaveBeenCalled();
  });
});
