import styled from "styled-components";
import config from "../../lib/config";

export const Component = styled("section")`
  display: flex;
  justify-content: space-evenly;
  margin: 100px;

  @media (max-width: ${config.resolutions.mobileL}) {
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 5rem;
  }
`;
