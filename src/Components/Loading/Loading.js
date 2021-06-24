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
      {isText && <h1>It may take a couple seconds. Please wait...</h1>}
      <CircularProgress color={color} className={classes.spinner} />
    </article>
  );
};

const PropType = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== "string") {
      return new Error(
        `The passed in prop ${propName} is supposed to be a string but it's ${typeof props[
          propName
        ]} in the component ${componentName}`
      );
    }
  },
};

Loading.propTypes = {
  color: PropType.string,
  isText: PropTypes.bool,
};

export default Loading;
