import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Navbar from "../../styled/NavStyled";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "../Button/IconButton";
import styled from "styled-components";

const Icon = styled(HelpIcon)`
  width: 50px;
  height: 40px;
  color: black;
`;

const navs = [
  { link: "/", name: "GET", id: 0 },
  { link: "/put", name: "PUT", id: 1 },
  { link: "/post", name: "POST", id: 2 },
  { link: "/delete", name: "DELETE", id: 3 },
];

const Nav = () => {
  return (
    <Navbar>
      {navs.map(nav => (
        <Link to={nav.link} key={nav.id}>
          <Button>{nav.name}</Button>
        </Link>
      ))}
      <IconButton Icon={Icon} />
    </Navbar>
  );
};

export default Nav;
