import React, { Fragment } from "react";

import Topbar from "./topbar.component";
import Footer from "./footer.component";

const InnerPagesLayout = ({ children }) => (
  <Fragment>
    <Topbar />
    <div className="inner-pages-wrapper">{children}</div>
    <Footer />
  </Fragment>
);

export default InnerPagesLayout;
