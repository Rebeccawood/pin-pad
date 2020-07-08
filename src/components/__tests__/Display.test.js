import React from "react";
import Display from "../Display/index.jsx";
import "@testing-library/jest-dom";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import renderer from "react-test-renderer";
import { hideNumbers, checkPin, showCorrectMessage } from "../../lib/utils";

configure({ adapter: new Adapter() });

describe("Display Component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("hides all numbers except last", () => {
    expect(hideNumbers([1, 2, 3, 4])).toBe("***4");
    expect(hideNumbers([1, 2, 3])).toBe("**3");
    expect(hideNumbers([1, 2])).toBe("*2");
    expect(hideNumbers([1])).toBe("1");
  });
  it("checks pin and returns true if match", () => {
    expect(checkPin([1, 2, 3, 4], [1, 2, 3, 4])).toBeTruthy();
  });
  it("checks pin and returns false if not a match", () => {
    expect(checkPin([4, 3, 2, 1], [1, 2, 3, 4])).toBeFalsy();
  });
  it("returns OK! if pin matches", () => {
    expect(showCorrectMessage(true)).toBe("OK!");
  });
  it("returns ERROR if pin does not match", () => {
    expect(showCorrectMessage(false)).toBe("ERROR");
  });
});
