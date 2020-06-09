import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import { LanguagePicker } from "./LanguagePicker";

const setLanguageMock = jest.fn();

const setup = () => shallow(<LanguagePicker setLanguage={setLanguageMock} />);

test("should render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "language-picker-component");
  expect(component.exists()).toBe(true);
});

test("should not throw warning with expected props", () => {
  checkProps(LanguagePicker, { setLanguage: jest.fn() });
});

test("should render non-zero language icon", () => {
  const wrapper = setup();
  const languageIcon = findByTestAttr(wrapper, "language-icon");
  expect(languageIcon.length).toBeGreaterThan(0);
});

test("should call setLanguage prop upon click ", () => {
  const wrapper = setup();
  const languageIcon = findByTestAttr(wrapper, "language-icon");
  languageIcon.first().simulate("click");
  expect(setLanguageMock).toHaveBeenCalled();
});
