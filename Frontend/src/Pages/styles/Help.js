import styled from "styled-components";
import showcase2 from "../../Assets/Images/showcase2.jpeg";

export const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30em;
  background: url(${showcase2}) center center/cover;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: color;
  color: #fff;
  width: 100%;

  h1 {
    font-size: 4em;
    margin: 1em 0;
  }

  input {
    width: 40%;
    height: 4em;
    border-radius: 4px;
    margin-bottom: 4em;
    padding: 1em;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  }

  p {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }

  span {
    font-size: 1em;
    display: column;
  }

  small {
    margin-top: 1em;
  }

  small:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SecondSection = styled.div`
  background-color: rgba(238, 238, 238, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  text-align: center;
  padding: 2rem;

  ul {
    font-size: 1.4em;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }
  
  li {
    font-size: 0.75em;
    list-style: none;
    color: var(--default-green);
    margin: 0.5rem 0;
  }

  li:hover {
    cursor: pointer;
    color: var(--default-blue);
  }
`;

export const ThirdSection = styled.div`
  padding: 2em;
  width: 40em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3em auto;
  text-align: center;

  h1 {
    font-size: 3em;
  }

  p {
    font-size: 1.1em;
    margin: 3em 0;
  }
`;
