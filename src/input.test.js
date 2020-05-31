import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import { Input } from "./Input";

const setup = (props) => shallow(<Input {...props} />);

describe("Input component", () => {
  test("should renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "input-component");
    expect(component.length).toBe(1);
  });

  test("should not throw warning with expected props", () => {
    checkProps(Input, { secretWord: "party" });
  });

  describe("with state controlled", () => {
    let mockFn = jest.fn();
    let wrapper;

    beforeEach(() => {
      mockFn.mockClear();
      React.useState = jest.fn(() => ["", mockFn]);
      wrapper = setup();
    });

    test("should update state with value of input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      const mockEvent = { target: { value: "train" } };
      inputBox.simulate("change", mockEvent);
      expect(mockFn).toHaveBeenCalledWith("train");
    });

    test("should clear current guess state after submit", () => {
      const submitBtn = findByTestAttr(wrapper, "submit-button");
      submitBtn.simulate("click", { preventDefault() {} });
      expect(mockFn).toHaveBeenCalledWith("");
    });
  });
});
