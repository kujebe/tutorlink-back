import React from "react";
import { useDispatch, useSelector } from "react-redux";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";

import styles from "./checkout.module.scss";

const CheckoutPage = () => {

  return (
    <InnerPagesLayout>
      <div>I am inner page </div>
    </InnerPagesLayout>
  )
}

export default CheckoutPage;
