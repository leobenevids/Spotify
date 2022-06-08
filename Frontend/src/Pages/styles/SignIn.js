import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  form {
    width: 33.3%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-align: left;
    display: flex;
    flex-direction: column;

    h3 {
      text-align: center;
      margin-bottom: 1rem;
    }

    label {
      width: 100%;
      margin-bottom: 1rem;
    }

    input {
      width: 100%;
      margin-bottom: 1rem;
      padding-left: 1rem;
      height: 2.5rem;
      ::placeholder {
        color: var(--light-green);
      }
    }

    button {
      width: 80%;
      margin: 1.5rem auto;
    }

    .whiteButton {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(0, 0, 0, 0.3);
      background-color: #fff;
      margin-bottom: 2rem;
      color: rgba(0, 0, 0, 0.5);
      width: 100%;

      label {
        border: 1px solid red;
        font-size: 0.9rem;
        margin-top: 0.3rem;
        margin-left: 1rem;
      }

      :hover {
        border: 1px solid black;
      }
    }

    small {
      margin: 0.5rem 0;
    }

    hr {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
