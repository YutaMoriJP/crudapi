import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

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
        <h4>
          {type} - {name}
        </h4>
      </Grid>
    </Grid>
  );
};

export default Age;
