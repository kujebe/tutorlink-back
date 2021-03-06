import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SWRConfig } from "swr";

/** Import get user location action */
import { getUserLocationStart } from "store/map/map-actions";

// import Modal from "components/modal/modal.component";
// import PaymentModal from "components/payment-modal/payment-modal.component";
import Spinner from "components/spinner/spinner.component";
import ErrorBoundary from "components/error-boundary/error-boundary.component";
import Layout from "components/layout/layout.component";

import ResetPassword from "pages/reset-password/reset-password.page";
import NoMatch from "components/no-match/NoMatch.component";
import SearchPage from "pages/search/search.page";
const HomePage = lazy(() => import("pages/home/home.page"));
const TeacherPage = lazy(() => import("pages/teacher/teacher.page"));
const SignInSignUp = lazy(() =>
  import("pages/sign-in-sign-up/sign-in-sign-up.page")
);
const CustomerDashboard = lazy(() =>
  import("pages/customer-dashboard/customer-dashboard.page")
);
const fetcher = (...args) => fetch(...args).then((response) => response.json());

const App = () => {
  const sessionData = useSelector((state) => state.user.sessionData);
  // const showPaymentModal = useSelector(
  //   (state) => state.customer.showPaymentModal
  // );

  const dispatch = useDispatch();
  /** Get user location on app load */
  useEffect(() => {
    dispatch(getUserLocationStart());
  }, [dispatch]);

  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/">
              <SWRConfig value={{ fetcher }}>
                <HomePage />
              </SWRConfig>
            </Route>
            <Route exact path="/teacher/:slug">
              <TeacherPage />
            </Route>
            <Route exact path="/search/">
              <SearchPage />
            </Route>
            <Route
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
                sessionData && sessionData.role === "customer" ? (
                  <Redirect to="/customer" />
                ) : (
                    <SignInSignUp />
                  )
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
      {/*} {showPaymentModal && (
        <Modal>
          <PaymentModal />
        </Modal>
     )}*/}
    </Layout>
  );
};

export default App;
