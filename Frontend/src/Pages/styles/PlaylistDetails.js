import styled from "styled-components";

export const PlaylistDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fbfbfc;

  h2 {
    margin-top: 0.5em;

    span {
      color: var(--default-green);
    }
  }
`;

export const EditButton = styled.button`
  margin: 2em;
  padding: 0;
  border-radius: 5px;
  width: 8em;
  height: 3.5em;
`;

export const DeleteButton = styled.button`
  margin: 2em;
  background-color: #dc143c;
  padding: 0;
  border-radius: 5px;
  width: 8em;
  height: 3.5em;

  :hover {
    background-color: red;
  }
`;

export const PlaylistDetailsContainer = styled.div`
  width: 75%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  div {
    display: flex;
    flex-direction: row;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    img {
      max-width: 400px;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ul {
        display: flex;
        justify-content: center;
        list-style: none;
        align-items: center;

        li {
          font-family: "GothamLight";
          display: flex;
          flex-direction: column;
          text-align: center;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
            rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
          padding: 0.5rem 2rem;
          margin: 1rem;

          audio {
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1em;

  label {
    margin-bottom: 0.5em;
  }

  input {
    margin-bottom: 1em;
    height: 3em;
    min-width: 250px;
    padding: 0.5em;
    :focus {
      border: 1px inset black;
    }
  }
`;
