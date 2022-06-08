import styled from "styled-components";

export const PlaylistsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fbfbfc;

  h1 {
    padding: 1rem;
  }
`;

export const PlaylistsContainer = styled.div`
  width: 75%;
  height: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const PlaylistCard = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  padding: 1rem 0.5rem;
  background-color: #fbfbfd;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  p {
    font-size: 1.3rem;
  }

  img {
    max-width: 300px;
    margin: 1rem 0;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 5px;
  }
  :hover {
    transition: 0.8s ease-in-out;
    transform: scale(1.05);

    p {
      display: none;
    }

    img {
      transition: 0.5s ease-in-out;
      transform: scale(1.1);
    }
  }
`;
