import React from "react";
import Button from "@material-ui/core/Button";

const Buttons = ({
  children,
  type = "text",
  onClick,
  variant = "contained",
  color = "primary",
  startIcon = null,
  endIcon = null,
}) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};

export default Buttons;
