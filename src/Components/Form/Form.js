import React from "react";
import FormStyled from "../../styled/FormStyled";

const Form = ({ children, onClick, direction = "row" }) => {
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      onClick();
    }
    return;
  };
  return (
    <FormStyled onKeyPress={handleKeyPress} direction={direction}>
      {children}
    </FormStyled>
  );
};

export default Form;
