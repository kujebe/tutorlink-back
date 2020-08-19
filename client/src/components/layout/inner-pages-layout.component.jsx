import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import TopbarPublic from "./topbar-public.component";
import TopbarPrivate from "./topbar-private.component";
import Footer from "./footer.component";

const InnerPagesLayout = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <Fragment>
      {currentUser ? <TopbarPrivate /> : <TopbarPublic />}

      <div className="inner-pages-wrapper">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default InnerPagesLayout;
