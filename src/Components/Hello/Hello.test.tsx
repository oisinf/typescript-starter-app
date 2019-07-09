import * as React from "react";
import * as enzyme from "enzyme";
import { ComponentHello } from "./Hello";

describe("Render correctly given correct inputs and throw error given incorrect inputs", () => {
  test("renders correct input when no enthusiasm level given", () => {
    const hello = enzyme.shallow(<ComponentHello name="Test Name" />);
    expect(hello.find(`[data-test='greeting-div']`).text()).toEqual(
      "Hello Test Name!"
    );
  });

  test("Renders the correct text with an explicting enthusiasm of 1", () => {
    const hello = enzyme.shallow(
      <ComponentHello name="Test Name" enthusiasmLevel={1} />
    );
    expect(hello.find(`[data-test="greeting-div"]`).text()).toEqual(
      "Hello Test Name!"
    );
  });

  test("Throws when enthusiasm is at 0 ", () => {
    expect(() => {
      enzyme.shallow(<ComponentHello name="Test Name" enthusiasmLevel={0} />);
    }).toThrow();
  });
});
