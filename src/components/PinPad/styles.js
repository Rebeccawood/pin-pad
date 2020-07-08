import styled from "styled-components";
import config from "../../lib/config";

export const Background = styled.section`
  background: url("/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${config.borderRadius.desktop};
  border: ${config.border.green};
  box-shadow: ${config.palette.grey} 3rem -3rem 3rem -1.8rem;
  height: 70rem;
  text-align: center;
  width: 80rem;

  @media (max-width: ${config.resolutions.mobileL}) {
    border-radius: ${config.borderRadius.mobile};
    height: auto;
    margin-bottom: 2rem;
    padding: 1.5rem;
    width: 100%;
  }
`;
