import React from "react"
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import { Input } from "./Input";

const setup = (props) => shallow(<Input {...props} />);


describe('Input component', () => {
  test('should renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "input-component");
    expect(component.length).toBe(1);
  });

  test('should not throw warning with expected props', () => {
    checkProps(Input, { secretWord: "party"})
  })
  
});