import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import TextField from "../Components/Input/TextField";
import Form from "../Components/Form/Form";
import useInput from "../useHook/useInput";
import Error from "../styled/Error";
import Fetch from "../Components/Fetch/Fetch";
import errorMessage from "../helper/errorMessage";
import { authenticatePut } from "../helper/authenticateInput";
import Button from "../Components/Button/Button";
import renderData from "../helper/renderData";
import Grid from "@material-ui/core/Grid";
import Title from "../styled/Title";
import Box from "../Components/Box/Box";
import useTitle from "../useHook/useTitle";

const Post = () => {
  const [name, resetName] = useInput("");
  const [username, resetUsername] = useInput("");
  const [age, resetAge] = useInput("");
  const resetInput = () => {
    resetAge();
    resetUsername();
    resetName();
  };
  const [error, setError] = useState(null);
  const [method, setMethod] = useState("");
  const [requested, setRequested] = useState(false);
  const [body, setBody] = useState(null);
  const handleSubmit = () => {
    if (authenticatePut(name.value, username.value, age.value)) {
      console.log("handleSubmit");
      setBody({ name: name.value, username: username.value, age: age.value });
      setMethod("POST");
      setRequested(!requested);
      setError(null);
      resetInput();
    } else {
      setError(errorMessage(name.value, username.value, age.value));
    }
  };
  useTitle("POST PAGE");
  return (
    <Layout>
      <Title>POST Request</Title>
      <Box>
        On the POST Request page, you can create a new user that will be stored
        in the database. Learn more by clicking on the <strong>?</strong> icon.
      </Box>
      <Form direction="column" onClick={handleSubmit}>
        <p>
          Please ensure you fill <strong>all fields</strong>, and then click the
          'Send Post Request' button. After clicking the button, a{" "}
          <strong>POST request</strong> will be send to the server and the new
          user profile will be added to the database.
        </p>
        <TextField value={name} required variant="outlined" label="Name" />
        <TextField
          value={username}
          required
          variant="outlined"
          label="Username"
        />
        <TextField value={age} required variant="outlined" label="Age" />
        <Error>{error}</Error>
        <Button onClick={handleSubmit}>send post request</Button>
      </Form>
      {!!method.length && (
        <Grid container justify="center">
          <Fetch
            url="https://pleasework-crud-api.herokuapp.com/users"
            method={method}
            body={body}
            requested={requested}
            renderData={renderData}
          />
        </Grid>
      )}
    </Layout>
  );
};

export default Post;
