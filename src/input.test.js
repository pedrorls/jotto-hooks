import React from "react"
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import { Input } from "./Input";

const setup = (props) => shallow(<Input {...props} />);


describe('Input component', () => {
  test('should renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "input-component");
    expect(component.length).toBe(1);
  });
});