import styled from "styled-components";
import config from "../../lib/config";

const Wrapper = styled.section`
  border-radius: ${config.borderRadius.desktop};
  border: ${config.border.green};
  color: ${config.palette.green};
  display: block;
  height: 20%;
  margin-left: 10rem;
  padding: 2rem;
  position: relative;
  text-align: center;
  width: 100%;

  & > h1 {
    font-size: 4rem;
    margin-bottom: 3rem;

    @media (max-width: ${config.resolutions.mobileL}) {
      font-size: 2.5rem;
    }
  }

  & > p {
    font-size: 2rem;

    @media (max-width: ${config.resolutions.mobileL}) {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${config.resolutions.mobileL}) {
    margin: 0;
  }
`;

export { Wrapper };
