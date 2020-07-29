import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Spinner from "components/spinner/spinner.component";
import ErrorBoundary from "components/error-boundary/error-boundary.component";
import Layout from "components/layout/layout.component";

import NoMatch from "components/no-match/NoMatch.component";
const HomePage = lazy(() => import("pages/homepage/homepage.component"));
const TeacherPage = lazy(() => import("pages/teacher/teacher.component"));

function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/teacher/:slug">
              <TeacherPage />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
