import React, { useState } from "react";
import { Background } from "./styles.js";
import Display from "../Display";
import ButtonPanel from "../ButtonPanel";

const PinPad = () => {
  const [displayNumber, setDisplayNumber] = useState([]);

  return (
    <Background>
      <Display
        setDisplayNumber={setDisplayNumber}
        displayNumber={displayNumber}
      />
      <ButtonPanel
        setDisplayNumber={setDisplayNumber}
        displayNumber={displayNumber}
      />
    </Background>
  );
};

export default PinPad;
