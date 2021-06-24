import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;

  a {
    text-decoration: 0;
    align-self: center;
  }
  @media screen and (max-width: 500px) {
    gap: 5px;
    button {
      padding: 2px;
      margin: 2px;
    }
    span {
      font-size: 0.7rem;
    }
  }
`;

export default Nav;
