import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";
import hookActions from "./actions/hookActions";

const mockFn = jest.fn();

const setup = () => {
  hookActions.getSecretWord = mockFn;
  mockFn.mockClear();
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

  test("secret word does not update on app updat", () => {
    const wrapper = setup();
    mockFn.mockClear();
    wrapper.setProps();
    expect(mockFn).not.toHaveBeenCalled();
  });
});
