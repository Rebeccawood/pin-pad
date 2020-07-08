import React from "react";
import PinPad from "../PinPad/index.jsx";
import "@testing-library/jest-dom/extend-expect";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("PinPad Component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<PinPad />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
