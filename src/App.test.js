import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";
import hookActions from "./actions/hookActions";

const mockFn = jest.fn();

const setup = (secretWord = "party") => {
  hookActions.getSecretWord = mockFn;
  mockFn.mockClear();
  const reducerMock = jest
    .fn()
    .mockReturnValue([{ secretWord, language: "en" }, jest.fn()]);
  React.useReducer = reducerMock;
  return mount(<App />);
};

test("App rendes without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "app-component");
  expect(component.length).toBe(1);
});

describe("Function getSecretWord", () => {
  test("should gets called on app mount", () => {
    setup();
    expect(mockFn).toHaveBeenCalled();
  });

  test("secret word does not update on app update", () => {
    const wrapper = setup();
    mockFn.mockClear();
    wrapper.setProps();
    expect(mockFn).not.toHaveBeenCalled();
  });
});

describe("secretWord is not null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup("party");
  });
  test("should renders app", () => {
    const component = findByTestAttr(wrapper, "app-component");
    expect(component.exists()).toBe(true);
  });

  test("should not render spinner", () => {
    const component = findByTestAttr(wrapper, "spinner-component");
    expect(component.exists()).toBe(false);
  });
});

describe("secretWord is null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });
  test("should not renders app", () => {
    const component = findByTestAttr(wrapper, "app-component");
    expect(component.exists()).toBe(false);
  });

  test("should render spinner", () => {
    const component = findByTestAttr(wrapper, "spinner-component");
    expect(component.exists()).toBe(true);
  });
});
