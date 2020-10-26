import React, { useEffect } from "react";
import useQuery from "hooks/use-query";
import { useDispatch, useSelector } from "react-redux";

import { fetchSelectedTeacherDetailsStart } from "store/customer/customer-actions";

import styles from "./checkout-summary.module.scss";

const CheckoutSummary = () => {
    const dispatch = useDispatch();
    const query = useQuery();
    const slug = query.get("slug");

    useEffect(() => {
        dispatch(fetchSelectedTeacherDetailsStart(slug))
    }, [fetchSelectedTeacherDetailsStart]);

    const { teacher } = useSelector(state => state.customer.selectedTeacherDetails);

    return (
        <div className={styles.wrapper}>I am checkout page</div>
    )
}

export default CheckoutSummary;