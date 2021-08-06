import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyle = makeStyles({
  root: { display: "flex", flexDirection: "column", alignItems: "center" },
  spinner: { padding: 50 },
});

const Loading = ({ color = "primary", isText = false }) => {
  const classes = useStyle();
  return (
    <article aria-describedby="loading page" className={classes.root}>
      {isText && (
        <h1>Heroku is warming up... It may take a couple seconds. </h1>
      )}
      <CircularProgress color={color} className={classes.spinner} />
    </article>
  );
};

Loading.propTypes = {
  color: PropTypes.string,
  isText: PropTypes.bool,
};

export default Loading;
