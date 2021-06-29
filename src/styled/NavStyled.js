import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 10px;

  a {
    text-decoration: 0;
    align-self: center;
  }
  @media screen and (max-width: 500px) {
    gap: 5px;
    max-width: 90%;
    margin: auto;
    button {
      padding: 2px;
      margin: 2px;
    }
    span {
      font-size: 0.6rem;
    }
  }
`;

export default Nav;
