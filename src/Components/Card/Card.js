import React from "react";
import { useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Name from "./Name";
import Age from "./Age";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({ root: { padding: 5, margin: "10px 0" } });

const Card = ({ user, title, crossed }) => {
  const { pathname } = useLocation();
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={8} md={5}>
      <Paper elevation={10} className={classes.root}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.4rem",
            textTransform: "uppercase",
            textDecoration: pathname === "/delete" && crossed && "line-through",
          }}
        >
          {title || "User Profile"}
        </h1>
        <Grid container justify="center">
          <Name
            type="Name"
            name={user?.name || "Unknown"}
            crossed={pathname === "/delete" && crossed ? 1 : 0}
          />
        </Grid>
        <Grid container justify="center">
          <Name
            type="Username"
            name={user?.username || "Unknown"}
            crossed={pathname === "/delete" && crossed ? 1 : 0}
          />
        </Grid>
        <Grid container justify="center">
          <Age
            type="Age"
            name={user?.age || "Unknown"}
            crossed={pathname === "/delete" && crossed ? 1 : 0}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
