import styled from "styled-components";

export const ModalWrapper = styled.div`
  margin: 1em;
  box-shadow: none;

  div {
    display: flex;
    flex-direction: column;
    width: 250px;

    p {
      font-weight: bold;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 90%;
      margin: 0.5em auto;

      label {
        margin-bottom: 0.25em;
      }

      input {
        margin-bottom: 0.25em;
        height: 2em;
        padding: 0.5em;
      }

      button {
        padding: 0;
        border-radius: 5px;
        height: 2em;
        width: 8em;
        margin: 0.5em auto;
      }
    }
  }
`;
