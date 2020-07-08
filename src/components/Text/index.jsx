import React from "react";
import { Wrapper } from "./styles";

const Text = () => {
  return (
    <Wrapper>
      <h1>Pin Pad Challenge</h1>
      <br />
      <p>pssst.... the pin is 1111</p>
      <br />
      <p>
        But be careful! After 3 wrong attemps the screen locks for 30 seconds
      </p>
    </Wrapper>
  );
};

export default Text;
