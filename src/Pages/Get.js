import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Grid from "@material-ui/core/Grid";
import Users from "../Components/Users/Users";
import Article from "../styled/GetContainer";
import Select from "../Components/Select/Select";
import formatSelect from "../helper/formatSelect";
import renderData from "../helper/renderData";
import Title from "../styled/Title";
import Box from "../Components/Box/Box";
import useTitle from "../useHook/useTitle";

const Get = () => {
  const [query, setQuery] = useState("");
  const [selects, setSelects] = useState("");
  const updateSelects = data => {
    if (!Array.isArray(data)) {
      setSelects([
        { value: "/", label: "All Users" },
        [data].map(formatSelect),
      ]);
      return;
    }
    setSelects([{ value: "/", label: "All Users" }, ...data.map(formatSelect)]);
  };
  useTitle("GET page");
  return (
    <Layout>
      <Article>
        {selects.length && <Select options={selects} setQuery={setQuery} />}
      </Article>
      <Title>GET Request</Title>

      <Box>
        On this GET Request page, you can fetch user profiles from the server.
        Use the <strong>select menu</strong> at the top right to choose to fetch
        specific or all users. Selecting the option will automatically fire a
        fetch request to the server. Click on the <strong>?</strong> icon to
        learn more.
      </Box>

      <Grid spacing={2} container justify="center">
        <Users
          url="https://pleasework-crud-api.herokuapp.com/users"
          method="GET"
          query={query}
          renderData={renderData}
          setSelects={updateSelects}
        />
      </Grid>
    </Layout>
  );
};

export default Get;
