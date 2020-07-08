import React from "react";
import ButtonPanel from "../ButtonPanel/index.jsx";
import "@testing-library/jest-dom/extend-expect";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import renderer from "react-test-renderer";
import { buttonDigits } from "../../lib/utils";

configure({ adapter: new Adapter() });

describe("ButtonPanel Component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<ButtonPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("checks there are 10 digit buttons", () => {
    expect(buttonDigits.length).toBe(10);
  });
});
