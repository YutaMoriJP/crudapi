import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import Button from "../Components/Button/Button";
import Fetch from "../Components/Fetch/Fetch";
import formatSelect from "../helper/formatSelect";
import Select from "../Components/Select/Select";
import renderData from "../helper/renderData";
import Article from "../styled/GetContainer";
import Grid from "@material-ui/core/Grid";
import Title from "../styled/Title";

const Delete = () => {
  const [users, setUsers] = useState(null);
  const [sent, setSent] = useState(false);
  const [userID, setUserID] = useState("");
  const [method, setMethod] = useState("GET");

  useEffect(() => {
    setUserID("");
    setMethod("GET");
    setCrossed(false);
  }, [method]);

  const [crossed, setCrossed] = useState(false);
  const updateSelects = data => {
    if (!Array.isArray(data)) {
      setUsers([data].map(formatSelect));
      return;
    }
    setUsers(data.map(formatSelect));
  };
  const handleDelete = () => {
    if (userID.length) {
      setSent(!sent);
      setMethod("DELETE");
      setCrossed(true);
    }
  };
  return (
    <Layout>
      <Article>
        {users && (
          <Select
            options={users}
            setQuery={setUserID}
            setCrossed={setCrossed}
            sent={sent}
          />
        )}
      </Article>
      <Title>DELETE Request</Title>
      <p>
        Choose the user you want to delete from the options menu and then click
        the 'Send Delete Request' button. Click on the <strong>?</strong> icon
        to learn more.
      </p>

      <Button onClick={handleDelete}>Send Delete Request</Button>
      <Grid container justify="center" spacing={1}>
        <Fetch
          url="https://pleasework-crud-api.herokuapp.com/users"
          method={method}
          query={userID}
          setSelects={updateSelects}
          renderData={renderData}
          headers={{ "Content-Type": "application/json" }}
          sent={sent}
          crossed={crossed}
        />
      </Grid>
    </Layout>
  );
};

export default Delete;
/*
{users?.length === 0 && (
        <Error>
          All Users have been deleted. Please send a POST request to create a
          new user.
        </Error>
      )}
      */
