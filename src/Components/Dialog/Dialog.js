import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  content: { textAlign: "left" },
  bg: { backgroundColor: "#ced4da" },
});

export default function AlertDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyle();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Learn about this CRUD API"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={classes.content}
          >
            <strong className={classes.bg}>GET Request:</strong> The{" "}
            <strong>GET</strong> request page is for purely for fetching data
            from the database. The initial user profile returned from the server
            is a mock data with <strong>default</strong> values. As you go to
            the <strong>POST request</strong> page and create users, you have
            the option to fetch either <strong>all users (maximum of 3)</strong>{" "}
            or fetch specific users, like <strong>User 2</strong>. Just use the{" "}
            <strong>select menu</strong> at the top right of the page, and
            choosing the option will automatically fire a request.
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            className={classes.content}
          >
            <strong>Important:</strong> The user profile you have created will
            be deleted from the database after 10 minutes of the creation time.
            However, you do have the option to immediaitely delete it by going
            to the <strong>DELETE Request</strong> page.
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            className={classes.content}
          >
            <strong className={classes.bg}>PUT Request:</strong> The{" "}
            <strong>PUT</strong> request page is for updating the data stored in
            the database. For example, if you want to update the{" "}
            <strong>Name</strong> from <strong>Curry</strong> to{" "}
            <strong>Messi</strong>, then select that user from the{" "}
            <strong>select option</strong>, like User 1 and type the new name
            into the input field. Finally, click on the{" "}
            <strong>Send Put Request</strong> button and the{" "}
            <strong>PUT Request</strong> will be send to the server.
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            className={classes.content}
          >
            <strong className={classes.bg}>POST Request:</strong> The{" "}
            <strong>POST</strong> request page is for creating a new user
            profile. Unlike the PUT request page, you must fill all fields. So,
            the name, username, and age for the user profile must be answered.
            And then click on the <strong>Send POST Request</strong> button to
            send the POST request with the needed data. As there is a limit of
            maximum of 3 user profiles, the oldest one will be deleted when you
            wish to create a new one.
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            className={classes.content}
          >
            <strong className={classes.bg}>DELETE Request:</strong> The{" "}
            <strong>DELETE</strong> request page is for deleting user
            profile(s). Select the user profile that you wish to delete from the
            select menu, and then click <strong>Send Delete Request</strong>. If
            you try to delete the default user profile, then it will be deleted
            from the database, but after a new GET request is send to the
            server, the same default profile will be created. If it's a custom
            user profile, then it will be completely deleted from the database.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
