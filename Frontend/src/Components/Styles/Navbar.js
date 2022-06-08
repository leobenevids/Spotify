import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  justify-content: center;
  width: 100%;

  img {
    height: 3em;
  }
`;

export const NavbarContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3em 0;

  ul {
    display: flex;
    list-style: none;
    font-weight: bold;
  }

  li {
    padding: 0 1.3em;
    transition: all 300ms ease;
  }

  li:hover {
    color: var(--default-green);
    cursor: pointer;
  }

  li:nth-child(3) {
    border-right: 1px solid white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
