import React from "react";
import InputStyled from "../../styled/InputStyled";

const TextField = ({
  value,
  type = "text",
  label = "input field",
  variant = "standard",
  required = false,
}) => {
  return (
    <InputStyled
      variant={variant}
      type={type}
      id={label}
      {...value}
      label={label}
      block={1}
      required={required}
    />
  );
};

export default TextField;
