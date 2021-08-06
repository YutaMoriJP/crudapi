import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import componentLoader from "./Components/HandleLazyComponent/HandleLazy";
import Get from "./Pages/Get";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Components/ErrorFallback/ErrorFallback";

const Put = lazy(() => componentLoader(() => import("./Pages/Put")));
const Post = lazy(() => componentLoader(() => import("./Pages/Post")));
const Delete = lazy(() => componentLoader(() => import("./Pages/Delete")));

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
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
    </ErrorBoundary>
  );
};

export default App;
