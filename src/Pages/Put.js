import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import useInput from "../useHook/useInput";
import Form from "../Components/Form/Form";
import TextField from "../Components/Input/TextField";
import Button from "../Components/Button/Button";
import Error from "../styled/Error";
import Fetch from "../Components/Fetch/Fetch";
import formatSelect from "../helper/formatSelect";
import Select from "../Components/Select/Select";
import authenticatePost from "../helper/authenticateInput";
import { getError } from "../helper/errorMessage";
import renderData from "../helper/renderData";
import updateBody from "../helper/updateBody";
import Article from "../styled/GetContainer";
import Grid from "@material-ui/core/Grid";
import Title from "../styled/Title";
import Box from "../Components/Box/Box";
import useTitle from "../useHook/useTitle";

const Put = () => {
  const [users, setUsers] = useState(null);
  const [sent, setSent] = useState(false);
  const [userID, setUserID] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState(null);
  const [name, resetName] = useInput("");
  const [username, resetUsername] = useInput("");
  const [age, resetAge] = useInput("");
  const resetInput = () => {
    resetAge();
    resetUsername();
    resetName();
  };
  const [error, setError] = useState(null);
  const updateSelects = data => {
    if (!Array.isArray(data)) {
      setUsers([data].map(formatSelect));
      return;
    }
    setUsers(data.map(formatSelect));
  };

  const handleSubmit = () => {
    if (
      authenticatePost(name.value, username.value, age.value) &&
      userID.length
    ) {
      setMethod("PUT");
      const body = updateBody([
        { name: name.value },
        { username: username.value },
        { age: age.value },
      ]);
      setBody(body);
      setError(null);
      setSent(prevBool => !prevBool);
      resetInput();
      return;
    }
    setError(
      getError(userID, name.value + username.value + age.value, [
        name.value,
        username.value,
        age.value,
      ])
    );
  };
  useTitle("PUT Page");
  return (
    <Layout>
      <Article>
        {users && <Select options={users} setQuery={setUserID} />}
      </Article>
      <Title>PUT Request</Title>
      <Box>
        On the PUT Request page, you can select specific user profiles that are
        stored in the database and update the user data. You can update all the
        data or only update speicifc parts, like the username. Click on{" "}
        <strong>?</strong> to learn more.
      </Box>
      <Form onClick={handleSubmit} direction="column">
        <p>
          Please ensure you fill <strong>at least one field</strong> and use the
          select menu to{" "}
          <strong>choose the user data you wish to update</strong>.
        </p>
        <TextField value={name} label="Name" variant="outlined" />
        <TextField value={username} label="Username" variant="outlined" />
        <TextField value={age} label="Age" variant="outlined" />
        <Button onClick={handleSubmit}>SEND PUT REQUEST</Button>
        {error && <Error>{error}</Error>}
      </Form>
      <Grid container justify="center" spacing={1}>
        <Fetch
          url="https://pleasework-crud-api.herokuapp.com/users"
          method={method}
          query={userID}
          setSelects={updateSelects}
          renderData={renderData}
          body={body}
          headers={{ "Content-Type": "application/json" }}
          sent={sent}
        />
      </Grid>
    </Layout>
  );
};

export default Put;
