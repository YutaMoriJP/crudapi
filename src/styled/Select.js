import styled from "styled-components";
import ReactSelect from "react-select";

const Select = styled(ReactSelect)`
  width: 90%;
  max-width: 400px;
  min-width: 150px;
  /*
  width: 250px;
  @media screen and (max-width: 250px) {
    width: 180px;
  } */
`;

export default Select;
