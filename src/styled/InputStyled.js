import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";

const InputStyled = styled(TextField)`
  ${props =>
    props.block &&
    css`
      && {
        margin: auto;
        width: 80%;
      }
    `}
`;

export default InputStyled;
