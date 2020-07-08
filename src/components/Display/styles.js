import styled from "styled-components";
import config from "../../lib/config";

const Wrapper = styled.section`
  display: flex;
  height: 20%;
  justify-content: center;
  width: 100%;

  @media (max-width: ${config.resolutions.mobileL}) {
    height: 7rem;
    margin-top: 1rem;
    width: 100%;
  }
`;
const Background = styled.section`
  background: linear-gradient(
    32deg,
    ${config.palette.white} 54%,
    ${config.palette.offWhitePrimary} 89%,
    ${config.palette.offWhiteSecondary} 100%
  );
  border-radius: ${config.borderRadius.desktop};
  border: ${config.border.green};
  height: 100%;
  margin-top: 4rem;
  text-align: center;
  width: 80%;

  & > p {
    font-size: 5rem;
    margin-top: 4rem;

    @media (max-width: ${config.resolutions.mobileL}) {
      font-size: 4rem;
      margin-top: 1.2rem;
    }
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    border-radius: ${config.borderRadius.mobile};
    margin-top: 1rem;
  }
`;

const BlockScreenError = styled.section`
  align-items: center;
  display: block;
  height: 100%;
  margin-top: 6.5rem;
  position: absolute;
  width: 15%;

  & > p {
    background-color: ${config.palette.pink};
    border-radius: ${config.borderRadius.desktop};
    border: ${config.border.green};
    color: ${config.palette.white};
    font-size: 4rem;
    padding: 2rem;

    @media (max-width: ${config.resolutions.mobileL}) {
      border-radius: ${config.borderRadius.mobile};
      font-size: 2rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    height: 30%;
    margin-top: 2.5rem;
    width: 60%;
  }
`;

export { Background, Wrapper, BlockScreenError };
