import React from "react";
import Card from "../Components/Card/Card";

const renderData = (user, index, crossed) => {
  return (
    <React.Fragment key={user?._id || index}>
      <Card user={user} title="User Profile" crossed={crossed} />
    </React.Fragment>
  );
};

export default renderData;
