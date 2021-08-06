import styled from "styled-components";
import ReactSelect from "react-select";

const Select = styled(ReactSelect)`
  width: 280px;
  @media screen and (max-width: 500px) {
    width: 180px;
  }
`;

export default Select;
