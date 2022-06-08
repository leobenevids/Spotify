import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: black;
  color: white;
  padding: 80px 0;
`;

export const FooterContent = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;

  img {
    height: 2em;
  }

  ul {
    margin: 0 60px;
    list-style: none;
  }

  li {
    margin: 25px 0;
    transition: all 300ms ease;
  }

  li:hover {
    color: var(--default-green);
    cursor: pointer;
  }

  p {
    font-weight: bold;
    text-transform: uppercase;
    color: var(--default-gray);
    font-size: 0.8rem;
  }
`;

export const Socials = styled.div`
  display: flex;

  i {
    margin: 0 20px;
    font-size: 1.7rem;
    transition: all 300ms ease;
  }

  i:hover {
    color: var(--default-green);
    cursor: pointer;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 60%;
  margin: auto;
  font-weight: bold;
  color: var(--dafault-gray);
  font-size: 0.75rem;
  padding-top: 50px;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: 0 10px;
    transition: all 300ms ease;
  }

  li:hover {
    color: var(--default-green);
    cursor: pointer;
  }
`;

export const Rights = styled.div`
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;

    p {
      transition: all 300ms ease;
    }

    p:hover {
      color: var(--default-green);
      cursor: pointer;
    }
  }

  img {
    height: 20px;
    width: auto;
    display: inline-block;
    margin-left: 10px;
  }
`;
