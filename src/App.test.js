import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import { findByTestAttr } from "../test/testUtils";


const setup = () => shallow(<App />);

test('App rendes without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "app-component");
  expect(component.length).toBe(1)
});
