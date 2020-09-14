import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Modal from "components/modal/modal.component";
import PaymentModal from "components/payment-modal/payment-modal.component";
import Spinner from "components/spinner/spinner.component";
import ErrorBoundary from "components/error-boundary/error-boundary.component";
import Layout from "components/layout/layout.component";

import ResetPassword from "pages/reset-password/reset-password.page";
import NoMatch from "components/no-match/NoMatch.component";
const HomePage = lazy(() => import("pages/home/home.page"));
const TeacherPage = lazy(() => import("pages/teacher/teacher.page"));
const SignInSignUp = lazy(() =>
  import("pages/sign-in-sign-up/sign-in-sign-up.page")
);
const CustomerDashboard = lazy(() =>
  import("pages/customer-dashboard/customer-dashboard.page")
);

const App = () => {
  const sessionData = useSelector((state) => state.user.sessionData);
  const showPaymentModal = useSelector(
    (state) => state.customer.showPaymentModal
  );

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
              path="/customer"
              render={() =>
                sessionData && sessionData.role === "customer" ? (
                  <CustomerDashboard />
                ) : (
                  <Redirect to="/account" />
                )
              }
            />
            <Route
              exact
              path="/account"
              render={() =>
                sessionData ? <Redirect to="/dashboard" /> : <SignInSignUp />
              }
            />
            <Route exact path="/account/reset-password">
              <ResetPassword />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
      {showPaymentModal && (
        <Modal>
          <PaymentModal />
        </Modal>
      )}
    </Layout>
  );
};

export default App;
