import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Spinner from "components/spinner/spinner.component";
import ErrorBoundary from "components/error-boundary/error-boundary.component";
import Layout from "components/layout/layout.component";

const HomePage = lazy(() => import("pages/homepage/homepage.component"));

function App() {
  return (
    <Layout>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Layout>
  );
}

export default App;
