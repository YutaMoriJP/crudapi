import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./Components/Loading/Loading";

const Get = lazy(() => import("./Pages/Get"));
const Put = lazy(() => import("./Pages/Put"));
const Post = lazy(() => import("./Pages/Post"));
const Delete = lazy(() => import("./Pages/Delete"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading color="primary" isText={false} />}>
        <Switch>
          <Route exact path="/">
            <Get />
          </Route>
          <Route exact path="/put">
            <Put />
          </Route>
          <Route exact path="/post">
            <Post />
          </Route>
          <Route exact path="/delete">
            <Delete />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
