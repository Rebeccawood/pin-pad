import React from "react";
import { Wrapper, Panel, Button } from "./styles";
import { buttonDigits } from "../../lib/utils";

const ButtonPanel = (props) => {
  const { displayNumber, setDisplayNumber } = props;

  return (
    <Wrapper>
      <Panel>
        {buttonDigits.map((num) => (
          <Button
            key={num}
            onClick={() => setDisplayNumber([...displayNumber, num])}
          >
            {num}
          </Button>
        ))}
        <Button onClick={() => setDisplayNumber([])}>X</Button>
      </Panel>
    </Wrapper>
  );
};

export default ButtonPanel;
