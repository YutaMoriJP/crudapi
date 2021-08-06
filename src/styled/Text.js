import styled from "styled-components";

const Text = styled.p`
  font-size: 0.8rem;
  color: ${props => props.color || "#f1f3f5"};
  line-height: 20px;
  text-align: left;
  @media screen and (max-width: 600px) {
    line-height: 14px;
  }
`;

export default Text;
