import styled from "styled-components";

const FormStyled = styled.article`
  background-color: #f1f3f5;
  text-align: center;
  width: 90%;
  max-width: 600px;
  min-width: 180px;
  margin: 0.4rem auto;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: ${props => props.direction || "row"};
  gap: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);

  button {
    max-width: 300px;
    margin: auto;
  }
  div {
    input[type="text"] {
      background-color: #f8f9fa;
      padding: 14px 8px;
    }
  }
`;

export default FormStyled;
