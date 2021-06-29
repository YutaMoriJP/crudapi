import React from "react";
import A from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import styled from "styled-components";

const Text = styled.p`
  font-size: 0.7rem;
  font-weight: 900;
  @media screen and (min-width: 500px) {
    font-size: 1rem;
  }
`;

const Avatar = styled(A)`
  width: 30px;
  height: 30px;
  @media screen and (min-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

const useStyles = makeStyles(theme => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const Age = ({ name, type, crossed }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={8}
      container
      justify="space-between"
      style={{ textDecoration: crossed && "line-through" }}
    >
      <Grid item style={{ alignSelf: "center" }}>
        <Avatar className={classes.orange} />
      </Grid>
      <Grid item style={{ alignSelf: "center" }}>
        <Text>
          {type} - {name}
        </Text>
      </Grid>
    </Grid>
  );
};

export default Age;
