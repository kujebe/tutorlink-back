import React, { Fragment } from "react";

import TopbarPublic from "./topbar-public.component";
import TopbarPrivate from "./topbar-private.component";
import Footer from "./footer.component";

const InnerPagesLayout = ({ children }) => (
  <Fragment>
    {/*<TopbarPublic />*/}
    <TopbarPrivate />
    <div className="inner-pages-wrapper">{children}</div>
    <Footer />
  </Fragment>
);

export default InnerPagesLayout;
