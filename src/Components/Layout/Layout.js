import React from "react";
import Nav from "./Nav";
import Global from "../../styled/Global";
import Container from "@material-ui/core/Container";

const Layout = ({ children }) => {
  return (
    <>
      <Global />
      <Container maxWidth="md">
        <Nav />
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
