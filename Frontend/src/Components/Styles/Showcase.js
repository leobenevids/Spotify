import styled from "styled-components";
import showcase1 from "../../Assets/Images/showcase1.jpeg";

export const ShowcaseWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: url(${showcase1}) center center/cover;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: color;
`;

export const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 5em;
  }

  p {
    margin: 1.5em 0;
    font-size: 1.1em;
  }
`;
