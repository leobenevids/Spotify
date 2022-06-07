import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Container = styled.div`
  width: 33.3%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    margin-bottom: 3em;
    color: var(--default-green);
  }

  h2 {
    margin-bottom: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;

    label {
      text-align: left;
      margin: 0.25em 0.5em ;
    } 

    input {
      margin: 0.5rem;
      height: 2rem;
      padding-left: 1rem;
      ::placeholder {
        color: var(--light-green);
      }
    }

    button {
      width: 250px;
    }
  }
`;
