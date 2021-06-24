import React from "react";
import Fetch from "../Fetch/Fetch";

const Users = ({
  url,
  method = "GET",
  query = "",
  renderData,
  setSelects = () => null,
}) => {
  return (
    <>
      <Fetch
        url={url}
        method={method}
        query={query}
        renderData={renderData}
        setSelects={setSelects}
      />
    </>
  );
};

export default Users;
