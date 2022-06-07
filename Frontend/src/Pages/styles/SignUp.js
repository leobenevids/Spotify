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
  }

  h2 {
    margin-bottom: 1rem;
  }

  button {
    margin: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem 0;

    label {
      height: 2rem;
    }

    input {
      padding-left: 1rem;
      height: 2.5rem;
      ::placeholder {
        color: var(--light-green);
      }
    }

    small {
      margin: 0.5rem 0;
    }

    .select {
      align-items: center;
      justify-content: space-between;
    }

    i {
      font-size: 1rem;
      margin: 0.5rem 0;
      color: #f00;
    }
  }
`;
