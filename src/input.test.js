import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import { Input } from "./Input";
import LanguageContext from "./contexts/LanguageContext";

const setup = ({ secretWord, language }) => {
  language = language || "en";
  secretWord = secretWord || "party";

  return mount(
    <LanguageContext.Provider value={language}>
      <Input secretWord={secretWord} />
    </LanguageContext.Provider>
  );
};

describe("Input component", () => {
  test("should renders without error", () => {
    const wrapper = setup({});
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
      wrapper = setup({});
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

describe("LanguagePicker", () => {
  test("should render submit string in english correctly", () => {
    const wrapper = setup({ language: "en" });
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.text()).toBe("Submit");
  });

  test("should render congrats strings in emoji correctly", () => {
    const wrapper = setup({ language: "emoji" });
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.text()).toBe("🚀");
  });
});
