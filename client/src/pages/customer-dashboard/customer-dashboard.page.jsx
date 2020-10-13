import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import IndexComponent from "components/customer-dashboard/index.component";
import CheckoutPage from "pages/checkout/checkout.page"


const CustomerDashboard = () => {
  const match = useRouteMatch({
    path: "/customer",
    // strict: true,
    // sensitive: true
  });

  return (
    <InnerPagesLayout>
      <Route exact path={`${match.path}`}>
        <IndexComponent />
      </Route>
      <Route path={`${match.path}/checkout`}>
        <CheckoutPage />
      </Route>
    </InnerPagesLayout>
  );
};

export default CustomerDashboard;
