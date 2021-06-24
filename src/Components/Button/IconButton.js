import React, { useState } from "react";
import Dialog from "../Dialog/Dialog";
import IconWrapper from "@material-ui/core/IconButton";
import styled from "styled-components";

const Wrapper = styled(IconWrapper)``;

const IconButton = ({ Icon }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Wrapper onClick={handleOpen}>
        <Icon />
      </Wrapper>
      <Dialog open={open} setOpen={setOpen} />
    </>
  );
};

export default IconButton;
