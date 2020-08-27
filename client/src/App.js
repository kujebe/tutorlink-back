import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Spinner from "components/spinner/spinner.component";
import ErrorBoundary from "components/error-boundary/error-boundary.component";
import Layout from "components/layout/layout.component";

import ResetPassword from "pages/reset-password/reset-password.page";
import NoMatch from "components/no-match/NoMatch.component";
import Dashboard from "components/dashboard/dashboard.component";
const HomePage = lazy(() => import("pages/home/home.page"));
const TeacherPage = lazy(() => import("pages/teacher/teacher.page"));
const SignInSignUp = lazy(() =>
  import("pages/sign-in-sign-up/sign-in-sign-up.page")
);
const DashboardPage = lazy(() => import("pages/dashboard/dashboard.page"));

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/teacher/:slug">
              <TeacherPage />
            </Route>
            <Route
              exact
              path="/account"
              render={() =>
                currentUser ? <Redirect to="/dashboard" /> : <SignInSignUp />
              }
            />
            <Route
              exact
              path="/dashboard"
              render={() =>
                currentUser ? <DashboardPage /> : <Redirect to="/account" />
              }
            />
            <Route exact path="/account/reset-password">
              <ResetPassword />
            </Route>
            <Route exact path="/dashboard" render={() => <Dashboard />} />
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
