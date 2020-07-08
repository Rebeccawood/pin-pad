import styled from "styled-components";
import config from "../../lib/config";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 8rem;

  @media (max-width: ${config.resolutions.mobileL}) {
    display: grid;
    margin-top: 2rem;
    min-height: 100%;
    width: 100%;
  }
`;

const Panel = styled.section`
  background: ${config.palette.whiteTransparent("0.6")};
  border-radius: ${config.borderRadius.desktop};
  border: 0.1rem solid ${config.palette.green};
  column-gap: 1rem;
  display: grid;
  grid-template-columns: 8rem 8rem 8rem;
  grid-template-rows: auto;
  padding: 5rem;
  row-gap: 1.5rem;

  @media (max-width: ${config.resolutions.mobileL}) {
    border-radius: ${config.borderRadius.mobile};
    grid-template-columns: 5rem 5rem 5rem 5rem;
    padding: 1rem;
    row-gap: 1rem;
    width: 100%;
  }
`;

const Button = styled.div`
  background-color: ${config.palette.green};
  border-radius: ${config.borderRadius.desktop};
  border: ${config.border.white};
  box-shadow: ${config.palette.grey} 1rem 0rem 1rem 0rem;
  color: ${config.palette.white};
  cursor: pointer;
  font-size: 3rem;
  padding: 1.5rem;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    border-radius: ${config.borderRadius.mobile};
    font-size: 1.6rem;
    padding: 1rem;
  }
`;

export { Wrapper, Panel, Button };
