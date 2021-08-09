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
    margin: auto;
    button {
      width: max-content;
      padding: 1px;
      margin: 1px;
    }
    span {
      width: max-content;

      font-size: 0.5rem;
    }
  }
`;

export default Nav;
