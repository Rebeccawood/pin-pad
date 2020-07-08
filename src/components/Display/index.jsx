import React, { useState } from "react";
import { Wrapper, Background, BlockScreenError } from "./styles.js";
import { hideNumbers, checkPin, showCorrectMessage } from "../../lib/utils";

const Display = (props) => {
  const { displayNumber, setDisplayNumber } = props;
  const pin = [1, 1, 1, 1]; // correct pin number can come from API here, hence hardcoded
  const [error, setError] = useState(0);
  let timeOut;
  const shortInterval = 1000;
  const longInterval = 30000;

  const resetDisplay = (message) => {
    clearTimeout(timeOut);
    const errorIncrease = message ? 0 : error + 1;
    setDisplayState([], shortInterval);
    setErrorCount(errorIncrease, shortInterval);
  };
  const setDisplayState = (display, ms) => {
    timeOut = setTimeout(() => setDisplayNumber(display), ms);
    return timeOut;
  };
  const setErrorCount = (errorIncrease, ms) => {
    timeOut = setTimeout(() => setError(errorIncrease), ms);
    return timeOut;
  };

  return (
    <Wrapper>
      <Background>
        {displayNumber && displayNumber.length < 4 && (
          <p>{hideNumbers(displayNumber)}</p>
        )}
        {displayNumber && displayNumber.length === 4 && (
          <>
            <p>{showCorrectMessage(checkPin(pin, displayNumber))}</p>
            {resetDisplay(checkPin(pin, displayNumber))}
          </>
        )}
      </Background>
      {error === 3 && setErrorCount(0, longInterval) && (
        <BlockScreenError>
          <p>LOCKED</p>
        </BlockScreenError>
      )}
    </Wrapper>
  );
};

export default Display;
