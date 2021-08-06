import React, { useState, useEffect } from "react";
import ReactSelect from "../../styled/Select";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

const Select = ({ options, setQuery, setCrossed = () => null, sent }) => {
  const [selectedValue, setSelectedValue] = useState(options);
  const handleChange = option => {
    setQuery(option.value);
    setSelectedValue(option);
    setCrossed(false);
  };
  useEffect(() => setSelectedValue(null), [sent]);
  return (
    <Container>
      <ReactSelect
        options={options}
        value={selectedValue}
        onChange={handleChange}
      />
    </Container>
  );
};
/*
   {pathname === "/delete" && !selectedValue?.label && (
        <Error>Please select a user to delete.</Error>
      )}
      */
export default Select;
