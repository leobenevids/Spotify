import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  width: 90%;
  height: 450px;
  background-color: rgba(238, 238, 238, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  border-radius: 5px;
  visibility: visible;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 3em;
    color: #000;

    h2 {
      margin: 1em 0;
    }

    ul {
      margin: 2em 0;
    }

    li {
      margin-left: 3em;
    }
  }

  button {
    position: absolute;
    border: 1.5px solid #525252;
    background: var(--default-red);
    border-radius: 3px;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    line-height: 1;
  }
`;

export const ContentArea = styled.div``;
