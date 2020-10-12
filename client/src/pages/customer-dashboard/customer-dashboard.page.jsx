import React from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import IndexComponent from "components/customer-dashboard/index.component";


const CustomerDashboard = () => {
  return (
    <InnerPagesLayout>
      <IndexComponent />
    </InnerPagesLayout>
  );
};

export default CustomerDashboard;
