import styled from "styled-components";

export const PlaylistDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fbfbfc;
`;

export const PlaylistDetailsContainer = styled.div`
  width: 75%;
  height: 75%;
  display: flex;
  align-item: center;
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
